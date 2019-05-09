read -p â"Server IP: "  IP

rm -rf server
mkdir server

openssl genrsa -out server.key 2048	
openssl req -key server.key  -out server.csr -new -subj "/C=NL/ST=Brabant/L=Breda/O=Avans/OU=Sendlab/CN=$IP" -reqexts SAN -extensions SAN -config <(cat /etc/ssl/openssl.cnf <(printf "\n[SAN]\nsubjectAltName=IP:$IP"))
openssl x509 -req -in server.csr  -CA /etc/mosquitto/ca_certificates/ca.crt -CAkey /etc/mosquitto/ca_certificates/ca.key -CAcreateserial -out server.crt -days 36500 -extfile <(printf "subjectAltName=IP:$IP")

mv server.* server