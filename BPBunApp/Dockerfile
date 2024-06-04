# Use the official bun image
FROM oven/bun:1.1.3 as base

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json,bun.lockb files to the container
COPY package.json bun.lockb ./
# Install dependencies
RUN bun install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Set the command to run your app
CMD ["bun", "run", "index.js"]


