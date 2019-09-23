pipeline {
    agent any

    stages {
        stage('Build'){
            steps {
                echo 'Build commands will go here...'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing commands will go here...'
            }
        }
        stage('Deploy') {
            when {
                environment name: 'gitlabBranch', value: 'master'
            }
            steps {
                echo 'Deploying commands will go here...'
            }
        }
    }
}
