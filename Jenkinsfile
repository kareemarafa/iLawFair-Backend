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
                sh 'yarn build admin,tenant' // Remove if exists
                sh 'scp -o stricthostkeychecking=no -r ./dist/* deploy@website-me.com:/var/www/dev.api.user.website-me.com/' // upload new content
                sh 'scp -o stricthostkeychecking=no -r ./dev.env ./package.json deploy@website-me.com:/var/www/dev.api.user.website-me.com/apps/' // upload .env file
                sh 'ssh -o stricthostkeychecking=no deploy@website-me.com "cd /var/www/dev.api.user.website-me.com/apps && rm -rf node_modules yarn.lock && yarn && pm2 restart DEV_admin_API && pm2 restart DEV_tenant_API"' // install dependencies
            }
        }
    }
}
