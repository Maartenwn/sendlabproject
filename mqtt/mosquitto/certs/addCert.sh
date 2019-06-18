#!/usr/bin/env bash
read -p â"Domain: "  name

rm -rf server
mkdir server

openssl genrsa -out server.key 2048
openssl req -out server.csr -key server.key -new << EOF
NL
Brabant
Breda
Avans
Sendlab
$name




EOF
openssl x509 -req -in server.csr -CA ../ca_certificates/ca.crt -CAkey ../ca_certificates/ca.key -CAcreateserial -out server.crt -days 36500
mv server.* server

