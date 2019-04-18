read -p "Source path (absolute path): "  srcPath
read -p "Destination path *optional [current dict]: " dstPath
dstPath=${dstPath:-.}
id=$(docker ps -asqf "name=sendlab-ubuntu")
echo $(docker cp $id:$srcPath $dstPath)
