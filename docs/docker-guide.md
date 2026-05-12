
# 🐳 Docker: Complete Practical Lab & Technical Guide

## Table of Contents
1. [What is Docker? Why Do We Need It?](#1-what-is-docker-why-do-we-need-it)
2. [Docker Images & Containers](#2-docker-images--containers)
3. [Docker vs Virtual Machines](#3-docker-vs-virtual-machines)
4. [Installation of Docker CLI & Desktop](#4-installation-of-docker-cli--desktop)
5. [Important Docker Commands](#5-important-docker-commands)
6. [Layering in Docker Images](#6-layering-in-docker-images)
7. [Port Mapping & Setting Environment Variables](#7-port-mapping--setting-environment-variables)
8. [Troubleshooting Containers](#8-troubleshooting-containers)
9. [Using Containers to Build a Node Application](#9-using-containers-to-build-a-node-application)
10. [Docker Compose (Multi-Container Applications)](#10-docker-compose-multi-container-applications)
11. [Dockerization of Node.js Application (Dockerfile)](#11-dockerization-of-nodejs-application-dockerfile)
12. [Publishing Docker Images to Docker Hub](#12-publishing-docker-images-to-docker-hub)
13. [Docker Volumes (Data Persistence)](#13-docker-volumes-data-persistence)
14. [Docker Networking](#14-docker-networking)

---

## 1. What is Docker? Why Do We Need It?

Modern software development involves multiple developers, multiple environments, and multiple systems working together.

Applications are developed and tested across:

- Developer laptops
- QA/testing environments
- Staging servers
- Production servers

One of the biggest challenges in traditional software development is:

> The application works perfectly on one machine but fails on another.

This problem became one of the biggest pain points in software engineering and eventually led to the rise of Docker.

Before learning Docker commands or architecture, it is important to understand:

- Why Docker was created
- What problems it solves
- Why companies heavily rely on it today

### Problem in Traditional Development

**Example Scenario**

Imagine you are building a Node.js application.

On your machine, you install:

- `Node.js v18`
- `MongoDB v5`

Everything works perfectly.

Your application runs smoothly.

Now a new developer joins the team.

They install:

- `Node.js v20`
- `MongoDB v6`

Suddenly:

- Some features stop working
- Dependencies break
- Commands fail
- APIs behave differently
- Bugs appear unexpectedly

The application that worked perfectly on your machine now behaves differently on another system.

This leads to the famous software development problem:

**"It works on my machine❗"**

### Why This Problem Happens

#### 1. Manual Dependency Installation

Traditionally, developers install software manually:

- Node.js
- Python
- MongoDB
- MySQL
- Libraries
- Runtime dependencies

Manual setup introduces:

- Human errors
- Missing packages
- Wrong configurations

Manual setup becomes:

- Slow
- Error-prone
- Difficult to maintain

#### 2. Version Mismatch

Applications often depend on specific versions.

Example:

- Developer A: `Node.js v18`
- Developer B: `Node.js v20`

Some packages compatible with `Node.js v18` may fail in `Node.js v20`.

Even a minor version difference can introduce bugs.

- Correct Version  → Application Works ✓
- Wrong Version    → Application Breaks ✗

#### 3. Operating System Differences

Commands behave differently across operating systems.

Example:

```bash
rm -rf folder
```

- Works in Linux/macOS.
- Fails in Windows CMD.

Different operating systems create inconsistency.

#### 4. Environment Differences

Development, testing, staging, and production environments are often different.

✓ Works in Development

✗ Fails in Production

This happens because:

- Different libraries
- Different OS
- Different runtime versions
- Different configurations

#### 5. Scaling Teams = Scaling Problems

Small teams can manage setup manually.

Large teams cannot.

Imagine:

- 10+ developers
- Different laptops
- Different operating systems
- Multiple environments

Result:

- Inconsistent setups
- Difficult onboarding
- Deployment failures
- Increased debugging time

#### Visualizing the Problem

```bash
Developer A Machine:
Node.js v18 + MongoDB v5 → Works ✓
```
```bash
Developer B Machine:
Node.js v20 + MongoDB v6 → Bugs ✗
```

#### Real-World Impact

Without Docker:

- Setup takes hours
- Bugs become environment-dependent
- Onboarding new developers becomes difficult
- Production failures increase

Organizations need:

- Consistency ✓
- Portability ✓
- Reliable deployment ✓

### ✓ The Solution: Docker

Docker solves these problems by creating **standardized environments**.

Instead of manually installing dependencies on every machine:

Docker packages everything together.

Docker solves:

- Environment inconsistency
- Dependency conflicts
- Setup complexity
- Team scalability issues
- Deployment mismatch problems

## What is Docker?

Docker is a platform that helps you:

- Build applications
- Package applications
- Run applications

using **containers**.

### Shipping Container Analogy

Think about shipping containers used in logistics.

The same container works on:

- Ships
- Trucks
- Trains

because the container format is standardized.

Similarly, a Docker container works consistently on:

- Windows
- macOS
- Linux

### Docker Standardization

Without Docker: `Every machine behaves differently`

With Docker: `Same environment everywhere`

Docker ensures that the application behaves consistently across:

- Developer machines
- Testing environments
- Staging servers
- Production servers

### Key Insight

Docker does NOT package only the application.

It packages:

- Application code
- Runtime
- Libraries
- Dependencies
- Configurations

Everything travels together as a single standardized unit.

This ensures the application behaves the same everywhere.

### Mini Summary

- Traditional development environments are inconsistent
- Manual setup causes dependency conflicts
- Applications behave differently across machines
- Docker standardizes environments
- Docker eliminates "It works on my machine" problems

---

## 2. Docker Images & Containers

Now that we understand the problem Docker solves, let's understand Docker itself.

### What is Docker?

Docker is a platform that helps you:

- Build applications
- Package applications
- Run applications

inside isolated environments called containers.

### Two Core Concepts

1. Container
2. Image

Understanding these = understanding Docker

### Mini Summary

- Docker simplifies environment setup 
- Containers and Images are core building blocks 

## Docker Containers — The Execution Unit

Containers are what actually run your application.

### What is a Container?

A container is:

> A packaged environment containing everything required to run an application.

It includes:

- Application code
- Runtime
- Libraries
- Dependencies
- Configuration

### Container Structure

```bash
[Container]
 ├── Application Code
 ├── Runtime (Node/Python/etc.)
 ├── Libraries
 └── Dependencies
```

### Key Idea

Without Docker:

You install separately:

- Node.js
- MongoDB
- Libraries
- Dependencies

With Docker:

Everything is bundled into one container.

✓ One Container

### Real-World Example

- You build app on Machine A → create container
- Send container to Machine B → run instantly

✓ No setup needed!

### Key Properties of Containers

#### 1. Portable

- Share easily
- Runs anywhere — Mac, Windows, Linux.

#### 2. Lightweight

- Minimal overhead (Less overhead than VMs)
- Fast to create/delete
- Small size 

#### 3. Isolated

- Independent environment 
- Each container has its own:
  - File system 
  - Dependencies 
  - Runtime
  - Processes

### Example

You can run:

- `Node v18` app 
- `Node v20` app 

on the same machine without conflicts.

```bash
Container 1 → Node 18
Container 2 → Node 20
```

### Analogy

`Container` = Lunchbox

- Everything required is packed inside.
- Easy to carry.
- Same everywhere.

### Mini Summary

- Containers package everything together 
- They are portable, isolated, lightweight 

## Docker Images — The Blueprint

Containers don't appear magically — they are created from images.

### What is a Docker Image?

A Docker Image is:

> An executable file containing instructions to create containers.

### Diagram

```bash
Docker Image (Blueprint)
        ↓
Docker Container (Running Instance)
```

### Analogy (Class vs Object)

| Concept    | Programming  | Docker     |
| ---------- | ------------ | ---------- |
| Blueprint  | Class        | Image      |
| Instance   | Object       | Container  |

### Diagram

```bash
Docker Image
   ├── Container 1
   ├── Container 2
   └── Container 3
```

### Key Differences

| Feature        | Image     | Container             |
| -------------- | --------- | --------------------- |
| Nature         | Static    | Running               |
| Role           | Blueprint | Execution             |
| Resource Usage | Low       | Uses system resources |

### Important Insight

✗ We don't share containers

✓ We share images

### Mini Summary

- `Image` = blueprint 
- `Container` = running instance 
- Multiple containers can be created from one image

## Your First Docker Experience

Let's see `Docker` in action.

### Practical Example: Running Ubuntu Container

**Command**

```bash
docker run -it ubuntu
```

**Command Breakdown**

- `run` → Create & start container 
- `-it` → Interactive terminal 
- `ubuntu` → Image name

### What Happens Internally?

Docker performs several steps automatically:

1. Checks local system for image
2. If image not found → downloads from Docker Hub
3. Creates container
4. Starts container
5. Opens terminal access

### Internal Flow

```bash
Docker Client → Docker Daemon → Docker Hub
                           ↓
                    Container Created
```

### Inside the Container

- You are now inside an Ubuntu OS 
- Can create files and run commands

```bash
ls                # list files and folders
mkdir test        # create directory named test
cd test           # enter test directory
touch hello.txt   # create empty file hello.txt
```

➜ Changes are isolated from the host system

✓ Inside container

✗ Not affecting host system

### Isolation Concept

```bash
Host Machine (Mac)
   |
   |---- Container (Ubuntu)
           |
           |-- Files (isolated)
```

`Container` = isolated environment

➜ Changes inside the container:

✓ Affect container

✗ Do not affect host machine

### Important Insights

- Containers are isolated environments 
- Deleting a container does not affect your system 
- Containers behave like mini-OS

### Final Mini Summary

- Docker pulls the image automatically 
- Creates and runs a container 
- Provides an isolated environment 
- Containers are easy to create and destroy

---

## 3. Docker vs Virtual Machines

Understanding the difference between `Docker` and `Virtual Machines (VMs)` is important because it explains why Docker exists and why it is widely adopted.

### Traditional System Architecture

Every machine contains:

```bash
+----------------------+
|   Applications       |
+----------------------+
|   OS Kernel          |
+----------------------+
|   Hardware           |
+----------------------+
```

### Virtual Machines (VMs)

VMs virtualize:

- Full operating system ✓
- Kernel ✓
- Application layer ✓

Each VM includes:

- Its own OS
- Its own kernel
- Its own dependencies

### VM Architecture

```bash
+----------------------+
|   App + Dependencies |
+----------------------+
|   Guest OS Kernel    |
+----------------------+
|   Hypervisor         |
+----------------------+
|   Host OS            |
+----------------------+
```

### Disadvantages

VMs are:

- Heavy (GBs in size) 
- Slower 
- More resource usage

### Docker Containers

Docker virtualizes only:

- Application layer ✓ 

Containers share the host OS kernel.

### Docker Architecture

```bash
+----------------------+
|   App + Dependencies |
+----------------------+
|   Shared Host Kernel |
+----------------------+
```

### Key Difference

| Docker             | Virtual Machine     |
| ------------------ | ------------------- |
| Shares host kernel | Has separate kernel |

### Advantages of Docker

- Lightweight
- Faster startup
- Smaller size (MBs vs GBs)

### Disadvantages of Docker

- OS compatibility limitations 
- Initially built for Linux environments 

### Analogy
Think of:
- `VM` = Renting a fully furnished apartment (everything included) 
- `Docker` = Renting just a room in a shared house 

### Architecture Comparison

```bash
HOST MACHINE (Your Laptop)
┌───────────────────────────────────────┐
│  Kernel (Linux/Windows/Mac)           │
├───────────────────────────────────────┤
│  Docker: App layer only (lightweight) │
│  VM: Full OS + kernel (heavy)         │
└───────────────────────────────────────┘
```

### Key Differences

| Feature        | Docker            | Virtual Machine |
| -------------- | ----------------- | --------------- |
| Virtualization | Application Layer | Full OS         |
| Size           | Lightweight (MBs) | Heavy (GBs)     |
| Speed          | Fast              | Slower          |
| Resource Usage | Low               | High            |
| Compatibility  | OS-dependent      | OS-independent  |

### Docker Desktop Magic

On Windows/macOS:

- Docker Desktop adds lightweight virtualization internally.
- This allows Linux containers to run on non-Linux systems.

### Important Trade-Off

**Docker:**

- Lightweight, fast, efficient
- Depends on host OS kernel

**VMs:**

- Full isolation
- Works on any OS

### Mini Summary

Docker is lightweight and fast because it doesn't include a full OS, but this also makes it slightly less flexible compared to VMs.

### Interview Questions

**Q1: Why is Docker lightweight?**

**Answer:**
Because it shares the host OS kernel and does not include a full OS like VMs.

**Q2: Why are VMs more compatible?**

**Answer:**
Because they include their own OS kernel, making them independent of the host system.

---

## 4. Installation of Docker CLI & Desktop

Let's install Docker Desktop. Before using Docker, we need to install it.

### Step 1: Visit Official Website

- Go to: [https://docker.com](https://docker.com)

### Step 2: Download Docker Desktop

Download based on your system:

- Windows (AMD64)
- Mac (Intel / Apple Silicon)

### Step 3: Installation Process

- Run the installer
- Accept permissions
- Wait for installation

### Step 4: Restart System

- Restart your system

### Step 5: Open Docker Desktop (Initial Setup)

- Accept terms and agreement
- Choose recommended settings
- Optional: Sign in (can skip)

### Step 6: Verify Installation

**Command**

```bash
docker --version
```

**Example Output**

```bash
Docker version 29.x.x
```

**Check Docker Command**

```bash
docker
```

If commands are listed → Docker is installed correctly

### Docker Desktop UI

You will see:

- Containers tab
- Images tab
- Volumes tab
- Networks tab

### Mini Summary

- Install Docker Desktop from the official site
- Verify installation using CLI
- Docker Desktop provides a UI for management

## Docker Hub

Docker Hub is a public repository for Docker images.

### Analogy

| Platform   | Purpose           |
| ---------- | ----------------- |
| GitHub     | Code repositories |
| Docker Hub | Docker images     |

### Usage

- Pull images
- Push and share images

### Examples

You can search for images like:

- Ubuntu
- MySQL
- Node

### Mini Summary

- Docker Hub stores Docker images
- Used to pull and share images
- Supports both public and private repositories

---

## 5. Important Docker Commands

Now we enter the core practical phase of Docker, where we interact with Docker using commands.

### Objective

Learn Docker commands to:

- Pull images
- Create containers
- Manage containers
- Perform basic debugging

### Learning Approach

We will increase complexity step-by-step:

1. `hello-world` (basic)
2. `ubuntu` (interactive)
3. `mysql` (real-world service)
4. Multiple containers

## Lab 1: First Image — Hello World

### What is `hello-world` Image?

- Official Docker test image
- Used to verify Docker installation

### Docker Hub Understanding

Each image includes:

- Tags (versions)
- Documentation
- Environment variables
- Usage instructions

### Step 1: Pulling an Image

**Command**

```bash
docker pull hello-world
```

**Command Breakdown**

- `docker pull` → Downloads image from Docker Hub
- `hello-world` → Image name

### What Happens?

1. Docker client contacts Docker daemon
2. Downloads `hello-world` image from Docker Hub  
3. Image appears in Docker Desktop → Images tab
4. Size: ~25KB (super lightweight!)

### Verify Images

```bash
docker images
```

**Sample Output**

```bash
REPOSITORY    TAG       IMAGE ID       SIZE
hello-world   latest    abc123         25kB
```

### Key Concept: `Tags`

- Tags represent versions of images
- Examples:

  - `node:18`
  - `node:20`

### Docker Desktop View

- Image appears under Images tab 
- Has: 
   - Image ID 
   - Size (very small → lightweight) 

### Interview Questions

**Q1: What does `docker pull` do?**

**Answer:** Downloads an image from Docker Hub to the local system.

**Q2: What is a Docker `tag`?**

**Answer:** A tag represents a version or variant of an image.

## Step 2: Run a Container

**Command**

```bash
docker run hello-world
```

### What Happens Internally?

```bash
Docker Client → Docker Daemon → Pull Image → Create Container → Run → Output
```

**Output**

```bash
Hello from Docker!
This message shows that your installation appears to be working correctly.
```

### Key Insight

`docker run` = pull + create + run

### Docker Desktop

- Container appears under Containers 
- Has: 
   - Random name 
   - Container ID 
   - Status 

### Interview Question

**Q: Difference between `docker pull` and `docker run`?**

**Answer:**

| Command       | Action                           |
| ------------- | -------------------------------- |
| `docker pull` | Only downloads image             |
| `docker run`  | Pulls + creates + runs container |

## Lab 2: Ubuntu Container (Interactive Mode)

### Step 1: Run Interactive Mode

**Command**

```bash
docker run -it ubuntu
```

**Command Breakdown**

- `-it` → Interactive terminal

  - `-i` → Keep STDIN open
  - `-t` → Allocate terminal

### Inside the Container

You enter Ubuntu container terminal:

```bash
root@container_id:/#
```

### Practice Inside Container

```bash
ls              # list files and folders
mkdir test      # create directory named test
touch hello.txt  # create empty file hello.txt
env              # show environment variables
```

### Exit Container

```bash
exit
```

### Important

- Exiting stops the container

### Interview Question

**Q: What does `-it` do?**

**Answer:** Allows interactive access to the container terminal.

## Lab 3: Container Lifecycle

### Step 1: Check Containers

```bash
docker ps -a   # List ALL containers (running + stopped)
docker ps      # List RUNNING containers only
```

### Step 2: Start & Stop Containers

```bash
docker start <container_id_or_name>    # Start existing container
docker stop <container_id_or_name>     # Stop running container 
```

### Key Difference

| Command        | Behavior                  |
| -------------- | ------------------------- |
| `docker run`   | Creates NEW container     |
| `docker start` | Starts EXISTING container |

### Step 3: Removing Images & Containers

```bash
docker rm <container_id>      # Remove container
docker rmi <image_name>       # Remove image (delete containers first)
```

### Important Rule

You cannot delete an image if it is used by a container.

➤ Delete container first, then the image

### Interview Question

**Q: Why can't we delete an image directly?**

**Answer:**
Because containers depend on that image.

## Lab 4: Image Versions (Tags)

### Step 1: Pull Specific Version

```bash
docker pull mysql
docker pull mysql:8.0
```

### Explanation

- `mysql` → latest version
- `mysql:8.0` → specific version

### Use Case

Run different DB versions:

- App 1 → `MySQL latest`
- App 2 → `MySQL 8.0`

### Diagram

```bash
mysql:latest  → Container A
mysql:8.0     → Container B
```

### Interview Questions

**Q: Why use specific tags?**

**Answer:**
To ensure consistency and avoid version mismatch.

### Step 2: Run with Custom Name

```bash
docker run --name my-mysql-old -d mysql:8.0
```

### Step 3: Run in Detached Mode

```bash
docker run -d --name my-mysql mysql:latest   # Run detached (-d = background)
```

### Explanation

- `-d` → Run container in background

### Default Mode

- Attached → shows output 
- Detached → runs silently

### Interview Questions

**Q: What is detached mode?**

**Answer:**
Runs container in background without terminal interaction.

## Lab 5: Naming Containers

**Command**

```bash
docker run -d --name mysql-older mysql:8.0   # Run with custom name
```

**Benefit**

- Easy identification 
- Easier commands 

### Interview Questions

**Q: Why name containers?**

**Answer:**
To avoid using long container IDs.

---

## 6. Layering in Docker Images

Docker images are built using layers.

### Docker Image Layers

A Docker image is made up of multiple layers stacked on top of each other.

When a container is created, a new **writable layer** (called the `container layer`) is added on top of these image layers.

### Diagram

```bash
+-------------------+
| Application Layer |
+-------------------+
| Dependencies      |
+-------------------+
| Base OS Layer     |
+-------------------+
```

### Key Points

- Layers are reusable
- Layers are cached
- Common layers are shared across images

### Key Concept

- Reusing layers saves space
- Caching layers improves build speed

### Real Example

- `mysql:latest` and `mysql:8.0`
- Share common base layers

### Mini Summary

- Images have a layered structure
- Layers are reused and cached

### Interview Question

**Q: What are Docker layers?**

**Answer:**
Layers are stacked components that form an image and enable reuse and efficient storage.

## Layer Caching Demo

### Pulling Images

```bash
docker pull mysql:latest
```

➤ First pull → downloads all layers

```bash
docker pull mysql:8.0
```

➤ Second pull → reuses common layers

✓ **Output**: "Layer already exists"

### Layer Structure (Example)

```bash
mysql:8.0 image
├── Layer 1: Base OS (Debian/Ubuntu)
├── Layer 2: MySQL dependencies
├── Layer 3: MySQL binaries
└── Layer 4: Config files
```

➤ Common layers are shared across versions

### Benefit

- Cached layers → faster pulls and builds
- Saves bandwidth and storage

## How Layers Work (Dockerfile Example)

```bash
# EACH instruction = NEW LAYER
FROM ubuntu:20.04         # Layer 1: Base OS
RUN apt update            # Layer 2
RUN apt install -y curl   # Layer 3
COPY app.js /app/         # Layer 4
RUN npm install           # Layer 5
CMD ["node", "app.js"]    # Layer 6
```

### Caching Behavior

- First build → all layers created (slow)
- Second build:

  - If no change → layers reused
  - If a layer changes → all layers after it rebuild

➤ Example:

If `COPY app.js` changes → Layers 4–6 rebuild

## Best Practices for Layer Optimization

**✓ Good (fewer layers):**

```bash
RUN apt update && \
    apt install -y curl nodejs && \
    rm -rf /var/lib/apt/lists/*
```

**✗ Bad (more layers, bigger image):**

```bash
RUN apt update
RUN apt install curl
RUN apt install nodejs
```

## Interview Questions

**Q1: Why do Docker images have multiple layers?**

**Answer:**
To enable caching and reuse, which makes builds and pulls faster and more efficient.

**Q2: How to optimize Dockerfile layers?**

**Answer:**

* Combine `RUN` commands
* Copy dependency files first (e.g., `package.json`)
* Use `.dockerignore`
* Minimize unnecessary layers

---

## 7. Port Mapping & Setting Environment Variables 

## Port Mapping

Let's understand how containers communicate externally by connecting them to the host.

### `Container Ports` vs `Host Ports`

- Containers have their own ports
- These ports are isolated from the host

### ❗ Problem

Container port ≠ Host port

### ✓ Solution: `Port Binding`

Mapping host port → container port

**Command**

```bash
docker run -p 8080:3306 mysql
```

### Diagram

```bash
Host:8080  ─────────→  Container:3306
```

### Important

- One host port → one container only
- Same host port cannot be reused 
- Use different ports for multiple containers 

### Mini Summary

- Port binding connects host to container 
- Port binding connects container to outside world
- Essential for accessing apps

## Scenario: Run a Node.js App and Access via Browser

### Port Binding Concept

```bash
Host Machine          Container
  8080 ──────────────→ 5050 (Node.js app 1 container)
  5000 ──────────────→ 5050 (Node.js app 2 container)
```

### ❗ Problem

Container ports (5050) ≠ Host ports (8080, 5000)

### ✓ Solution

Use port mapping:

```bash
-p host_port:container_port
```

## Practical Lab

### Run Node.js Containers

```bash
docker run -d \
  --name test-app-1 \
  -p 8080:5050 \
  test-app:1.0
```

```bash
docker run -d \
  --name test-app-2 \
  -p 5000:5050 \
  test-app:1.0
```

➤ Access in browser:

- [http://localhost:8080](http://localhost:8080)
- [http://localhost:5000](http://localhost:5000)

### MySQL Example (with Environment Variables)

```bash
docker run -d \
  --name mysql-latest \
  -e MYSQL_ROOT_PASSWORD=secret \
  -p 8080:3306 \
  mysql:latest
```

```bash
docker run -d \
  --name mysql-old \
  -e MYSQL_ROOT_PASSWORD=secret \
  -p 5000:3306 \
  mysql:8.0
```

### ✗ Error Case

```bash
docker run -p 8080:3306 mysql:8.0
```

✗ Port already allocated

## Environment Variables

### Example

```bash
docker run -d -e MYSQL_ROOT_PASSWORD=secret mysql
```

### Explanation

- `-e` → environment variable 
- Used for configuration 

### Real Use Case

- Database credentials 
- API keys 

### Interview Questions

**Q: Why use environment variables?**

**Answer:**
To pass configuration dynamically without hardcoding.

---

## 8. Troubleshooting Containers

Learn how to debug issues in containers using essential Docker commands.

### Essential Debug Commands

```bash
docker ps -a                  # List all containers (running + stopped)
docker ps                     # List running containers
docker logs <name>            # View container logs
docker exec -it <name> bash   # Access container shell (or sh)
```

### Logs

```bash
docker logs <container_name>
```

- View application output
- Check errors and crash messages

### Exec Command

```bash
docker exec -it <container_name> bash
```

- Access running container
- Inspect files, environment, and processes

### Example

```bash
docker exec -it mysql-latest bash
```

Inside container:

```bash
mysql -u root -p
SHOW DATABASES;
```

### Use Cases

- Check `logs`
- Inspect environment
- Debug application issues

### Docker Desktop Tip

- Open container → `Logs` tab

### Important Note

- Exiting the shell does **NOT** stop the container

### Mini Summary

- Use `docker logs` to check errors
- Use `docker exec` to inspect the container

### Interview Question

**Q: Container crashes on startup. How to debug?**

**Answer:**

1. `docker logs <container>` → Check error messages
2. `docker exec -it <container> bash` → Inspect filesystem and environment

---

## 9. Using Containers to Build a Node Application

Sample Application Setup (`Node.js` + `MongoDB`)

### Project Structure

```bash
app/
 ├── public/    (Frontend UI)
 │   ├── index.html
 │   └── style.css
 ├── package.json        # Project dependencies and scripts
 ├── package-lock.json   # Exact dependency versions
 └── server.js  (Backend)
```

### Backend (server.js)

- Uses:

  - Express
  - MongoDB client

**API Routes:**

- `GET /getUsers` → Fetch all users from MongoDB.
- `POST /addUser` → Add new user into MongoDB.

**Server:** Runs on: **Port 5050**

### Frontend

- Basic UI (University website) 
- Users can:
  - Create account
  - Submit data

### Start `server.js` for Demo (Local Testing)

```bash
cd app
npm install                    # Install dependencies
node server.js                 # Start server
```

**✓ Verify it's working:**
```bash
Server running on port 5050
```

**Test APIs:**

- Using Terminal (curl)

```bash
curl http://localhost:5050/getUsers
```
- Using Browser
  - Open: [http://localhost:5050/getUsers](http://localhost:5050/getUsers)

**Stop server:** `Ctrl+C`

### ❗ Problem

✗ MongoDB is not installed locally

### ✓ Solution: Use Docker containers

We will use 2 images:

1. `MongoDB` → Database
2. `Mongo Express` → UI for DB 

## Docker Network Concept

### Why Needed?

Containers cannot communicate directly unless connected to a network.

### Without Network

```bash
Container A ✗ Container B
```

### With Docker Network

```bash
[ Docker Network ]
   ├── Mongo Container
   ├── Mongo Express Container
```

✓ Direct communication

✗ No need for localhost/ports internally

### Commands

- **`List` networks**

```bash
docker network ls
```

- **`Create` network**

```bash
docker network create mongo-network
```

### Mini Summary

Docker networks allow containers to communicate seamlessly without exposing ports.

## Run MongoDB Container

### Command

```bash
docker run -d \
 -p 27017:27017 \
 --name mongo \
 --network mongo-network \
 -e MONGO_INITDB_ROOT_USERNAME=admin \
 -e MONGO_INITDB_ROOT_PASSWORD=qwerty \
 mongo
```

### Explanation

| Option    | Meaning              |
| --------- | -------------------- |
| -d        | Detached mode        |
| -p        | Port binding         |
| --name    | Container name       |
| --network | Connect to network   |
| -e        | Environment variable |

### ✓ Verify

```bash
docker ps   # list all running containers
```

## Run Mongo Express Container

### Command

```bash
docker run -d \
 -p 8081:8081 \
 --name mongo-express \
 --network mongo-network \
 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
 -e ME_CONFIG_MONGODB_ADMINPASSWORD=qwerty \
 -e ME_CONFIG_MONGODB_URL=mongodb://admin:qwerty@mongo:27017 \
 mongo-express
```

### Important

`mongo` = container name (used as hostname)

## Access Mongo Express UI

Open in browser:

- [http://localhost:8081](http://localhost:8081)

Login:

- Username: `admin`
- Password: `pass`

## Create Database & Collection

### Steps:

1. Create DB → `collegeDB`
2. Create Collection → `users`

### Add Document

```json
{
  "email": "john@gmail.com",
  "username": "john",
  "password": "secret"
}
```

## Test with Backend API

### `GET` Request

- [http://localhost:5050/getUsers](http://localhost:5050/getUsers)

✓ Returns inserted data

### `POST` Request

- Add user via `UI` → reflected in `DB`

### Architecture Flow

```bash
Node.js App     (server.js)
      ↓
Mongo Container (Database)
      ↓
Mongo Express   (UI)
```

---

## 10. Docker Compose (Multi-Container Applications)

Docker Compose is a tool to define & run multi-container applications

### ❗ Problem

Running multiple `docker run` commands is:

- Complex
- Hard to manage
- Not scalable

### ✓ Solution: `Docker Compose`

Uses a YAML file to define and run multiple containers

### Docker Compose Example (mongodb.yml)

```yaml
version: "3.8"

services:
  mongo:
    image: mongo
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: qwerty

  mongo-express:
    image: mongo-express
    ports:
      - "8081:8081"
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: admin
      ME_CONFIG_MONGODB_ADMINPASSWORD: qwerty
      ME_CONFIG_MONGODB_URL: mongodb://admin:qwerty@mongo:27017
```

### Key Points

- `services` = containers 
- Auto network creation - Default network is created automatically
- Services communicate using names (e.g., `mongo`)
- Easier manage and update

### Run Docker Compose

- **Start Services**

Command: `docker compose -f <filename>.yaml up -d`

```bash
cd app                                    # move into app directory
docker compose -f mongodb.yml up -d       # create and start containers in detached mode    
```

Explanation

- `up` = create and start containers
- `-d` = detached mode

- **Stop & Remove**

Command: `docker compose -f <file-name>.yaml down`

```bash
cd app                                    # move into app directory
docker compose -f mongodb.yml down        # stop and remove containers
```

- **View Logs**

Command: `docker compose -f <file-name>.yaml logs`

```bash
cd app                                    # move into app directory
docker compose -f mongodb.yml logs        # view container logs
```

### Auto Features

- Default network created automatically
- Services communicate by name
- One command manages all containers

### Core Concepts

* **Services** → Individual containers
* **Port Mapping** → `HOST:CONTAINER`
* **Environment Variables** → `-e KEY=VALUE` (Defined in YAML)
* **Volumes** → Persistent data storage

### Interview Question

**Q: `docker run` vs `docker compose`?**

**Answer:**

- `docker run` → Runs a single container
- `docker compose` → Manages multi-container applications

## Important Concept: Data Persistence

### ❗ Problem

- Data is lost when containers restart

### ✓ Solution:

- Use `volumes` (covered later)

---

## 11. Dockerization of Node.js Application (Dockerfile)

Now we package our Node.js app into a Docker image.

### What is Dockerizing?

Converting your application → `Docker Image` → `Container`

### Tool: `Dockerfile`

A Dockerfile is a blueprint used to build Docker images.

### Real-World Usage

In production:

- Tools like `Jenkins` automate this process

**Pipeline:**

```bash
Code → CI/CD (Jenkins) → Docker Image → Registry → Deployment
```

### Mini Summary

Dockerizing enables easy sharing and deployment of applications.

## Writing and Understanding a Dockerfile

### Example Dockerfile

```dockerfile
FROM node:18                  # Base image (Node runtime)

WORKDIR /app                  # set working directory inside container

COPY . .                      # copy all files from app/ directory to container

RUN npm install               # install Node.js dependencies

CMD ["node", "server.js"]     # start Node.js application
```

### Instruction Explanation

| Instruction   | Purpose                |
| ------------- | ---------------------- |
| `FROM`        | Base image             |
| `WORKDIR`     | Set working directory  |
| `COPY`        | Copy project files     |
| `RUN`         | Execute build commands |
| `CMD`         | Start application      |

### Layering Concept

```bash
Base OS
   ↓
Node Image
   ↓
Your App
```

### Detailed Dockerfile

```dockerfile
FROM node:18                  # Base image (Node runtime)

ENV MONGODB_USERNAME=admin    # Define environment variables    
ENV MONGODB_PASSWORD=qwerty

WORKDIR /app                  # Set working directory

COPY . /app                   # Copy app files

RUN npm install               # Installs express + mongodb v5.xx.x

CMD ["node", "server.js"]     # Default command when container starts - Runs your exact file
```

### Build & Run

- **Build Image**

```bash
cd app                              # move into app directory
docker build -t test-app:1.0 .      # build Docker image with name and tag
```

```bash
docker images                       # list available Docker images
```

- **Run Container**

```bash
docker run test-app:1.0             # create and start container from image
```

### Interactive Mode

```bash
docker run -it test-app:1.0 bash    # start container in interactive terminal mode
```

**✓ Result**: Node app runs inside container (port 5050)

### Important Insight

- Each instruction creates a new layer
- Layers are cached → faster builds

### Interview Questions

**Q1: What is a Dockerfile?**

**Answer:**
A blueprint used to build Docker images.

**Q2: Difference between `RUN` and `CMD`?**

**Answer:**

- `RUN` → Executes during build
- `CMD` → Executes when the container starts

**Q3: `FROM` vs `COPY` vs `CMD`?**

**Answer:**

- `FROM` → Base image
- `COPY` → Copy files into container
- `CMD` → Default command when container starts

### Real-World Architecture

```bash
    Docker Compose
          ↓
---------------------------------
| Node App Container           |
| Mongo Container              |
| Mongo Express Container      |
---------------------------------
          ↓
    Docker Network
```

### Industry Flow

1. Code pushed
2. CI/CD (`Jenkins`)
3. Build Docker image
4. Push to registry
5. Deploy containers

### Use Cases

- Microservices architecture
- Development environments
- CI/CD pipelines

### Final Insight

Docker helps you:

- Avoid local setup
- Use consistent environments
- Build scalable applications
- Run multi-service architectures easily

---

## 12. Publishing Docker Images to Docker Hub

You will learn how to take a Docker image created on your local system and publish it to Docker Hub.

This is an important step in real-world DevOps workflows because it enables:

- Collaboration
- Deployment
- Image reuse across environments

### Concept Explanation

When working locally, Docker images exist only on your machine.

In real-world development, you need to:

- Share images with your team
- Deploy applications on cloud servers
- Use images in CI/CD pipelines

This is where `Docker Hub` becomes useful.

## What is `Docker Hub`?

### Definition

Docker Hub is a cloud-based registry where you can:

- Store Docker images
- Share them publicly or privately
- Collaborate across teams

Think of Docker Hub like GitHub—but for Docker images instead of source code.

### Analogy

- `GitHub` → Stores source code
- `Docker Hub` → Stores packaged applications (Docker images)

### Step-by-Step Process

To publish an image, you first need a Docker Hub account.

**Steps**:

1. Sign up on Docker Hub [https://hub.docker.com](https://hub.docker.com)
2. Open **Repositories**
3. Click **Create Repository**
4. Fill details:

   - Repository name → `test-application`
   - Description → optional
   - Visibility:

     - Public (anyone can access)
     - Private (restricted)

### Workflow Diagram

```bash
Local Machine
      ↓
Docker Image
      ↓
Docker Hub Repository
      ↓
Public / Team Access
```

## Practical Implementation

### Step 1: Build Image with Repository Name

```bash
docker build -t username/test-application .
```

**Explanation**

* `-t` → tag image name
* Image name must match Docker Hub repository name

### Step 2: Login to Docker Hub

**Method 1: `CLI Login`**

```bash
docker login
```

Then enter:

- Username
- Password

**Method 2: `Browser Authentication`**

Docker may provide:

- A one-time code
- A verification URL

Open the link, enter the code, and confirm login.

### Step 3: Push Image

```bash
docker push username/test-application
```

Docker uploads all image layers to Docker Hub.

**What Happens Internally?**

```bash
Local Image
   ↓
Tagged
   ↓
Authenticated
   ↓
Pushed
   ↓
Stored on Docker Hub
```

### ✓ Verify on Docker Hub

Refresh your repository page.

You will see:

- Image name
- Tag (`latest` by default)
- Image size
- Pull command

### Real-World Example

A company builds a Node.js application:

1. Builds a `Docker image`
2. Pushes it to `Docker Hub`
3. Team members pull and run it instantly

➤ No manual setup required.

### Analogy

Publishing a Docker image is like uploading an app to an app store:

- Developers upload once
- Others download and run it anywhere

### Important Insight

If no tag is specified:

```bash
latest
```

is used as the default tag.

### Pull Image Anywhere

```bash
docker pull username/test-application
```

You can now run the application anywhere using only the image.

### Real-World Use Cases

- Team collaboration
- CI/CD pipelines
- Open-source sharing
- Cloud deployments (AWS, Azure, GCP)

### Key Insight

Docker images make applications portable

You can:

- Rebuild environments quickly
- Share applications easily
- Run apps without manual dependency setup

### Mini Summary

- Docker Hub stores Docker images
- Images must be tagged correctly
- `docker login` is required before pushing
- `docker push` uploads images to Docker Hub
- Images can be pulled and reused anywhere

## Understanding Image Distribution & Collaboration

Once your image is on Docker Hub, it becomes easy to distribute and reuse.

### Concept Explanation

Anyone with access can:

- Pull the image
- Run containers directly
- Use the same environment consistently

```bash
docker pull username/test-application
```

### Mini Summary

- Docker images enable portability
- Useful for teams, CI/CD, and deployments
- Simplifies application sharing across environments

---

## 13. Docker Volumes (Data Persistence)

Containers are `ephemeral` by nature.

This section introduces Docker Volumes, which provide persistent storage beyond the container lifecycle.

### ❗ Problem

In a container:

- You create a database
- Add documents
- Restart or delete the container → ✗ Data lost

### Concept Explanation

By default:

Container Storage = `Temporary`

When a container is removed, its internal data is also removed.

## ✓ Solution: Docker Volumes

Volumes provide persistent storage independent of containers.

### Definition

`Docker Volumes` = Persistent storage for containers

### Analogy

- `Container` → Temporary workspace
- `Volume` → Hard drive

Even if the workspace is destroyed, the hard drive remains intact.

### Architecture Diagram

```bash
[ Container ]
      ↓
[ Docker Volume ]
      ↓
[ Host Machine Storage ]
```

### How Volumes Work

1. Create a volume
2. Mount it to a container
3. Data written inside the container is stored in the volume

### Key Advantage

Even if:

- Container stops
- Container restarts
- Container is deleted

✓ Data remains safe

### Key Benefits

- Data persistence
- Data sharing
- Backup support

### Multi-Container Sharing

```bash
Container A ─┐
             ├──> Shared Volume
Container B ─┘
```

### Mini Summary

- Containers lose data by default
- Volumes provide persistent storage
- Volumes are independent of containers

## Hands-on with Volumes (Practical Implementation)

Let's implement volumes using an Ubuntu container.

**Command**

```bash
docker run -it -v /host/path:/container/path ubuntu
```

**Example**

```bash
docker run -it -v /Users/abc/Desktop/data:/test/data ubuntu
```

### What Happens?

- `/Users/abc/Desktop/data` → Host directory
- `/test/data` → Container directory

Both directories are now linked.

## Experiment

### Step 1: Create Files Inside Container

```bash
cd /test/data
touch index.html server.js
```

### Step 2: Check Host Machine

The same files appear in the host (Desktop/data) directory.

- **`Restart` Container**

Even after restart:

```bash
docker start <container_id>
```

✓ Files remain intact

- **`Delete` Container**

Even after:

```bash
docker rm <container_id>
```

✓ Files still exist on the host machine

### Key Insight

Volumes exist independently of containers.

### Mini Summary

- Volumes sync container and host storage
- Data persists after restart and deletion
- Ideal for databases and stateful application

### Interview Questions

**Q1: Why are volumes needed?**

**Answer:**
To persist container data beyond the container lifecycle.

**Q2: What happens to volume data after container deletion?**

**Answer:**
The volume and its data remain intact.

## Volumes with Docker Compose

Docker Compose simplifies volume management.

### ❗ Problem

MongoDB data is lost when container restarts or recreated. 

### ✓ Solution: Add `Volume` in Compose

**docker-compose.yml**

```yaml
services:
  mongo:
    image: mongo
    volumes:
      - /Users/abc/Desktop/data:/data/db
```

**Explanation**

- `/Users/.../data` → Host directory
- `/data/db` → MongoDB data directory inside container

### Run Application

```bash
docker compose up
```

### Test Persistence

1. Create database + documents
2. Stop containers
3. Delete containers
4. Restart

✓ Data still exists

### Real-World Use Cases

- Production databases
- Log storage
- File uploads

### Mini Summary

- Docker Compose simplifies volume management
- Persistence works across container lifecycle
- Essential for stateful applications

### Interview Question

**Q: Where are volumes defined in Compose?**

**Answer:**
Under the `volumes` section of a service.

## Advanced Volume Concepts

### Types of Volumes

### 1. Named Volumes

```bash
docker volume create my-volume
```

Usage:

```bash
docker run -v my-volume:/app/data ubuntu
```

Managed by Docker

### 2. Anonymous Volumes

```bash
docker run -v /app/data ubuntu
```

Temporary, unnamed volume

### 3. Bind Mounts

```bash
docker run -v /host/path:/container/path ubuntu
```

Direct host mapping to host filesystem

### Key Differences

| Type             | Managed By | Use Case          |
| ---------------- | ---------- | ----------------- |
| Named Volume     | Docker     | Production        |
| Anonymous Volume | Docker     | Temporary storage |
| Bind Mount       | Host OS    | Development       |

### Volume Cleanup

- **`List` Volumes**

```bash
docker volume ls
```

- **`Remove` Unused Volumes**

```bash
docker volume prune
```

### Important

- Removes unused volumes only
- Commonly removes anonymous volumes

### Interview Questions

**Q1: Difference between `bind mounts` and `volumes`?**

**Answer:**

- `Bind Mount` → Host-controlled
- `Volume` → Docker-controlled

**Q2: Which volume type is preferred in production?**

**Answer:**
`Named volumes`

**Q3: Difference between `prune` and `rm`?**

**Answer:**

- `prune` → Removes unused volumes
- `rm` → Removes a specific volume

### Important Insight

Volumes become useful only when attached to containers.

### Final Mini Summary

- Docker volumes provide persistent storage
- Multiple volume types exist
- Named volumes are preferred in production
- Volumes are essential for databases and stateful applications
- Cleanup is important 

---

## 14. Docker Networking

Containers must communicate:

- With each other
- With the host machine
- With the outside world

### Concept Explanation

Docker networking defines:

- How containers communicate with each other
- How containers connect to the host
- How external traffic reaches containers

### Architecture Diagram

```bash
[ Container A ] ↔ [ Docker Network ] ↔ [ Container B ]
                           ↕
                     [ Host Machine ]
                           ↕
                        Internet
```

### Command

```bash
docker network ls
```

Lists all available Docker networks.

### Mini Summary

- Docker networking enables communication
- Docker provides built-in network drivers

## Types of Docker Networks

Docker provides three main network drivers.

### Default Network Drivers

| Network   | Purpose                         |
| --------- | ------------------------------- |
| `bridge`  | Default container communication |
| `host`    | Share host network              |
| `null`    | Disable networking              |

### 1. Bridge Network (Default)

- Default Docker network
- Containers can communicate on the same host
- Provides network isolation

**Diagram**

```bash
Container A ─┐
             ├── Bridge Network ── Host ── Internet
Container B ─┘
```

**Use Case**

- Microservices running on the same machine.

**Analogy**

Bridge network = Local LAN network

### Types of Bridge Networks

- Default bridge
- Custom bridge (recommended for better control)

### Custom Bridge Network

```bash
docker network create my-network
```

**Benefits**

- Direct container communication
- Containers communicate using names
- No need to manually manage IP addresses

### 2. Host Network

- Container shares the host's network stack
- No separate container IP address

**Use Case**

- High-performance or low-latency applications.

### 3. Null Network

- No network access
- Fully isolated container

**Use Case**

- Highly secure or isolated environments.

### Interview Questions

**Q1: What is a `bridge` network?**

**Answer:**
The default Docker network that enables communication between containers on the same host.

**Q2: Difference between `host` and `bridge` network?**

**Answer:**

- `Host` → Container shares the host network
- `Bridge` → Container uses an isolated virtual network

### Mini Summary

- `Bridge` → Most commonly used
- `Host` → Better performance
- `Null` → Complete isolation

---

### References

[Open Docker Commands](../cheatsheets/docker-commands.md)