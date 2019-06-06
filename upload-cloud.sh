find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

sftp maurice@192.168.5.3 <<EOF
put -r database-link
put -r event-generator-handler 

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

mkdir node
put node/autostart.sh node/
put node/config.js node/config.js

mkdir mongodb
put mongodb/autostart.sh mongodb/
put mongodb/mongodb.conf mongodb/
put mongodb/Dockerfile mongodb/

put -r oauth 
put -r rest-full
put -r test-apps
put docker-compose.yml
put Dockerfile
bye
EOF
