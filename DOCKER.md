# 🐳 Deploying CodeImage UNLMTD with Docker

Run a private, high-performance instance of CodeImage UNLMTD on your own server or workstation in seconds. This deployment is fully containerized, lightweight, and supports all major architectures.

## 🚀 Quick Start

To run the application locally on port `8080`, execute:

```bash
docker run -d \
  -p 8080:8080 \
  --name codeimage-unlmtd \
  --restart unless-stopped \
  rahulnsanand/codeimage-unlmtd:latest
```

Once running, access the web interface at: **[http://localhost:8080](http://localhost:8080)**

---

## 🏗️ Supported Architectures & System Requirements

We build and distribute multi-architecture images. The container runs natively on:

- **linux/amd64**: Intel/AMD servers, Cloud VMs, and standard desktop PCs.
- **linux/arm64**: Apple Silicon Macs (M1/M2/M3/M4), Raspberry Pi 4/5 (64-bit OS), and ARM64 servers (AWS Graviton, etc.).

### System Requirements
- **OS**: Windows, macOS, Linux, or Raspberry Pi OS (64-bit).
- **Prerequisites**: Docker Engine or Docker Desktop installed.
- **Resources**: Extremely light. Consumes **<10MB of RAM** and negligible CPU under idle.

---

## 🛠️ Platform-Specific Setup

### 1. Linux & Raspberry Pi
Ensure Docker is installed and running:
```bash
# Verify docker service is active
sudo systemctl status docker

# Run CodeImage UNLMTD
sudo docker run -d -p 8080:8080 --name codeimage-unlmtd rahulnsanand/codeimage-unlmtd:latest
```

### 2. macOS & Windows
Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) and ensure it is running, then execute the quick start command in your terminal/PowerShell:
```powershell
docker run -d -p 8080:8080 --name codeimage-unlmtd rahulnsanand/codeimage-unlmtd:latest
```

---

## 📦 Docker Compose Configuration

If you prefer using Docker Compose, create a `docker-compose.yml` file:

```yaml
version: '3.8'

services:
  codeimage:
    image: rahulnsanand/codeimage-unlmtd:latest
    container_name: codeimage-unlmtd
    ports:
      - "8080:8080"
    restart: unless-stopped
```

Start the container with:
```bash
docker compose up -d
```
Stop the container with:
```bash
docker compose down
```

---

## 🛡️ Privacy & Safety
CodeImage UNLMTD is a pure client-side application.
- **No telemetry/tracking**: All tracking metrics have been permanently removed.
- **No server communication**: The files and code you import or write inside this editor never leave your browser.
