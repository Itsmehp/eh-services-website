# Dockerfile for Next.js application

# 1. Builder stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm and dependencies (frozen lockfile for deterministic build)
RUN npm install -g pnpm@10 && \
    pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Next.js application for production
RUN pnpm build

# 2. Production stage
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Copy built assets from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the application port
EXPOSE 3000

# Define the start command
CMD ["npm", "start", "--", "-H", "0.0.0.0"]
