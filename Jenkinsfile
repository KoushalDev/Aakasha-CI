pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-1'
        ECR_REGISTRY = '140023363615.dkr.ecr.us-east-1.amazonaws.com'
        IMAGE_TAG = "v${BUILD_ID}"
        SONAR_TOKEN = credentials('sonar2_token')
        GIT_REPO = 'https://github.com/KoushalDev/Aakasha.git'
        GIT_BRANCH = 'docker-aakasha'
    }

    tools {
        nodejs 'Node_server'
        git 'Default'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: "${GIT_BRANCH}", url: "${GIT_REPO}"
            }
        }

        stage('Docker Compose Build') {
            steps {
                sh 'docker compose -f Docker/docker-compose.yml build'
            }
        }

        stage('Authenticate with ECR') {
            steps {
                withAWS(credentials: 'aws-creds', region: "${AWS_REGION}") {
                    // Using single quotes to allow shell-level interpolation of $AWS_REGION and $ECR_REGISTRY
                    sh '''
                        aws ecr get-login-password --region $AWS_REGION | \
                        docker login --username AWS --password-stdin $ECR_REGISTRY
                    '''
                }
            }
        }

        stage('Tag & Push Images to ECR') {
            steps {
                script {
                    def services = ['aakasha-frontend', 'aakasha-backend', 'mysql-db']
                    for (svc in services) {
                        sh """
                            docker tag ${svc}:latest ${ECR_REGISTRY}/${svc}:${IMAGE_TAG}
                            docker push ${ECR_REGISTRY}/${svc}:${IMAGE_TAG}
                        """
                    }
                }
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline completed successfully!"
        }
        failure {
            echo "❌ Pipeline failed. Please check logs."
        }
    }
}

