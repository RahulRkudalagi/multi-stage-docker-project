# Multi-Stage Docker Build Optimization and Registry-Driven CI/CD

Project demonstrating Docker multi-stage builds, GitHub Actions CI/CD with Trivy scanning, Docker Hub integration, Minikube deployment, and Prometheus-ready monitoring annotations.

Overview
 - Service: Node.js + Express application exposing `/`, `/health`, `/status`.
 - Two Dockerfiles: `docker/Dockerfile.normal` (unoptimized) and `docker/Dockerfile.optimized` (multi-stage).
 - CI/CD: `.github/workflows/ci-cd.yaml` builds, scans with Trivy, and pushes images to Docker Hub.

Quick commands

Build normal image:
```
docker build -f docker/Dockerfile.normal -t yourusername/multi-stage-docker-app:normal .
```

Build optimized image:
```
docker build -f docker/Dockerfile.optimized -t yourusername/multi-stage-docker-app:optimized .
```

Compare sizes:
```
docker images | grep multi-stage-docker-app
```

Run optimized container:
```
docker run -p 3000:3000 yourusername/multi-stage-docker-app:optimized
```

Kubernetes (Minikube):
```
minikube start
kubectl apply -f kubernetes/namespace.yaml
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
```

See `docs/setup-guide.md` and `docs/architecture.md` for more details.

