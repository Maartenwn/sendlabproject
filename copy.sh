read -p "Container name: "  containerName
read -p "Source path (absolute path): "  srcPath
read -p "Destination path *optional [current dict]: " dstPath
dstPath=${dstPath:-.}
id=$(docker ps -asqf "name=$containerName")
echo $(docker cp $id:$srcPath $dstPath)
