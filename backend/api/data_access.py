from django.apps import apps
from django.db import transaction
from rest_framework.exceptions import APIException


class StorageUnavailable(APIException):
    status_code = 503
    default_detail = "Course and review database models have not been connected yet."
    default_code = "storage_unavailable"


COURSE_FIELDS = ("id", "code", "title", "professor", "credits")
RATING_FIELDS = (
    "overall_rating",
    "group_vs_solo",
    "presentations",
    "workload_in_class",
    "workload_out_of_class",
)
REVIEW_FIELDS = (
    "id",
    "course_id",
    "author_id",
    "semester",
    *RATING_FIELDS,
    "comment",
    "anonymous",
    "created_at",
)


def _model(name):
    try:
        return apps.get_model("api", name)
    except LookupError as exc:
        raise StorageUnavailable() from exc


def _course_data(course):
    return {field: getattr(course, field) for field in COURSE_FIELDS}


def _review_data(review):
    data = {field: getattr(review, field, None) for field in REVIEW_FIELDS}
    data["author_name"] = getattr(review, "author_name", None)
    data["author_role"] = getattr(review, "author_role", None)
    return data


def list_courses():
    Course = _model("Course")
    return [_course_data(course) for course in Course.objects.all().order_by("id")]


def get_course(course_id):
    Course = _model("Course")
    course = Course.objects.filter(pk=course_id).first()
    return _course_data(course) if course is not None else None


def list_all_reviews():
    Review = _model("Review")
    return [_review_data(review) for review in Review.objects.all().order_by("-created_at", "-pk")]


def list_reviews(course_id):
    Review = _model("Review")
    return [
        _review_data(review)
        for review in Review.objects.filter(course_id=course_id).order_by("-created_at", "-pk")
    ]


def get_review(review_id):
    Review = _model("Review")
    review = Review.objects.filter(pk=review_id).first()
    return _review_data(review) if review is not None else None


def create_review(course_id, author_id, values):
    Review = _model("Review")
    review = Review.objects.create(course_id=course_id, author_id=author_id, **values)
    return _review_data(review)


def update_review(review_id, author_id, values):
    Review = _model("Review")
    with transaction.atomic():
        updated = Review.objects.filter(pk=review_id, author_id=author_id).update(**values)
        if not updated:
            return None
        review = Review.objects.get(pk=review_id)
        return _review_data(review)


def delete_review(review_id, author_id):
    Review = _model("Review")
    deleted, _ = Review.objects.filter(pk=review_id, author_id=author_id).delete()
    return deleted > 0
