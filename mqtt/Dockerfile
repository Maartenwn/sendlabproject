FROM ubuntu:latest

RUN apt-get update && apt-get upgrade -y
RUN apt-get install nano openssl wget gnupg -y
RUN wget http://repo.mosquitto.org/debian/mosquitto-repo.gpg.key && apt-key add mosquitto-repo.gpg.key && cd /etc/apt/sources.list.d/ && wget http://repo.mosquitto.org/debian/mosquitto-stretch.list && apt-get update && apt-get install mosquitto -y


ADD mosquitto /etc/mosquitto

ADD autostart.sh /
RUN chmod 755 autostart.sh
CMD ./autostart.sh