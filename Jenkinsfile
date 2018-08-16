pipeline {
  agent {
    node {
      label 'master'
    }

  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Update Libraries') {
      steps {
        sh 'npm install'
      }
    }
    stage('Restart') {
      steps {
        sh 'pm2 restart Soundboard'
      }
    }
  }
}
