find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

sftp maurice@145.48.205.52 <<EOF
put -r database-link
put -r event-generator-handler 
put -r mqtt
put -r node
put -r oauth 
put -r rest-full
put -r test-apps
put docker-compose.yml
put Dockerfile
bye
EOF
