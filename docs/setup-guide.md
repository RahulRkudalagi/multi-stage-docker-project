# Setup Guide

Prerequisites: Docker, Minikube, kubectl, Git, Node.js

Local steps:

1. Install npm dependencies

```powershell
cd "C:\Users\RAHUL R KUDALAGI\Documents\Cloud Computing\Course Project\app"
npm install
```

2. Build normal image

```powershell
docker build -f ..\docker\Dockerfile.normal -t yourusername/multi-stage-docker-app:normal .
```

3. Build optimized image

```powershell
docker build -f ..\docker\Dockerfile.optimized -t yourusername/multi-stage-docker-app:optimized .
```

4. Compare image sizes

```powershell
docker images | grep multi-stage-docker-app
```

5. Run locally

```powershell
docker run -p 3000:3000 yourusername/multi-stage-docker-app:optimized
```

6. Start Minikube and deploy

```powershell
minikube start
kubectl apply -f ..\kubernetes\namespace.yaml
kubectl apply -f ..\kubernetes\deployment.yaml
kubectl apply -f ..\kubernetes\service.yaml
```
