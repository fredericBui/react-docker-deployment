pipeline {
    agent any

    stages {
        stage('Intégration continue') {
            steps {
                git branch: 'main', url: 'https://github.com/fredericBui/react-docker-deployment'
            }
        }
        stage('Livraison continue') {
            steps {
                echo "Livraison continue"
            }
        }
    }
}
