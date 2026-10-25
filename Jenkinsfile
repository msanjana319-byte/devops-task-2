
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Source code is ready'
            }
        }

        stage('Build') {
            steps {
                bat 'docker --version'
                bat 'docker build -t devops-task-2 .'
            }
        }

        stage('Test') {
            steps {
                bat 'node --check app.js'
                echo 'Application syntax test passed'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment stage completed'
            }
        }
    }

    post {
        success {
            echo 'Jenkins CI/CD pipeline completed successfully'
        }
    }
}
