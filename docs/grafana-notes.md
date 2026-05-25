# Grafana Notes

This project exposes Prometheus annotations on the Kubernetes Deployment. To visualize in Grafana:

1. Install Prometheus and Grafana (e.g., via Helm or Minikube addons).
2. Add Prometheus as a datasource in Grafana.
3. Create dashboards or import community dashboards to visualize HTTP latency, throughput and container resource metrics.
