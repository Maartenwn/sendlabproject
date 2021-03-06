# Script for uploading everything to the test server

# Remove node_modules (too large to upload to the server)
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

# Remove dist from Angular app
rm -rf visualisatie/zonneboot/dist

# Transfer everything to the server
sftp maurice@192.168.5.4 <<EOF
put -r database-link
put -r event-generator-handler 
put -r database
put -r zonneboot-websocket

mkdir mqtt
mkdir mqtt/mosquitto
mkdir mqtt/mosquitto/certs

put mqtt/autostart.sh mqtt/
put mqtt/Dockerfile mqtt/
put -r mqtt/mosquitto/ca_certificates mqtt/mosquitto/
put mqtt/mosquitto/acl mqtt/mosquitto/
put mqtt/mosquitto/mosquitto.conf mqtt/mosquitto/
put -r mqtt/mosquitto/certs/crl mqtt/mosquitto/certs/
put mqtt/mosquitto/certs/addServerCertBasedOnIP.sh mqtt/mosquitto/certs/
put mqtt/mosquitto/certs/addCert.sh mqtt/mosquitto/certs/

mkdir node
put node/autostart.sh node/
put node/config-test.js node/config.js

mkdir mongodb
put mongodb/autostart.sh mongodb/
put mongodb/mongodb.conf mongodb/
put mongodb/Dockerfile mongodb/

mkdir visualisatie
mkdir visualisatie/zonneboot
put -r visualisatie/zonneboot visualisatie

put -r oauth 
put -r rest-full
put -r test-apps
put docker-compose.yml
put Dockerfile
bye
EOF

# RUN AFTER UPLOAD (on server): docker-compose up -d --remove-orphans --build --force-recreate 
