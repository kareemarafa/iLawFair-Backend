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
                sh 'scp -o stricthostkeychecking=no -r ./* deployer@159.65.88.6:/var/www/dev.api.user.website-me.com/' // upload new content
                sh 'ssh -o stricthostkeychecking=no deployer@159.65.88.6 "cd /var/www/dev.api.user.website-me.com/ && rm -rf node_modules package-lock.json && npm install --legacy-peer-deps"' // install dependencies
                sh 'ssh -o stricthostkeychecking=no deployer@159.65.88.6 "cd /var/www/dev.api.user.website-me.com/ && nx build web-builder && nx build api-builder && pm2 restart webme_api_builder"' // build
            }
        }
    }
}
