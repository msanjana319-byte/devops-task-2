# DevOps Task 2 – CI/CD Pipeline with Jenkins

## Project Overview
This project demonstrates a Continuous Integration and Continuous Deployment (CI/CD) pipeline using Jenkins and GitHub.

## Tools Used
- Git and GitHub
- Jenkins
- Node.js
- npm
- Dockerfile

## Pipeline Stages
1. **Checkout SCM** – Retrieves source code from the repository.
2. **Checkout** – Checks out the project code.
3. **Build** – Runs the build stage.
4. **Test** – Runs the test stage.
5. **Deploy** – Runs the deployment stage.
6. **Post Actions** – Prints the pipeline completion message.

## Result
Jenkins build #6 completed successfully.

Note: The Deploy stage currently confirms pipeline execution; it does not by itself prove deployment to a live server or Docker container.
