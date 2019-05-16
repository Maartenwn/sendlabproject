cd /root
npm install rest-full
npm install oauth 
npm install database-link/app
npm install test-apps/mqtt-test/app

pm2 start rest-full/app.js --name rest-full
pm2 start oauth/src/index.js --name oauth
pm2 start database-link/app/app.js --name database-link
pm2 start test-apps/mqtt-test/app/app.js --name mqtt-test
pm2 save
/bin/bash