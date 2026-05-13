
# Docker Compose Lab

## Overview

This module is part of the **Docker-Guide learning repository**.
It demonstrates how to build and run a **multi-container application using Docker Compose**.

You will learn how services like **Node.js, MongoDB, and Mongo Express** communicate inside a Docker network.

## What You Will Learn

* How Docker Compose manages multiple containers
* Service-to-service communication using service names
* Structuring containerized applications
* Basics of orchestration using Docker Compose
* Persistent storage with volumes

## Folder Structure

```bash
docker-compose-lab/
│
├── assignment/     # Problem statement (what to build)
├── solution/       # Working Docker Compose implementation
└── README.md       # Module overview (this file)
```

## How to Use This Lab

### 1️. Read the Assignment

```bash
assignment/README.md
```

Understand the problem statement and requirements.

### 2️. View the Solution

```bash
solution/docker-compose.yml
```

This contains the complete working implementation.

### 3️. Run the Project

```bash
cd solution
docker-compose up --build
```

## Access Services

### Node.js Application

- [http://localhost:5050](http://localhost:5050)

### Mongo Express (Database UI)

- [http://localhost:8081](http://localhost:8081)

## Services Overview

### app (Node.js)

* Handles user signup
* Connects to MongoDB
* Serves frontend UI (`public/`)

### mongo (Database)

* Stores application data
* Uses persistent volume for data retention

### mongo-express (Admin UI)

* Web-based MongoDB dashboard
* Used for debugging and verification

## Key Concepts Covered

* Docker Compose multi-container architecture
* Service networking using container names
* Container dependency management
* Environment variables in Docker
* Persistent data storage with volumes
* Full-stack containerized application setup

## Goal of This Lab

To understand how real-world applications run as **multiple interconnected containers**, rather than a single monolithic service.

## Notes

* Ensure Docker is installed and running before starting
* Services communicate using Docker network (not localhost)
* Always use service name `mongo` for database connection

## Next Steps

After completing this lab, you can extend your learning with:

* Kubernetes (Minikube)
* CI/CD pipelines (GitHub Actions)
* Container orchestration at scale
* GitOps (ArgoCD)