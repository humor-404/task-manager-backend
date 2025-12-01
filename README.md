# Task Manager Backend

A simple Task Manager API built with Node.js, Express, MongoDB, and JWT authentication.
This project allows users to sign up, log in, create tasks, view tasks, update tasks, and delete tasks securely.

---

## Features
- User authentication with JWT
- Protected routes using middleware
- CRUD operations for tasks
- Each task linked to a specific user
- Error handling and proper HTTP status codes
- Partial updates for tasks (PATCH)
- Secure ownership check for viewing, updating, and deleting tasks

---

## Technologies
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- dotenv for environment variables
- bcryptjs for password hashing

---

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /signup  | Create a new user |
| POST   | /login   | Login user and receive JWT token |
| POST   | /refreshToken| Recieve JWT token from refreshToken|

### Tasks
> All task routes require a valid Bearer token in the `Authorization` header.

| Method | Endpoint      | Description                        |
|--------|---------------|------------------------------------|
| POST   | /tasks        | Create a new task                  |
| GET    | /tasks        | Get all tasks of the logged-in user|
| GET    | /task/:id     | Get a single task by ID            |
| PATCH  | /task/:id     | Update a task (partial update)     |
| DELETE | /task/:id     | Delete a task                      |