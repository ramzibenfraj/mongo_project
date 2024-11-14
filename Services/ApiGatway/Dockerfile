# Use a base Node.js image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Environment variables for the gateway
ENV PORT=3001
ENV USER_SERVICE_URL=http://categoriems:3002
ENV PRODUCT_SERVICE_URL=http://productms:3003

# Expose the port
EXPOSE 3001

# Start the Node.js application
CMD ["node", "server.js"]
