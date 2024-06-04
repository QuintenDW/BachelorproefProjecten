# Use a base image with Node.js pre-installed
FROM node:21

# Install hyperfine using apt
RUN apt-get update && \
    apt-get install -y curl && \
    apt-get install -y hyperfine=1.15.0-2
WORKDIR /app
RUN curl -fsSL https://bun.sh/install | bash -s "bun-v1.1.3" && \
  ln -s $HOME/.bun/bin/bun /usr/local/bin/bun
# Set the working directory inside the container


# Copy your Node.js application files into the container
COPY . .
RUN ~/.bun/bin/bun install

# Define the command to be executed when the container starts
CMD ["hyperfine","--warmup","1","node index.js 1000", "bun index.js 1000"]