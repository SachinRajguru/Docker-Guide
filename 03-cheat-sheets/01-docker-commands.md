# 🐳 **Docker Commands Reference Sheet**
**Production-Ready Quick Reference** 

## 🖼️ **IMAGES**

| Command | Description | Example |
|---------|-------------|---------|
| `docker images` | List all local images | `docker images` |
| `docker rmi <image_name>` | Delete specific image | `docker rmi hello-world` |
| `docker image prune` | Remove unused images | `docker image prune -a` |
| `docker build -t <name>:<tag> .` | Build from Dockerfile | `docker build -t myapp:1.0 .` |
| `docker build -t <name>:<tag> . --no-cache` | Build without cache | `docker build -t myapp:latest . --no-cache` |

> 💡 **Pro Tip**: Always tag images (`:latest`, `:1.0`) for versioning!

## 📦 **CONTAINERS**

| Command | Description | Example |
|---------|-------------|---------|
| `docker ps -a` | List ALL containers | `docker ps -a` |
| `docker ps` | List RUNNING containers | `docker ps` |
| `docker run <image>` | Create + run new container | `docker run ubuntu` |
| `docker run -d <image>` | Run in background (detached) | `docker run -d nginx` |
| `docker run --name <name> <image>` | Custom container name | `docker run --name my-nginx nginx` |
| `docker run -p <host>:<container> <image>` | Port binding | `docker run -p 8080:80 nginx` |
| `docker run -e VAR=value <image>` | Environment variables | `docker run -e MYSQL_ROOT_PASSWORD=secret mysql` |
| `docker start <name\|id>` | Start existing container | `docker start my-mysql` |
| `docker stop <name\|id>` | Stop existing container | `docker stop my-mysql` |
| `docker inspect <name\|id>` | Detailed container info | `docker inspect my-mysql` |
| `docker rm <name\|id>` | Delete container | `docker rm my-mysql` |

> 🔥 **Power Combo**:
```bash
docker run -d \
  --name my-app \
  -p 3000:3000 \
  -e NODE_ENV=production \
  myapp:1.0
```

## 🔧 **TROUBLESHOOTING**

| Command | Description | Example |
|---------|-------------|---------|
| `docker logs <name\|id>` | View container logs | `docker logs my-app` |
| `docker exec -it <name> /bin/bash` | Shell access (bash) | `docker exec -it my-app bash` |
| `docker exec -it <name> sh` | Shell access (sh) | `docker exec -it my-app sh` |

> 🐛 **Debug Workflow**:
```bash
1. docker ps                 # Find running container
2. docker logs my-app        # Check startup errors
3. docker exec -it my-app bash  # Inspect inside
```

## 🌐 **DOCKER HUB**

| Command | Description | Example |
|---------|-------------|---------|
| `docker pull <image>` | Download from Hub | `docker pull nginx:latest` |
| `docker push <username>/<image>` | Upload to Hub | `docker push devcollege/myapp:1.0` |
| `docker login` | Login to DockerHub | `docker login -u devcollege` |
| `docker logout` | Logout | `docker logout` |
| `docker search <image>` | Search Hub | `docker search nginx` |

> 📤 **Publish Workflow**:
```bash
docker build -t devcollege/myapp:1.0 .
docker login
docker push devcollege/myapp:1.0
```

## 💾 **VOLUMES** (Data Persistence)

| Command | Description | Example |
|---------|-------------|---------|
| `docker volume ls` | List all volumes | `docker volume ls` |
| `docker volume create <name>` | Create named volume | `docker volume create mongo-data` |
| `docker volume rm <name>` | Delete named volume | `docker volume rm mongo-data` |

### **Volume Mounting Types**

| Type | Syntax | Example |
|------|--------|---------|
| **Named Volume** | `-v <vol_name>:<path>` | `docker run -v mongo-data:/data/db mongo` |
| **Anonymous** | `-v <path>` | `docker run -v /tmp/data nginx` |
| **Bind Mount** | `-v <host>:<container>` | `docker run -v /home/data:/app/data nginx` |

> 💪 **Pro Mount**:
```bash
docker run -d \
  --name mongo \
  -v mongo-data:/data/db \
  -p 27017:27017 \
  mongo
```

> **Compose Volume** (docker-compose.yml):
```yaml
services:
  mongo:
    volumes:
      - mongo-data:/data/db
volumes:
  mongo-data:
```

> 🧹 **Cleanup**:
```bash
docker volume prune    # Anonymous volumes
docker volume ls -q | xargs docker volume rm  # All unused
```

## 🌉 **NETWORKS**

| Command | Description | Example |
|---------|-------------|---------|
| `docker network ls` | List networks | `docker network ls` |
| `docker network create <name>` | Create network | `docker network create app-network` |
| `docker network rm <name>` | Delete network | `docker network rm app-network` |
| `docker network prune` | Remove unused | `docker network prune` |

> 🔗 **Multi-Container Network**:
```bash
docker network create app-net
docker run --network app-net --name db postgres
docker run --network app-net --name api myapp
# api connects: postgres://db:5432
```

## ⚡ **One-Liner Mastery Commands**

```bash
# 🌪️ Nuke everything (fresh start)
docker stop $(docker ps -aq) && \
docker rm $(docker ps -aq) && \
docker rmi $(docker images -q) && \
docker volume prune -f && \
docker network prune -f

# 🚀 Quick app stack
docker run -d \
  --name stack \
  -p 80:80 -p 5432:5432 \
  -v pgdata:/var/lib/postgresql/data \
  --network app-net \
  -e POSTGRES_PASSWORD=secret \
  postgres

# 📊 Inspect everything
docker system df    # Disk usage
docker stats        # Live resource usage
docker info         # Docker system info
```

## 🎯 **Pro Tips & Gotchas**

```bash
✅ Tag everything: myapp:1.0 > myapp
✅ Use .dockerignore like .gitignore
✅ Multi-stage builds = smaller images
✅ Healthchecks prevent zombie containers
✅ Named volumes > bind mounts (prod)
✅ Custom networks > default bridge (multi-container)

❌ Never: RUN apt install in prod
❌ Avoid: COPY . /app (use specific files)
❌ Don't: Run as root (USER node)
```

## 🧠 **Memory Hook: "PICS" Framework**
**P**ull → **I**mages → **C**reate → **S**hare
```bash
docker pull nginx
docker images  
docker run nginx
docker push my-nginx
```

**Print → Pin → Master!** 🏆✨