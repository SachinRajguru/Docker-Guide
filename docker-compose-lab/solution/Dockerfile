# Use official Node.js runtime as base image
# Includes Node.js + npm preinstalled
FROM node:20

# -------------------- ENVIRONMENT VARIABLES --------------------

# Define environment variables inside the container
# NOTE: These are not currently used in server.js (MONGO_URL is used instead)
# In production, prefer passing values via docker-compose or .env file
ENV MONGODB_USERNAME=admin
ENV MONGODB_PASSWORD=qwerty

# -------------------- APPLICATION SETUP --------------------

# Set working directory inside container
# All commands will run relative to this path
WORKDIR /app

# -------------------- DEPENDENCY INSTALLATION (IMPORTANT FOR CACHING) --------------------

# Copy only package files first
# This allows Docker to cache npm install layer
COPY package*.json ./

# Install project dependencies
RUN npm install

# -------------------- APPLICATION CODE --------------------

# Copy rest of the application source code
COPY . .

# -------------------- APPLICATION START --------------------

# Default command to run when container starts
# WORKDIR already points to /app, so no full path needed
CMD ["node", "server.js"]