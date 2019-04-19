#!/bin/bash

read -p "Cert name: " name
echo "$name"

openssl ca -revoke /etc/mosquitto/certs/$name/client.crt -keyfile /etc/mosquitto/ca_certificates/ca.key -cert /etc/mosquitto/ca_certificates/ca.crt -config crl_openssl.conf
openssl ca -gencrl -keyfile /etc/mosquitto/ca_certificates/ca.key -cert /etc/mosquitto/ca_certificates/ca.crt -out ca.crl -config crl_openssl.conf
openssl crl -text -noout -hash -in ca.crl
service mosquitto restart
