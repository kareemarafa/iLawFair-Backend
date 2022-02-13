pipeline {
    agent any
    options {
        buildDiscarder logRotator(daysToKeepStr: '5', numToKeepStr: '6')
    }

    stages {
        stage("Deploy web-builder to Development") {
            when {
                branch 'develop'
            }
            steps {
                echo 'Building the application...'
                sh 'rm -rf ./node_modules ./package-lock.json ./dist' // Remove if exists
                sh 'scp -o stricthostkeychecking=no -r ./* deployer@ionhour.com:/var/www/webme-builder.ionhour.com/' // upload new content
                sh 'ssh -o stricthostkeychecking=no deployer@ionhour.com "cd /var/www/webme-builder.ionhour.com/ && npm install"' // install dependencies
                sh 'ssh -o stricthostkeychecking=no deployer@ionhour.com "cd /var/www/webme-builder.ionhour.com/ && nx build web-builder && nx build api-builder"' // build
            }
        }
    }
}
