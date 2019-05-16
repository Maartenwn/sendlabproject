cd /root
npm install rest-full --production
npm install oauth --production
npm install database-link --production
npm install test-apps/mqtt-test --production
npm install event-generator-handler --production

pm2 start index.js --name rest-full --cwd /root/rest-full/
pm2 start index.js --name oauth --cwd /root/oauth/
pm2 start index.js --name database-link --cwd /root/database-link/
pm2 start index.js --name mqtt-test --cwd /root/test-apps/mqtt-test/
pm2 start index.js --name event-generator-handler --cwd /root/event-generator-handler/

pm2 save
/bin/bash