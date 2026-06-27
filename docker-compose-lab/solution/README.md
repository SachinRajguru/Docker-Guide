
## 📄 `solution/README.md`

# Docker Compose Lab — Solution

## Overview

This solution demonstrates a fully containerized **Node.js + MongoDB + Mongo Express** application using Docker Compose.

All services run together and communicate through a shared Docker network.

## Architecture

The system consists of three services:

* **app** → Node.js backend (Express server)
* **mongo** → MongoDB database
* **mongo-express** → Web UI for MongoDB

## How to Run the Project

Make sure Docker is installed and running on your system.

### 1. Navigate to solution folder

```bash
cd docker-compose-lab/solution
```

### 2️. Build and start containers

```bash
docker-compose up --build
```

### 3️. Verify running containers

```bash
docker ps
```

You should see:

* node app container
* mongo container
* mongo-express container

## Access the Application

### Web App (Node.js)

- [http://localhost:5050](http://localhost:5050)

➤ Signup form to create users

### Mongo Express UI

- [http://localhost:8081](http://localhost:8081)

Login credentials (if prompted):

* Username: `admin`
* Password: `pass`

## Stop the Application

```bash
docker-compose down
```

To remove volumes as well:

```bash
docker-compose down -v
```

## Persistent Data

MongoDB data is stored using Docker volumes.

This ensures database data is preserved even if containers stop or restart.

## Important Concept

Containers communicate using Docker service names.

Example:

```yaml
mongo
```

acts as the hostname for MongoDB inside the Docker network.

## Notes

* The Docker Compose file builds the application from the root `app/` directory.
* MongoDB and Mongo Express use official Docker images from Docker Hub.

## Key Learnings

After completing this lab, you should understand:

* How multiple containers communicate in Docker
* How Docker Compose manages multi-service applications
* How environment variables configure services
* How persistent storage works with MongoDB volumes
* How service discovery works using container names

### ⚠️ Common Issues

✗ **App cannot connect to MongoDB**

✓ Ensure you are using:

```bash
mongodb://admin:qwerty@mongo:27017
```

NOT localhost.

✗ **Ports already in use**

✓ Stop local MongoDB or change ports in docker-compose.yml

## Goal Achieved

You now have a fully working **containerized full-stack application** running using `Docker Compose`.