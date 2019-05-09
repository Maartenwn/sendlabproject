#!/bin/bash

INDEX=0
NAME=""

while  [ $INDEX < 5] 
do
read -p "Cert name: " $NAME
$INDEX = ${#$NAME}
done

FILE="/etc/mosquitto/certs/crl/index.txt"


sed  -i "/$name/d" /etc/mosquitto/certs/crl/index.txt

openssl ca -gencrl -keyfile /etc/mosquitto/ca_certificates/ca.key -cert /etc/mosquitto/ca_certificates/ca.crt -out ca.crl -config crl_openssl.conf

