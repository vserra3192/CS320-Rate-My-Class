from django.contrib import admin
from django.urls import path

from api import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/health/", views.health),
    path("api/v1/courses/", views.courses, name="course-list"),
    path("api/v1/courses/<int:course_id>/", views.course_detail, name="course-detail"),
    path(
        "api/v1/courses/<int:course_id>/reviews/",
        views.course_reviews,
        name="course-reviews",
    ),
    path("api/v1/reviews/<int:review_id>/", views.review_detail, name="review-detail"),
]
