# Stage 1: Build stage
FROM node:24-alpine AS builder

# Install pnpm and corepack
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Copy lockfile, workspace configuration, and patches
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY patches/ ./patches/

# Copy package.json files of all monorepo packages to cache dependencies installation
COPY packages/atomic-state/package.json ./packages/atomic-state/
COPY packages/config/package.json ./packages/config/
COPY packages/dom-export/package.json ./packages/dom-export/
COPY packages/highlight/package.json ./packages/highlight/
COPY packages/locale/package.json ./packages/locale/
COPY packages/prisma-models/package.json ./packages/prisma-models/
COPY packages/ui/package.json ./packages/ui/
COPY apps/codeimage/package.json ./apps/codeimage/
COPY apps/website/package.json ./apps/website/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the workspace source code
COPY . .

# Build libraries and frontend application
RUN pnpm build:prod

# Stage 2: Serve stage (Lightweight Alpine Nginx)
FROM nginx:stable-alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output from the builder stage
COPY --from=builder /app/apps/codeimage/dist /usr/share/nginx/html

# Expose port 8080 (smoke test listens on 8080)
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
