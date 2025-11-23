# Step 1: Base image
FROM node:18

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy rest of the backend code
COPY . .

# Step 5: Expose port
EXPOSE 5000

# Step 6: Start the server
CMD ["node", "server.js"]
