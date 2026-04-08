
# 🐳 Docker Guide

---

## Introduction

Docker is a core tool in modern DevOps and cloud-native development. It allows you to package applications with their dependencies into containers, ensuring they run consistently across development, testing, and production environments.

This guide focuses on **clear concepts + hands-on practice**, helping you confidently work with containerized applications in real-world scenarios.

---

## Purpose

This guide will help you:

* Understand Docker from basics to advanced
* Build and run containerized applications
* Dockerize a Node.js application from scratch
* Work with multi-container setups using Docker Compose
* Troubleshoot real-world container issues
* Prepare for DevOps interviews

---

## Key Topics Covered

### Core Concepts

* What is Docker & why it is used
* Docker Images vs Containers
* Docker vs Virtual Machines

### Setup & Commands

* Docker installation (CLI & Desktop)
* Essential Docker commands
* Debugging and troubleshooting

### Application Dockerization

* Running applications in containers
* Port mapping & environment variables
* Writing Dockerfiles (Node.js)
* Image layering

### Docker Compose

* Multi-container applications
* Services, ports, environment variables
* Volumes & data persistence

### Advanced Topics

* Docker Networking

  * Default & custom networks
  * Multi-container communication
  * Network drivers (Bridge, Host, Null)
* Volume mounting & persistence
* Publishing images to Docker Hub

---

## Why Learn Docker?

Docker enables you to:

* Ensure consistent environments
* Deploy applications faster
* Simplify dependency management
* Build scalable and portable systems

Essential for:

* DevOps Engineers
* Backend Developers
* Cloud Engineers
* Site Reliability Engineers (SREs)

---

## Learning Path

### 1. Basics

* What is Docker
* Images vs Containers
* Installation & setup

### 2. Core Usage

* Running containers
* Important commands
* Port mapping & environment variables

### 3. Application Dockerization

* Build Node.js container
* Write Dockerfile
* Understand image layers

### 4. Multi-Container Setup

* Docker Compose
* Services, volumes, environment variables

### 5. Advanced Concepts

* Networking
* Volumes & persistence
* Publishing to Docker Hub

---

## How to Use This Repository

```bash
1. READ     → 01-guide/01-docker-guide.md
2. RUN      → Try Docker commands locally
3. BUILD    → Dockerize the Node.js app
4. DEBUG    → Break & fix containers
5. SCALE    → Use Docker Compose
6. REVISE   → Use cheat sheets
```

---

## Repository Structure

```bash
Docker-Guide/
│
├── README.md
├── .gitignore
├── .dockerignore
│
├── 01-guide/
│   └── 01-docker-guide.md
│
├── 02-test-app/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── server.js
│   ├── package.json
│   └── public/
│
└── 03-cheat-sheets/
    └── 01-docker-commands.md
```

---

## Hands-On Project

### Node.js Dockerized Application

Inside `02-test-app/`, you will:

* Build and containerize a Node.js app
* Write a Dockerfile
* Run containers
* Use Docker Compose
* Practice real-world debugging

---

## Core Topics Index

1. What is Docker? Why do we need it?
2. Docker Images & Containers
3. Installation of Docker CLI & Desktop
4. Important Docker Commands
5. Docker vs VM
6. Port Mapping & Environment Variables
7. Troubleshooting Containers
8. Running Applications in Containers
9. Dockerizing a Node.js Application (Dockerfile)
10. Docker Compose

* Services
* Port Mapping
* Environment Variables
* Volumes

11. Publishing Images to Docker Hub
12. Layering in Docker Images
13. Volume Mounting
14. Docker Networking

* Default & Custom Networks
* Multi-container communication
* Network drivers (Bridge, Host, Null)

---

## Prerequisites

* Basic Linux commands
* Basic networking concepts
* Node.js basics (for project section)

---

## Tip for Beginners

Start simple:

* Run basic commands
* Observe container behavior
* Break things and fix them

Docker is best learned by doing, not just reading.

---

## Pro Tips

* Use `.dockerignore` to optimize builds
* Keep images lightweight
* Use meaningful tags
* Debug using `docker logs` and `docker exec`
* Prefer Docker Compose for multi-container apps

---

## License

MIT License — Free for personal and commercial use

---

## Support

If you find this useful:

* Star the repository ⭐
* Share with others
* Use it as your DevOps reference

---

## Start Learning

```bash
01-guide/01-docker-guide.md
```

Build → Run → Break → Debug → Repeat

---
