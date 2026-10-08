# Aakasha 

**Aakasha is a subscription-based cloud platform for storing and delivering large volumes of photos and videos.**

The platform enables photographers and videographers to upload high-resolution media to the cloud and provide their customers with secure access to their files. Customers can access and retrieve their photos and videos through the platform based on their subscription.

## Application

Photographer / Videographer
          |
          | Upload Photos & Videos
          v
    Aakasha Cloud Platform
          |
          | Cloud Storage
          v
       Customer
          |
          | Access / Download
          v
      Media Files

### Key Capabilities

*  Cloud-based storage for large media files
*  Photo and video management
*  Photographer/Videographer media upload
*  Customer access to delivered media
*  Subscription-based storage model
*  Web-based application

## Technology Stack

**Application**

* Next.js / React
* Node.js
* MySQL

**DevOps & Cloud**

* Docker
* AWS
* Amazon ECR
* Amazon EKS
* Kubernetes
* Helm
* Terraform
* GitHub Actions
* AWS IAM / GitHub OIDC

## 🔄 CI/CD & Deployment

GitHub
   ↓
GitHub Actions
   ↓
Docker Build
   ↓
Amazon ECR
   ↓
Amazon EKS
   ↓
Helm / Kubernetes
   ↓
Aakasha Application

Infrastructure is provisioned using **Terraform**, container images are stored in **Amazon ECR**, and the application is deployed to **Amazon EKS using Kubernetes and Helm**.

GitHub Actions automates the CI/CD workflow, with **OIDC-based authentication to AWS** to avoid storing long-lived AWS credentials.

## 🎯 Project Objective

Aakasha demonstrates how a **real-world SaaS application** can be containerized, provisioned using Infrastructure as Code, and deployed to a scalable Kubernetes environment using a modern cloud-native CI/CD pipeline.

