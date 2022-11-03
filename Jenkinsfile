pipeline {
    agent any
    options {
        buildDiscarder logRotator(daysToKeepStr: '5', numToKeepStr: '6')
    }

    stages {
        stage("Dev-UserAPI") {
            when {
                allOf {
                  branch 'develop'
                  changeset 'apps/api-builder/*'
                  changeset 'libs/*'
                }
            }
            steps {
                echo 'Building the application...'
                sh 'rm -rf ./node_modules ./package-lock.json ./dist && yarn' // Remove if exists
                sh 'nx build api-builder' // Remove if exists
                sh 'scp -o stricthostkeychecking=no -r ./dist/* deploy@website-me.com:/var/www/dev.api.user.website-me.com/' // upload new content
                sh 'scp -o stricthostkeychecking=no -r ./dev.env deploy@website-me.com:/var/www/dev.api.user.website-me.com/' // upload .env file
                sh 'ssh -o stricthostkeychecking=no deploy@website-me.com "cd /var/www/dev.api.user.website-me.com/ && rm -rf node_modules package-lock.json && yarn"' // install dependencies
                sh 'ssh -o stricthostkeychecking=no deploy@website-me.com "pm2 restart dev_API_builder"' // restart API service
            }
        }
    }
}
