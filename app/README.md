
# 🐳 Dockerized Node.js + MongoDB Application

## Overview

This application is part of the **Docker-Guide** learning repository.

It is a simple full-stack application built using **Node.js, Express, and MongoDB**, designed to help you understand:

* Docker fundamentals
* Containerization
* Docker networking
* Docker Compose
* MongoDB integration
* Multi-container applications

The application allows users to sign up through a simple frontend form and stores user information in a MongoDB database.

## Learning Objectives

After completing this project, you should be able to:

* Build a Docker image for a Node.js application
* Run applications inside Docker containers
* Connect a Node.js application to MongoDB
* Understand Docker networking and service discovery
* Work with multi-container applications
* Organize a simple containerized project for DevOps learning

## Application Architecture

```text
Frontend (HTML/CSS)
        │ HTTP Request
        ▼
Node.js (Express Server)
        │ MongoDB Driver
        ▼
MongoDB Database
```

### Dockerized Architecture

```text
┌──────────────────────┐
│   Frontend (HTML)    │
└─────────┬────────────┘
          │ HTTP
          ▼
┌──────────────────────┐
│ Node.js Backend API  │
│ (Express Server)     │
└─────────┬────────────┘
          │ MongoDB Driver
          ▼
┌──────────────────────┐
│  MongoDB Container   │
└──────────────────────┘
```

## Project Structure

```text
app/
│
├── public/
│   ├── index.html
│   └── style.css
│
├── server.js
├── package.json
├── package-lock.json
│
├── Dockerfile
├── .dockerignore
├── mongo-db.yml
└── README.md
```

## File Descriptions

| File                | Purpose                                                  |
| ------------------- | -------------------------------------------------------- |
| `server.js`         | Main Express server                                      |
| `Dockerfile`        | Defines how the Docker image is built                    |
| `.dockerignore`     | Excludes unnecessary files from the Docker build context |
| `public/`           | Contains static frontend files                           |
| `package.json`      | Project metadata and dependencies                        |
| `package-lock.json` | Locks dependency versions                                |
| `mongo-db.yml`      | Docker Compose configuration for the MongoDB container   |

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Docker
* HTML5
* CSS3

## Features

* User signup form
* Express-based backend API
* MongoDB database integration
* Dockerized Node.js application
* Static frontend served using Express
* Beginner-friendly project structure for Docker and DevOps learning

## Prerequisites

Before running this project, ensure the following software is installed:

* Node.js
* npm
* Docker
* MongoDB (required only for local execution without Docker)

## Run Application Locally (Without Docker)

### 1. Install dependencies

```bash
npm install
```

### 2. Start the application

```bash
node server.js
```

### 3. Open the application

Visit:

```text
http://localhost:5050
```

## Run Using Docker

### 1. Build the Docker image

```bash
docker build -t node-app .
```

This command creates a Docker image named **node-app**.

### 2. Run the Docker container

```bash
docker run -d -p 5050:5050 node-app
```

This starts the application in a detached container and maps container port **5050** to your local machine.

## Run MongoDB Using Docker Compose

Start the MongoDB container:

```bash
docker compose -f mongo-db.yml up -d
```

Stop the MongoDB container:

```bash
docker compose -f mongo-db.yml down
```

> **Note:** This project currently uses Docker Compose only for MongoDB. The Node.js application is run separately. In later labs, both services will be managed together using a single `docker-compose.yml` file.

## MongoDB Configuration

### Local Environment

The application connects to MongoDB using:

```text
mongodb://admin:qwerty@localhost:27017
```

### Docker Compose Environment

When MongoDB runs inside Docker Compose, the hostname changes to:

```text
mongodb://admin:qwerty@mongo:27017
```

> Docker Compose automatically provides internal DNS-based service discovery, allowing the application to reach the MongoDB container using the service name (`mongo`) instead of an IP address.

## Concepts Practiced

### 🐳 Docker

* Docker image creation
* Image layering
* Container lifecycle management
* Port mapping
* `.dockerignore` optimization

### 🌐 Backend Development

* Express server setup
* Static file serving
* REST API fundamentals

### 🗄️ Database

* MongoDB integration
* Database connectivity
* CRUD data storage
* Containerized database

### 🔗 Networking

* Docker networking
* Docker Compose service discovery
* Multi-container communication

### ⚙️ DevOps

* Application containerization
* Environment-specific configuration
* Organizing a containerized project

## Notes

* Default application port: **5050**
* Default MongoDB port: **27017**
* Static frontend files are served from the `public/` directory.
* Use `localhost` when connecting to a locally installed MongoDB instance.
* Use the Docker Compose service name (`mongo`) when MongoDB runs inside Docker Compose.
* This project is designed for learning Docker and DevOps fundamentals.

## Next Learning Steps

After completing this project, continue with:

1. Docker Compose
2. Docker Volumes
3. Docker Networks
4. Multi-container applications
5. Kubernetes
6. CI/CD using GitHub Actions or Jenkins
7. Production deployment strategies
