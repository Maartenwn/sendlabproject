cd /root
npm install rest-full --production
npm install oauth --production
npm install database-link --production
npm install test-apps/mqtt-test --production

pm2 start rest-full/index.js --name rest-full
pm2 start oauth/index.js --name oauth
pm2 start database-link/index.js --name database-link
pm2 start test-apps/mqtt-test/index.js --name mqtt-test
pm2 save
/bin/bash