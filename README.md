CS320 - Rate My Class

A full-stack web application that allows students to rate and review their classes. Built as a group project for CS320.

Tech Stack

Frontend: React, JavaScript, Node.js

Backend: Python, Django, Django REST Framework

Database: PostgreSQL (Supabase)

Tools: Docker, Docker Compose, Git

Project Structure

CS320-Rate-My-Class/
├── frontend/
│   └── Dockerfile
├── backend/
│   ├── Dockerfile
│   └── requirements.txt
├── docker-compose.yml
├── .env
├── .gitignore
└── README.md

Getting Started

1. Clone the Repository

git clone https://github.com/vserra3192/CS320-Rate-My-Class.git
cd CS320-Rate-My-Class

2. Set Up Environment Variables

Create a .env file in the main project folder and add your Supabase PostgreSQL connection string:

DATABASE_URL=your_database_connection_string

The .env file is ignored by Git to keep credentials private.

3. Run the Application

Make sure Docker Desktop is running, then run:

docker compose up --build

Once the containers are running, the application should be accessible at:

Frontend: http://localhost:3000

Backend: http://localhost:8000

4. Stop the Application

docker compose down

Development

Frontend code is located in frontend/.

Backend code is located in backend/.

Docker Compose manages both services.

PostgreSQL is used to store application data.

Status

Work in progress.