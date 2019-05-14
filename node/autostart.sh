cd /root
npm install rest-full
npm install oauth 
npm install database-link/app
pm2 start rest-full/app.js --name rest-full
pm2 start oauth/build/index.js --name oauth
pm2 start database-link/app/app.js --name database-link
pm2 save
/bin/bash