
# 🐳 Docker Guide

> A hands-on, project-based learning guide to mastering Docker for real-world DevOps and cloud-native application development.

## Overview

Docker is a core DevOps tool used to package applications and their dependencies into lightweight containers. These containers ensure consistent behavior across development, testing, and production environments.

This guide focuses on **practical learning**, helping you build confidence with containerized applications through real-world examples.

## Purpose

This guide helps you go from Docker fundamentals to real-world containerized applications through hands-on practice.

You will learn how to:

* Understand Docker architecture and core concepts
* Build and run containerized applications
* Dockerize a Node.js application from scratch
* Work with multi-container systems using Docker Compose
* Debug and troubleshoot container issues
* Prepare for DevOps interviews and real-world scenarios

## What You Will Be Able To Do

By the end of this guide, you will be able to:

* Build Docker images from scratch using Dockerfiles
* Run and manage containers efficiently
* Debug container logs and runtime issues
* Create multi-container applications using Docker Compose
* Implement networking and volume persistence
* Push and publish images to Docker Hub
* Work confidently in DevOps environments

## Key Learning Areas

### 1. Docker Fundamentals

* What is Docker and why it is used
* Docker architecture
* Images vs Containers
* Docker vs Virtual Machines

### 2. Setup & Core Commands

* Installing Docker (CLI & Desktop)
* Essential Docker CLI commands
* Container lifecycle management
* Debugging with logs and exec

### 3. Application Containerization

* Running applications in containers
* Port mapping
* Environment variables
* Writing Dockerfiles (Node.js)
* Understanding image layers

### 4. Multi-Container Applications

* Docker Compose basics
* Services configuration
* Networking between containers
* Environment variables in Compose

### 5. Data & Networking

* Docker volumes and persistence
* Default and custom networks
* Bridge, Host, and Null drivers
* Inter-container communication

### 6. Image Publishing

* Tagging Docker images
* Pushing images to Docker Hub
* Versioning strategies

## Hands-On Project

### Node.js Dockerized Application

Inside `app/`, you will:

* Build a Node.js application image
* Create a Dockerfile from scratch
* Run containers locally
* Use Docker Compose for multi-container setup
* Practice debugging real-world issues

## Repository Structure

```
Docker-Guide/
│
├── app/                      # Dockerized Node.js application
│   ├── public/               # Frontend (HTML/CSS)
│   ├── server.js             # Express server
│   ├── Dockerfile            # App container definition
│   ├── package.json
│   ├── package-lock.json
│   ├── .dockerignore
│   └── README.md
│
├── docker-compose-lab/       # Multi-container Docker Compose lab
│   ├── assignment/           # Practice exercise
│   ├── solution/             # Working implementation
│   └── README.md
│
├── cheatsheets/              # Docker commands reference
├── docs/                     # Learning notes and theory
├── .gitignore
└── README.md
```

## How to Use This Repository

Follow this practical workflow:

1. Read → `docs/01-docker-guide.md`
2. Run → Execute Docker commands locally
3. Build → Dockerize the Node.js application
4. Debug → Break and fix containers
5. Scale → Use Docker Compose for multi-container setups
6. Revise → Use cheat sheets for quick reference

## Prerequisites

Before starting, make sure you have:

* Basic Linux command knowledge
* Basic networking fundamentals
* Node.js basics (for hands-on project section)
* Docker installed (CLI or Desktop)

## Learning Strategy

Start simple and build progressively:

* Run basic Docker commands
* Observe container behavior
* Modify and break containers intentionally
* Debug issues using logs and exec
* Build real applications using Docker Compose

## Pro Tips

* Use `.dockerignore` to optimize image builds
* Keep Docker images lightweight
* Always tag images properly (`v1`, `latest`, etc.)
* Use `docker logs` and `docker exec` for debugging
* Prefer Docker Compose for multi-container systems
* Avoid installing unnecessary dependencies in images

## Core Topics Index

* Docker architecture
* Images and containers
* Docker CLI essentials
* Dockerfile best practices
* Port mapping & environment variables
* Container debugging techniques
* Docker Compose workflows
* Networking in Docker
* Volumes & data persistence
* Publishing images to Docker Hub

## Learning Path

### 1. Foundations

* Docker basics
* Images vs containers
* Installation setup

### 2. Core Usage

* Running containers
* Essential commands
* Port mapping & environment variables

### 3. Containerization

* Dockerfile creation
* Node.js app containerization
* Image layering concepts

### 4. Multi-Container Systems

* Docker Compose
* Services communication
* Networking

### 5. Advanced Topics

* Volumes and persistence
* Networking drivers
* Docker Hub publishing

## Why Learn Docker?

Docker is essential for modern software development because it enables:

* Consistent environments across teams
* Faster deployment cycles
* Simplified dependency management
* Scalable microservice architecture
* Better DevOps workflows

It is a must-have skill for:

* DevOps Engineers
* Backend Developers
* Cloud Engineers
* Site Reliability Engineers (SREs)

## Getting Started

Start here:

➤ `docs/01-docker-guide.md`

Then follow the workflow:

**Build → Run → Break → Debug → Repeat**
