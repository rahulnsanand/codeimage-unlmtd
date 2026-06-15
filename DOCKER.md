# 🐳 Self-Host CodeImage UNLMTD

Want your own private CodeImage instance? Spin one up on your server, your laptop, or a Raspberry Pi in about ten seconds. It's fully containerized, multi-arch, and ridiculously light. Let's go. 👇

---

## 🚀 Quick start

One command. That's the whole setup.

```bash
docker run -d \
  -p 8080:8080 \
  --name codeimage-unlmtd \
  --restart unless-stopped \
  lyfie/codeimage-unlmtd:latest
```

Now open **[http://localhost:8080](http://localhost:8080)** and you're live. 🎉

---

## 🏗️ Runs basically anywhere

We ship multi-architecture images, so the container runs natively on:

- **linux/amd64** — Intel/AMD servers, cloud VMs, regular desktop PCs.
- **linux/arm64** — Apple Silicon Macs (M1–M4), Raspberry Pi 4/5 (64-bit OS), and ARM servers like AWS Graviton.

**What you need:**
- 🖥️ Windows, macOS, Linux, or Raspberry Pi OS (64-bit)
- 🐳 Docker Engine or Docker Desktop
- 🪶 Almost nothing else — it sips **under 10MB of RAM** at idle and barely touches the CPU.

---

## 🛠️ Setup by platform

### Linux & Raspberry Pi

Make sure Docker is up, then run it:

```bash
# Check docker is alive
sudo systemctl status docker

# Launch CodeImage UNLMTD
sudo docker run -d -p 8080:8080 --name codeimage-unlmtd lyfie/codeimage-unlmtd:latest
```

### macOS & Windows

Grab [Docker Desktop](https://www.docker.com/products/docker-desktop/), make sure it's running, then drop the quick-start command into your terminal (or PowerShell):

```powershell
docker run -d -p 8080:8080 --name codeimage-unlmtd lyfie/codeimage-unlmtd:latest
```

---

## 📦 Prefer Docker Compose?

Drop this into a `docker-compose.yml`:

```yaml
services:
  codeimage:
    image: lyfie/codeimage-unlmtd:latest
    container_name: codeimage-unlmtd
    ports:
      - '8080:8080'
    restart: unless-stopped
```

Then:

```bash
docker compose up -d    # start it
docker compose down     # stop it
```

---

## 🛡️ The privacy bit

This matters, so it's worth repeating: CodeImage UNLMTD is **100% client-side**.

- 🚫 **No telemetry** — every tracker has been permanently removed.
- 🔒 **No phoning home** — the code you write or import never leaves your browser. There's no server to send it to.

Self-hosting just makes that guarantee yours to keep. ✨
