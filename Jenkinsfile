
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application'
                bat 'docker --version'
                bat 'docker build -t devops-task-2 .'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing the application'
                bat 'node --version'
                bat 'npm --version'
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
            echo 'CI/CD pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed. Check Console Output'
        }
    }
}
