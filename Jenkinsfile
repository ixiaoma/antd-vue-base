pipeline {
    agent any
    environment {
        MODULE = 'hro-front'
    }
    stages {
        stage('LoadConfig') {
            steps {
                loadProfileConfig("${params.profile}")
            }
        }
        stage('Build') { 
            steps {
                sh "/home/service/soft/node-v9.8.0-linux-x64/bin/npm install --registry=https://registry.npm.taobao.org"
                sh "/home/service/soft/node-v9.8.0-linux-x64/bin/npm run ${params.profile}" 
            }
        }
        stage('Copy test') {
            when {
                environment name: 'profile', value: 'test'
            }
            steps {
                sh "cp -r dist/* ${env.MODULE_DIR}"
                
            }
        }
        stage('Copy build') {
            when {
                environment name: 'profile', value: 'build'
            }
            steps {
                sh "sshpass -p'${env.DEST_PASSWORD}' scp -r -P ${env.DEST_PORT} -o \"StrictHostKeyChecking no\" dist/* ${env.DEST_USERNAME}@${env.DEST_HOST}:${env.MODULE_DIR}"
                
            }
        }
    }
}

def loadProfileConfig(profile) {
    def profileConfig = "jenkins-${profile}.groovy"
    if (fileExists("${profileConfig}")) {
        load "${profileConfig}"
    } else {
        echo "${profileConfig} 不存在"
        sh "exit 1"
    }
}

String runCommand() {
    def command = "sshpass -p'${env.DEST_PASSWORD}' ssh -p ${env.DEST_PORT} -o \"StrictHostKeyChecking no\" ${env.DEST_USERNAME}@${env.DEST_HOST} "
    echo "command: ${command}"
    return "${command}";
}