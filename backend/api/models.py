from django.db import models

# Keep the Python field names below. Change db_table and db_column to
# match Supabase, and check each field's type and nullability.
class Course(models.Model):
    id = models.BigAutoField(primary_key=True, db_column="courseid")
    title = models.TextField(db_column="classname")
    professor = models.TextField(db_column="professor")
    gen_ed = models.TextField(db_column="geneds")
    semester = models.TextField(db_column="semester")
    year = models.TextField(db_column="year")
    email = models.TextField(db_column="email")

    class Meta:
        managed = False
        db_table = "Class"


class Review(models.Model):
    id = models.BigAutoField(primary_key=True, db_column="reviewid")
    course = models.ForeignKey(
        Course,
        on_delete=models.DO_NOTHING,
        db_column="courseid",
    )
    # Use UUIDField if this column references Supabase Auth's UUID user IDs.
    author_id = models.BigIntegerField(db_column="userid")
    overall_rating = models.SmallIntegerField(null=True, db_column="overallrating")
    group_vs_solo = models.SmallIntegerField(null=True, db_column="groupvssolo")
    presentations = models.SmallIntegerField(null=True, db_column="projectvstest")
    workload_in_class = models.SmallIntegerField(null=True, db_column="inclassvsoutofclass")
    comment = models.TextField(blank=True, null=True, db_column="reviewbody")
    anonymous = models.BooleanField(default=False, db_column="isanon")
    created_at = models.DateTimeField(auto_now_add=True, db_column="dateposted")

    # The API uses author_name and author_role if available. Add fields
    # or properties for them once you know where that data is stored.

    class Meta:
        managed = False
        db_table = "Reviews"
