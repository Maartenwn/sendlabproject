FROM ubuntu:latest

RUN apt-get update && apt-get upgrade -y
RUN apt-get install nano mosquitto openssl net-tools openssh-server -y

ADD mosquitto /etc/mosquitto
ADD autostart.sh /

