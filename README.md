# CS320 - Rate My Class

A full-stack web application that allows students to rate and review their classes. Built as a group project for CS320.

## Tech Stack

**Frontend:** React, TypeScript, Next.js

**Backend:** Python, Django, Django REST Framework

**Database:** PostgreSQL (Supabase)

**Tools:** Docker, Docker Compose, Git

## Project Structure

```text
CS320-Rate-My-Class/
├── frontend/
│   ├── app/
│   │   ├── components/       # Shared UI components
│   │   ├── ratings/
│   │   │   ├── professor/
│   │   │   │   └── page.tsx  # Professor view
│   │   │   └── page.tsx      # Student ratings view
│   │   ├── page.tsx          # Class search page
│   │   ├── layout.tsx        # Shared page layout
│   │   └── globals.css       # Global styles
│   ├── public/               # Static images and icons
│   ├── tests/                # Playwright browser tests
│   ├── playwright.config.ts
│   ├── package.json          # Frontend dependencies and scripts
│   └── Dockerfile
├── backend/
│   ├── api/
│   │   ├── migrations/       # Database schema migrations
│   │   ├── models.py         # Database models
│   │   ├── views.py          # API request handlers
│   │   └── tests.py          # Backend tests
│   ├── config/
│   │   ├── settings.py       # Django configuration
│   │   └── urls.py           # URL routing
│   ├── manage.py             # Django management commands
│   ├── Dockerfile
│   └── requirements.txt
├── docker-compose.yml        # Frontend and backend services
├── .env                      # Create locally; ignored by Git
├── .gitignore
└── README.md
```

## Prerequisites

**Install**:

- Docker Desktop
- Git

## Getting Started

### 1. Clone the Repository

```
git clone https://github.com/vserra3192/CS320-Rate-My-Class.git
cd CS320-Rate-My-Class
```

### 2. Set Up Environment Variables

Create a .env file in the main project folder and add your Supabase PostgreSQL connection string:

`DATABASE_URL=your_database_connection_string`

The .env file is ignored by Git to keep credentials private.

### 3. Run the Application

Make sure Docker Desktop is running, then run:

`docker compose up --build`

Once the containers are running, the application should be accessible at:

Frontend: http://localhost:3000

Backend: http://localhost:8000

### 4. Stop the Application

`docker compose down`

## Development

Frontend code is located in `frontend/`.

Backend code is located in `backend/`.

**Docker Compose** manages both services.

**PostgreSQL** is used to store application data.

## Testing

- **Frontend**: The framework used for testing the frontend is `Playwright`.
- **Backend**: Django's built-int test framework.
