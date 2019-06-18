#!/usr/bin/env bash
read -p â"Name of device: "  name

mkdir $name

openssl genrsa -out client.key 2048
openssl req -out client.csr -key client.key -new << EOF
NL
Brabant
Breda
Avans
Sendlab
$name




EOF
openssl x509 -req -in client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client.crt -days 36500
mv client.* $name

