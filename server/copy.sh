read -p "Source path (full path): "  srcPath
read -p "Destination path *optional [current dict]: " dstPath
dstPath=${dstPath:-.}
id=$(docker ps -asqf "name=sendlab-ubuntu")
if [ -z "$srcPath" ]
then
      echo "Error: Source path can't be empty"
else
      echo $(docker cp $id:$srcPath $dstPath)
fi
