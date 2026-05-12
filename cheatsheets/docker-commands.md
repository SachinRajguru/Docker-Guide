
# 🐳 Docker Commands Reference Sheet

> 📌 This cheatsheet is designed for quick revision and hands-on Docker practice.

**Production-Ready Quick Reference**

---

## 🖼️ IMAGES

| Command | Description | Example |
|---------|-------------|---------|
| `docker images` | List all local images | `docker images` |
| `docker rmi <image_name>` | Delete specific image | `docker rmi hello-world` |
| `docker image prune` | Remove unused images | `docker image prune -a` |
| `docker build -t <name>:<tag> .` | Build image from Dockerfile | `docker build -t myapp:1.0 .` |
| `docker build -t <name>:<tag> . --no-cache` | Build without cache | `docker build -t myapp:latest . --no-cache` |

> 💡 **Pro Tip:** Always tag images (`:latest`, `:1.0`) for better version management.

---

## 📦 CONTAINERS

| Command | Description | Example |
|---------|-------------|---------|
| `docker ps -a` | List all containers | `docker ps -a` |
| `docker ps` | List running containers | `docker ps` |
| `docker run <image>` | Create + run new container | `docker run ubuntu` |
| `docker run -d <image>` | Run container in background (detached) | `docker run -d nginx` |
| `docker run --name <name> <image>` | Assign custom container name | `docker run --name my-nginx nginx` |
| `docker run -p <host>:<container> <image>` | Port binding | `docker run -p 8080:80 nginx` |
| `docker run -e VAR=value <image>` | Set environment variables | `docker run -e MYSQL_ROOT_PASSWORD=secret mysql` |
| `docker start <name\|id>` | Start existing container | `docker start my-mysql` |
| `docker stop <name\|id>` | Stop running container | `docker stop my-mysql` |
| `docker inspect <name\|id>` | View detailed container information | `docker inspect my-mysql` |
| `docker rm <name\|id>` | Delete container | `docker rm my-mysql` |

> 🔥 **Power Combo**
```bash
docker run -d \
  --name my-app \
  -p 3000:3000 \
  -e NODE_ENV=production \
  myapp:1.0
```

---

## 🔧 TROUBLESHOOTING

| Command                            | Description                      | Example                       |
| ---------------------------------- | -------------------------------- | ----------------------------- |
| `docker logs <name\|id>`           | View container logs              | `docker logs my-app`          |
| `docker exec -it <name> /bin/bash` | Open bash shell inside container | `docker exec -it my-app bash` |
| `docker exec -it <name> sh`        | Open sh shell inside container   | `docker exec -it my-app sh`   |

> 🐛 **Debug Workflow**

```bash
# 1. Find running containers
docker ps

# 2. Check logs
docker logs my-app

# 3. Enter container
docker exec -it my-app bash
```

---

## 🌐 DOCKER HUB

| Command                          | Description                    | Example                            |
| -------------------------------- | ------------------------------ | ---------------------------------- |
| `docker pull <image>`            | Download image from Docker Hub | `docker pull nginx:latest`         |
| `docker push <username>/<image>` | Upload image to Docker Hub     | `docker push devcollege/myapp:1.0` |
| `docker login`                   | Login to Docker Hub            | `docker login -u devcollege`       |
| `docker logout`                  | Logout from Docker Hub         | `docker logout`                    |
| `docker search <image>`          | Search images on Docker Hub    | `docker search nginx`              |

> 📤 **Publish Workflow**

```bash
docker build -t devcollege/myapp:1.0 .
docker login
docker push devcollege/myapp:1.0
```

---

## 💾 VOLUMES (Data Persistence)

| Command                       | Description         | Example                           |
| ----------------------------- | ------------------- | --------------------------------- |
| `docker volume ls`            | List all volumes    | `docker volume ls`                |
| `docker volume create <name>` | Create named volume | `docker volume create mongo-data` |
| `docker volume rm <name>`     | Delete named volume | `docker volume rm mongo-data`     |

### Volume Mount Types

| Type             | Syntax                  | Example                                    |
| ---------------- | ----------------------- | ------------------------------------------ |
| Named Volume     | `-v <volume>:<path>`    | `docker run -v mongo-data:/data/db mongo`  |
| Anonymous Volume | `-v <path>`             | `docker run -v /tmp/data nginx`            |
| Bind Mount       | `-v <host>:<container>` | `docker run -v /home/data:/app/data nginx` |

> 💪 **Pro Mount: Persistent MongoDB Setup**
```bash
docker run -d \
  --name mongo \
  -v mongo-data:/data/db \
  -p 27017:27017 \
  mongo
```

> 📦 **Docker Compose Volume** (docker-compose.yml):

```yaml
services:
  mongo:
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

> 🧹 **Volume Cleanup**

```bash
# Remove unused volumes
docker volume prune
```

---

## 🌉 NETWORKS

| Command                        | Description            | Example                             |
| ------------------------------ | ---------------------- | ----------------------------------- |
| `docker network ls`            | List networks          | `docker network ls`                 |
| `docker network create <name>` | Create custom network  | `docker network create app-network` |
| `docker network rm <name>`     | Delete network         | `docker network rm app-network`     |
| `docker network prune`         | Delete unused networks | `docker network prune`              |

> 🔗 **Multi-Container Networking**

```bash
docker network create app-net

docker run --network app-net --name db postgres

docker run --network app-net --name api myapp

# Connection example:
# postgres://db:5432
```

---

## ⚡ Useful One-Liner Commands

```bash
# 🧹 Full Cleanup (Fresh Start)
docker stop $(docker ps -aq) && \
docker rm $(docker ps -aq) && \
docker rmi $(docker images -q) && \
docker volume prune -f && \
docker network prune -f
```
```bash
# 🚀 Quick PostgreSQL Setup
docker run -d \
  --name postgres-db \
  -p 5432:5432 \
  -v pgdata:/var/lib/postgresql/data \
  -e POSTGRES_PASSWORD=secret \
  postgres
```
```bash
# 📊 Docker System Information
docker system df
docker stats
docker info
```

---

## 🎯 Best Practices & Common Mistakes

```bash
✅ Tag images properly: myapp:1.0
✅ Use .dockerignore to reduce image size
✅ Use named volumes for persistent data
✅ Create custom networks for multi-container apps
✅ Keep images lightweight
```
```bash
❌ Avoid unnecessary packages in production images
❌ Avoid running containers as root user
❌ Avoid storing secrets directly inside images
❌ Avoid copying unnecessary files into containers
```

---

## 🧠 Memory Hook — "PICS"

**P**ull → **I**mages → **C**reate → **S**hare

```bash
docker pull nginx
docker images
docker run nginx
docker push my-nginx
```

---

### 🏆 Quick Reminder

> Learn Docker by running commands frequently — containers become easier once you practice daily.