cd /root/zonneboot
npm i
npm run build
cp -a dist/frontend-zonneboot/. /var/www/html/
service apache2 start
/bin/bash