id=$(docker images -aqf "label=sendlab-ubuntu")
docker rmi $id
docker build --label sendlab-ubuntu -t sendlab/ubuntu .