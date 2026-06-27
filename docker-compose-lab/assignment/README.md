
## 📄 `assignment/README.md`

# Docker Compose Lab — Assignment

## Objective

In this assignment, you will learn how to containerize a full-stack application using **Docker Compose** by connecting multiple services together.

You will build a system consisting of:

* A Node.js application
* MongoDB database
* Mongo Express (database UI)

## Problem Statement

You are given a basic Node.js application that allows users to sign up and stores their data in MongoDB.

Your task is to containerize the entire application using Docker Compose so that all services run together in isolated containers and communicate using a Docker network.

## Requirements

You must create a `docker-compose.yml` file that includes:

### 1. Node.js App Service

* Build from the provided `app/` directory
* Expose port `5050`
* Should connect to MongoDB using service name (`mongo`)

### 2. MongoDB Service

* Use official `mongo` image
* Expose port `27017`
* Configure authentication:

  * Username: `admin`
  * Password: `qwerty`
* Use volume for persistent storage

### 3. Mongo Express Service

* Use `mongo-express` image
* Expose port `8081`
* Connect to MongoDB using environment variables
* Should depend on MongoDB service

## Key Concepts to Learn

* Docker Compose multi-container setup
* Service networking in Docker
* Container dependency management (`depends_on`)
* Persistent volumes in MongoDB
* Environment variables in Docker

## Expected Outcome

After successful setup, you should be able to:

### Access Application:

- [http://localhost:5050](http://localhost:5050)

### Access Mongo Express UI:

- [http://localhost:8081](http://localhost:8081)

## Hints

* Use service name `mongo` instead of `localhost` inside Docker network
* Use `depends_on` to control startup order
* Use volumes to persist database data

## Goal of this Lab

By completing this assignment, you will understand:

> How real-world applications run using multiple Docker containers communicating together.