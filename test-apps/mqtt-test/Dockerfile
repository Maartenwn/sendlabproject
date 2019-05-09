FROM ubuntu:latest

RUN apt-get update && apt-get upgrade -y
RUN apt-get install nano nodejs npm -y

ADD app /root/app
RUN cd /root/app && npm install
ENTRYPOINT cd /root/app && npm app.js