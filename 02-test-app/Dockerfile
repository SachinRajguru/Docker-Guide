# Use official Node.js runtime as base image
# 'node:20' includes Node.js + npm preinstalled
FROM node:20

# -------------------- ENVIRONMENT VARIABLES --------------------

# Define environment variables inside the container
# NOTE: These are not currently used in server.js (MONGO_URL is used instead)
# In production, prefer passing sensitive values via docker-compose or .env
ENV MONGODB_USERNAME=admin
ENV MONGODB_PASSWORD=qwerty

# -------------------- APPLICATION SETUP --------------------

# Create application directory inside the container filesystem
RUN mkdir /test-app

# Set working directory for all subsequent commands
# Any RUN, CMD, COPY will execute relative to this path
WORKDIR /test-app

# Copy entire project source code from host → container
# Includes server.js, package.json, node_modules (if present), etc.
COPY . /test-app

# Install project dependencies
# NOTE:
# - This layer is cached only if package.json/package-lock.json do not change
# - In production, better to copy package*.json first for better caching
RUN npm install

# -------------------- APPLICATION START --------------------

# Default command to run when container starts
# Executes Node.js application inside the container
CMD ["node", "/test-app/server.js"]