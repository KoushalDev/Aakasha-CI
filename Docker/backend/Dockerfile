# Use a Node.js base image with Alpine
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for layer caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy the rest of your app code
COPY . .

# Expose your backend port
EXPOSE 3005

# Start the backend
CMD ["node", "index.js"]
