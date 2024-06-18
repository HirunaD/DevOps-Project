pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('devops-project')
        GIT_REPO = 'https://github.com/HirunaD/DevOps-Project.git'
        APP_NAME = 'health-lab'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: "${GIT_REPO}"
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                script {
                    docker.build("${APP_NAME}-backend:latest", './backend')
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    docker.build("${APP_NAME}-frontend:latest", './frontend')
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKERHUB_CREDENTIALS}") {
                        docker.image("${APP_NAME}-backend:latest").push()
                        docker.image("${APP_NAME}-frontend:latest").push()
                    }
                }
            }
        }

        stage('Deploy Application') {
            steps {
                sshagent(['your-ssh-key-id']) {
                    sh '''
                    ssh user@application-server <<EOF
                    docker pull your-dockerhub-username/${APP_NAME}-backend:latest
                    docker pull your-dockerhub-username/${APP_NAME}-frontend:latest
                    docker-compose -f /path/to/your/docker-compose.yml up -d
                    EOF
                    '''
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
