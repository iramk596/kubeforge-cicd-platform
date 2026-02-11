# KubeForge – Production-Grade CI/CD on Kubernetes

KubeForge is an end-to-end CI/CD platform built to simulate real-world production deployment workflows on AWS. It automates the build, validation, and deployment of containerized applications using a Blue-Green deployment strategy on Kubernetes.

---
<img width="2337" height="1009" alt="Screenshot (2677)" src="https://github.com/user-attachments/assets/69c64b89-7396-4cb2-b0c2-4ea9da074f6d" />

## Project Objective

The purpose of KubeForge is to demonstrate how production CI/CD systems are designed to:

- Automate build and deployment workflows  
- Eliminate downtime during releases  
- Enable safe rollback mechanisms  
- Maintain system observability  
- Control infrastructure costs  

---

## Architecture Overview

The system follows a structured DevOps workflow:

1. A developer pushes code to GitHub  
2. Jenkins triggers the CI/CD pipeline  
3. A Docker image is built and tagged using the Git commit hash  
4. The image is deployed to Amazon EKS  
5. Blue and Green deployments run in parallel  
6. A Kubernetes Service manages traffic routing  
7. Prometheus collects cluster metrics  
8. Grafana provides monitoring dashboards  

---

## Blue-Green Deployment Strategy

KubeForge implements a Service-based Blue-Green deployment model.

- Blue Deployment: Current stable production version  
- Green Deployment: Newly deployed version  

Both deployments run simultaneously within the cluster.

---

## Infrastructure as Code (Terraform)

All AWS infrastructure is provisioned using Terraform.

```bash
terraform apply
terraform destroy
```

---
<img width="2560" height="1600" alt="Screenshot (2646)" src="https://github.com/user-attachments/assets/5732bd89-5dc3-40e6-8ff2-5bf987fdbfca" />


## CI/CD Pipeline (Jenkins)

The CI/CD pipeline is defined using Declarative Jenkins syntax.

Pipeline stages include:

1. Source code checkout  
2. Docker image build  
3. Deployment to Kubernetes  
4. Traffic switch  

---
<img width="2559" height="1457" alt="Screenshot 2026-02-11 104225" src="https://github.com/user-attachments/assets/af98d484-36c5-4ae4-bf02-09f8206b8b53" />

## Monitoring and Observability

### Prometheus

- Scrapes cluster and pod metrics
  <img width="2559" height="1453" alt="Screenshot 2026-02-11 161051" src="https://github.com/user-attachments/assets/602691ad-0503-4d01-a0e0-79b24577bc7f" />

### Grafana

- Visualizes metrics through dashboards  

---

## Key Learnings

- End-to-end CI/CD system design  
- Kubernetes deployment strategies  
- Infrastructure automation  
- Observability integration  
- Cost-efficient cloud engineering  
