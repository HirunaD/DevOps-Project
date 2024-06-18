# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production with minification
RUN npm run build

# Install serve to serve the build
RUN npm install -g serve

# Expose the port serve runs on
EXPOSE 3000

# Command to run the application
CMD ["serve", "-s", "build"]
