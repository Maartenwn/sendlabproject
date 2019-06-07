FROM ubuntu:latest

RUN apt-get update && apt-get upgrade -y
RUN apt-get install nano curl -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install nodejs -y
RUN npm install pm2@latest -g
ADD rest-full /root/rest-full
ADD oauth /root/oauth
ADD database-link /root/database-link
ADD event-generator-handler /root/event-generator-handler
ADD test-apps /root/test-apps
ADD database /root/database
ADD node/config.js /root/node/

ADD node/autostart.sh /


RUN chmod 755 autostart.sh
CMD ./autostart.sh