# Creating the backend api routes in Django

# Main takeaways

* We wrote the implementation of the proposed endpoints from Sprint 3. These include getting all the courses, getting the summarized info for a spesfic course, getting the reviews for a spesfic course, posting a review, editing a review, and I also added an endpoint which we didnt say which is deleting a review. 
* We can handle the routing and requesting and stuff now but in order to access actual data and save data into our supabase we need to connect it to supabase

# Resource Usage 

 Tool and model used: ChatGPT
 Estimated 20,000–40,000 tokens ≈ $0.05–$0.15 USD (API equivalent; actual usage unavailable).
 ^ This is according to ChatGPT. This is a free trial for the Plus tier, so keep that in mind for pricing

 ## Chat Log

 i need help coding the django api endpoints for my cs320 rate my class project.
here is our github repo:
https://github.com/vserra3192/CS320-Rate-My-Class
i'm working on the django-api-routes branch. i want to implement the api routes in urls.py and the functions in views.py. my teammates are handling the supabase connection, so for now we just need to work on the django side.
these are the endpoints we planned:
GET /api/v1/courses/ - get all courses with basic rating summaries
GET /api/v1/courses/123/ - get a specific course with its detailed rating summaries
GET /api/v1/courses/123/reviews/ - get the individual reviews for a course
POST /api/v1/courses/123/reviews/ - submit a new review
PATCH /api/v1/reviews/456/ - edit an existing review
DELETE /api/v1/reviews/456/ - delete an existing review
we don't need an endpoint to view an individual review since the frontend already displays the reviews on the course page.
my class allows ai to write code, but not design features, write documentation, or make tests. i also need to save the entire chat for my ai usage log.
can you code the intended functionality for the backend apis in the django for me.













Worked for 8m 21s


I’ll inspect the django-api-routes branch and the uploaded repository bundle, then implement the six endpoints in the existing Django structure. I’ll keep Supabase integration separate, avoid adding unplanned features or tests, and identify anything your teammates will need to connect later.









Inspected Django repository architecture and implemented intended API functionality





Designed backend scope and implemented API boundaries


Defined Django routes and finalized backend scope


Inspected Git metadata, repository configuration, frontend APIs, and Django branches





Delivered integration-ready APIs





Designed Django APIs with deferred and pluggable data access





Implemented API contracts


Implemented Django course review API endpoints






The repository has no course/review schema yet, and the remote GitHub repository does not currently show a django-api-routes branch, although it exists in your uploaded bundle. I’ll work from that bundle and provide an importable patch. The API will use Django ORM calls behind a small adapter so your teammates can connect their database models without rewriting the routes.









Clarified implementation limits


Implemented Course Review API backend






The routes and view functions are now written. They calculate course rating averages, validate review ratings and comments, support creating/editing/deleting reviews, and restrict edits and deletions to the review’s author. I’ve kept the storage calls separate and left the existing models.py untouched.

I’m checking the files and packaging the changes now.









Installed Django dependencies and validated API route changes and ZIP integrity













I inspected the repository bundle. The backend already uses Django REST Framework, but currently:
- backend/config/urls.py only registers /api/health/.
- backend/api/views.py only contains the health-check function.
- backend/api/models.py is empty, so there are no database models for courses or reviews yet.
- The frontend includes the planned rating categories: overall rating, group vs. solo work, presentations, in-class workload, and out-of-class workload.
I'll preserve your six agreed endpoints and the existing health check. No additional endpoints, feature designs, documentation files, or tests are needed.

One important limitation: Django can handle routing, request validation, permissions, and HTTP responses now, but retrieving and permanently saving actual courses and reviews requires the database layer your teammates are building.
Django API implementation
Download the completed Django API files

Download the Git patch


The implementation covers all six requested operations:
Endpoint	Implemented behavior
GET /api/v1/courses/	List courses with average ratings
GET /api/v1/courses/123/	Course details and rating breakdowns
GET /api/v1/courses/123/reviews/	List individual course reviews
POST /api/v1/courses/123/reviews/	Validate and create a review
PATCH /api/v1/reviews/456/	Update an author's review
DELETE /api/v1/reviews/456/	Delete an author's review

No individual-review GET endpoint was added.
How to add the code
The ZIP contains the three changed files in their correct directories. You can extract them into your repository, replacing views.py and urls.py.

Alternatively, download the patch, open a terminal in your project directory, and run:
git switch django-api-routes
git apply path/to/cs320_django_api_routes.patch
git status


I have not pushed or committed changes to GitHub.
What remains for your teammates
The views call data_access.py, which expects Course and Review Django models. Those models don't currently exist, so database-dependent requests will return HTTP 503 until they are connected.

Your teammates will also need to connect authentication so the API knows who owns each review. The current implementation uses Django's authenticated user.

I validated Python syntax and verified that the patch applies cleanly to your uploaded branch. I couldn't run Django's runtime checks because the required packages weren't available in this environment. No test or documentation files were created.

For your course's AI usage requirement, preserve this entire conversation using ChatGPT's sharing or data-export functionality rather than only saving the code.

Next step: Apply the patch to your local branch, then coordinate the Course, Review, and authentication integration with your teammates.