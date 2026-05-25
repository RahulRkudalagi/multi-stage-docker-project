# Architecture

- Simple Node.js + Express service exposing `/`, `/health`, `/status` endpoints.
- Docker: two Dockerfiles demonstrating an unoptimized and a multi-stage optimized image.
- CI/CD: GitHub Actions builds images, scans with Trivy, and pushes to Docker Hub.
- Kubernetes: Minikube deployment with a NodePort service and Prometheus annotations.
