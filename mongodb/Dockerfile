FROM ubuntu:latest

RUN apt-get update && apt-get upgrade -y
RUN apt-get install nano -y
RUN apt update 
RUN apt install mongodb -y

ADD mongodb.conf /etc
ADD autostart.sh /
RUN chmod 755 autostart.sh
CMD ./autostart.sh