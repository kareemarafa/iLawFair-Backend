pipeline {
    agent any
    options {
        buildDiscarder logRotator(daysToKeepStr: '5', numToKeepStr: '6')
    }

    stages {
        stage("Dev-UserAPI") {
             when {
                branch 'develop'
            }
            steps {
                echo 'Building the application...'
                sh 'rm -rf ./node_modules ./package-lock.json ./dist && yarn' // Remove if exists
                sh 'nx build api-builder' // Remove if exists
                sh 'scp -o stricthostkeychecking=no -r ./dist/* deploy@website-me.com:/var/www/dev.api.user.website-me.com/' // upload new content
                sh 'scp -o stricthostkeychecking=no -r ./dev.env ./package.json ./decorate-angular-cli.js deploy@website-me.com:/var/www/dev.api.user.website-me.com/apps/api-builder/' // upload .env file
                sh 'ssh -o stricthostkeychecking=no deploy@website-me.com "cd /var/www/dev.api.user.website-me.com/apps/api-builder && rm -rf node_modules yarn.lock && yarn && NODE_ENV=dev pm2 start main.js --name dev_API_builder"' // install dependencies
            }
        }
    }
}
