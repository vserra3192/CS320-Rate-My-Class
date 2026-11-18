from django.http import JsonResponse
from rest_framework import serializers, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from . import data_access


class ReviewInputSerializer(serializers.Serializer):
    overall_rating = serializers.IntegerField(min_value=1, max_value=5)
    group_vs_solo = serializers.IntegerField(min_value=1, max_value=5)
    presentations = serializers.IntegerField(min_value=1, max_value=5)
    workload_in_class = serializers.IntegerField(min_value=1, max_value=5)
    workload_out_of_class = serializers.IntegerField(min_value=1, max_value=5)
    comment = serializers.CharField(max_length=1000, required=False, allow_blank=True)
    semester = serializers.CharField(max_length=50, required=False, allow_blank=True)
    anonymous = serializers.BooleanField(required=False, default=False)

    def validate(self, attrs):
        unexpected = set(self.initial_data) - set(self.fields)
        if unexpected:
            raise serializers.ValidationError(
                {field: "This field cannot be submitted." for field in sorted(unexpected)}
            )
        return attrs


def _rating_summary(reviews):
    summary = {}
    for field in data_access.RATING_FIELDS:
        scores = [float(review[field]) for review in reviews if review.get(field) is not None]
        summary[field] = round(sum(scores) / len(scores), 1) if scores else None
    return summary


def _rating_counts(reviews):
    return {
        field: {
            str(score): sum(review.get(field) == score for review in reviews)
            for score in range(1, 6)
        }
        for field in data_access.RATING_FIELDS
    }


def _course_with_summary(course, reviews, detailed=False):
    response = {
        **course,
        "review_count": len(reviews),
        "average_ratings": _rating_summary(reviews),
    }
    if detailed:
        response["rating_counts"] = _rating_counts(reviews)
    return response


def _public_review(review):
    response = {
        field: review.get(field)
        for field in data_access.REVIEW_FIELDS
        if field != "author_id"
    }
    is_anonymous = bool(review.get("anonymous"))
    author_type = "professor" if review.get("author_role") == "professor" else "student"
    response["author"] = (
        f"Anonymous {author_type}"
        if is_anonymous
        else review.get("author_name") or author_type.capitalize()
    )
    response["author_role"] = review.get("author_role")
    return response


def _is_owner(request, review):
    return str(review["author_id"]) == str(request.user.pk)


def health(request):
    return JsonResponse({"status": "ok"})


@api_view(["GET"])
def courses(request):
    reviews_by_course = {}
    for review in data_access.list_all_reviews():
        reviews_by_course.setdefault(review["course_id"], []).append(review)

    results = [
        _course_with_summary(course, reviews_by_course.get(course["id"], []))
        for course in data_access.list_courses()
    ]
    return Response(results)


@api_view(["GET"])
def course_detail(request, course_id):
    course = data_access.get_course(course_id)
    if course is None:
        return Response({"detail": "Course not found."}, status=status.HTTP_404_NOT_FOUND)

    reviews = data_access.list_reviews(course_id)
    return Response(_course_with_summary(course, reviews, detailed=True))


@api_view(["GET", "POST"])
@permission_classes([IsAuthenticatedOrReadOnly])
def course_reviews(request, course_id):
    course = data_access.get_course(course_id)
    if course is None:
        return Response({"detail": "Course not found."}, status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        reviews = data_access.list_reviews(course_id)
        return Response([_public_review(review) for review in reviews])

    serializer = ReviewInputSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    review = data_access.create_review(
        course_id=course_id,
        author_id=request.user.pk,
        values=serializer.validated_data,
    )
    return Response(_public_review(review), status=status.HTTP_201_CREATED)


@api_view(["PATCH", "DELETE"])
@permission_classes([IsAuthenticatedOrReadOnly])
def review_detail(request, review_id):
    review = data_access.get_review(review_id)
    if review is None:
        return Response({"detail": "Review not found."}, status=status.HTTP_404_NOT_FOUND)
    if not _is_owner(request, review):
        return Response(
            {"detail": "You can only modify your own reviews."},
            status=status.HTTP_403_FORBIDDEN,
        )

    if request.method == "DELETE":
        if not data_access.delete_review(review_id, request.user.pk):
            return Response({"detail": "Review not found."}, status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_204_NO_CONTENT)

    serializer = ReviewInputSerializer(data=request.data, partial=True)
    serializer.is_valid(raise_exception=True)
    if not serializer.validated_data:
        return Response(
            {"detail": "At least one review field must be provided."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    updated = data_access.update_review(
        review_id=review_id,
        author_id=request.user.pk,
        values=serializer.validated_data,
    )
    if updated is None:
        return Response({"detail": "Review not found."}, status=status.HTTP_404_NOT_FOUND)
    return Response(_public_review(updated))
