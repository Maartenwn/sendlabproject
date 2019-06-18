FROM ubuntu:latest

RUN apt-get update && apt-get upgrade -y
RUN apt-get install nano curl apache2 -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install nodejs -y
ADD . /root/zonneboot
ADD autostart.sh /
RUN chmod 755 autostart.sh
CMD ./autostart.sh

