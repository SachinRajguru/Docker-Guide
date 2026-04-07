# Use official Node.js runtime as base image
FROM node:16

# Set environment variables
ENV MONGODB_USERNAME=admin
ENV MONGODB_PASSWORD=qwerty

# Create app directory
RUN mkdir /test-app

# Sets current dir
WORKDIR /test-app

# Copy app source code
COPY . /test-app

# Install dependencies (cached if package.json unchanged)
RUN npm install

# Start the app
CMD ["node", "/test-app/server.js"]