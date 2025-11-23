# Student Management System ✅
Full Stack Application | Docker | Render Deployment | CI/CD | Monitoring

## 📌 Overview
This is a Full Stack Student Management System built using:

- HTML, CSS, JavaScript (Frontend)
- Node.js + Express (Backend)
- Docker & Docker Compose
- Cloud Deployment (Render + Netlify)
- CI/CD using GitHub Actions
- Monitoring using Prometheus & Grafana
- Health Check API

The user can:
✅ Add Students  
✅ View Students  
✅ Delete Students  
✅ Update Students  

---

## 🚀 Live Demo

### ✅ Frontend (Netlify)
https://steady-faun-f64db7.netlify.app/

### ✅ Backend (Render)
https://student-management-system-w15m.onrender.com/

---

## 🧱 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- Fetch API

### Backend
- Node.js
- Express.js
- CORS

### Database
- Temporary in-memory storage

### DevOps & Deployment
- Docker
- Docker Compose
- Render Cloud Hosting
- Netlify Hosting
- GitHub Actions (CI/CD)
- Prometheus + Grafana (Monitoring)

---

## 🐳 Docker Setup

### Backend Dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]

shell
Copy code

### `.dockerignore`
node_modules
Dockerfile
docker-compose.yml

yaml
Copy code

---

## 🧩 Docker Compose
version: "3"
services:
backend:
build: ./backend
ports:
- "5000:5000"
restart: always

frontend:
build: ./frontend
ports:
- "3000:3000"
restart: always

yaml
Copy code

---

## 🌍 Deployment

### ✅ Render (Backend)

Steps:
1. Push code to GitHub
2. Create new Web Service on Render
3. Select repo
4. Set Environment Variables
PORT=5000

yaml
Copy code
5. Deploy ✅

---

### ✅ Netlify (Frontend)

Steps:
1. Upload frontend folder
2. Netlify generates live link
3. Update API URL in `script.js`

---

## 🔁 CI/CD (GitHub Actions)

Automations:
✅ On every push → build Docker image  
✅ Validate code  
✅ Deploy to Render (optional)

Folder:
.github/workflows/deploy.yml

yaml
Copy code

---

## 📊 Monitoring & Health Check

### ✅ Health Route
/health

makefile
Copy code

Returns:
{ status: "ok" }

yaml
Copy code

### ✅ Monitoring Tools
- Prometheus
- Grafana

Used for:
✅ Container monitoring  
✅ CPU/RAM usage  
✅ Uptime tracking

---

## ✅ Challenges Faced
- Docker installation issues (WSL2 required)
- Port conflicts (5000 already in use)
- Render deployment paths
- Serving frontend from backend
- CI/CD configuration

---

## ✅ Final Results
✅ Full Stack App Working  
✅ Dockerized Frontend + Backend  
✅ Cloud Deployment  
✅ CI/CD Setup  
✅ Monitoring Added  
✅ Health Check Working

---

## ✅ Conclusion
This project demonstrates:
- Full stack development
- Containerization
- Cloud deployment
- Automation pipelines
- Monitoring in production
