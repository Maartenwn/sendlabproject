./kill.sh
 docker rm sendlab-ubuntu
 docker run -it -d --rm \
 -p 8883:8883 \
--name sendlab-ubuntu sendlab/ubuntu