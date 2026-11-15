# LifeTracker

LifeTracker is a personal productivity application designed to organize and track progress across different areas of life, including personal goals, daily tasks, habits, activities, and hobbies.

This project also serves as a hands-on learning environment to refresh and strengthen my software engineering skills while exploring modern development practices and technologies.

## Tech Stack

- **Frontend:** Angular, TypeScript, HTML, SCSS
- **Backend:** Java 21, Spring Boot
- **Database:** PostgreSQL
- **Database Migrations:** Flyway
- **Containerization:** Docker & Docker Compose (planned)

## Project Structure

```text
lifetracker/
├── backend/       # Spring Boot REST API
├── frontend/      # Angular application
├── .gitignore
└── README.md
```

## Prerequisites

Make sure the following tools are installed:

- Java 21
- Maven
- Node.js and npm
- Angular CLI
- PostgreSQL (or Docker, when containerized database support is available)
- Git

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/lifetracker.git
cd lifetracker
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Run the Spring Boot application:

```bash
./mvnw spring-boot:run
```

On Windows:

```bash
mvnw.cmd spring-boot:run
```

### 3. Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
ng serve
```

The frontend will be available at `http://localhost:4200`.

## API

The backend exposes REST endpoints.

### Health Check

```http
GET /api/health
```

Example response:

```json
{
  "status": "UP"
}
```

Backend URL: `http://localhost:8080`

## Planned Features

- Task management
- Goal tracking
- Habit tracking
- Activity and hobby tracking
- Progress monitoring and statistics
- REST API integration between Angular and Spring Boot
- PostgreSQL persistence
- Database versioning with Flyway
- Docker-based development environment
- Automated testing and CI/CD with GitHub Actions

## Development Approach

This project is developed incrementally, following professional software engineering practices:

- Git feature branches and Pull Requests
- Clean code and modular architecture
- RESTful API design
- Database migrations
- Automated testing
- Containerization and CI/CD

## License

This project is licensed under the MIT License.

## Project Status

Currently under initial development.