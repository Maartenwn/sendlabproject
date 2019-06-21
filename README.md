# sendlabproject

## Files
- docker-compose.yml docker-compose file voor docker-compose
- upload-cloud.sh upload script om files te uploaden naar de TI-Cloud server 
- upload-cloud-test.sh upload script om files uploaden naar de TI-Cloud-Test server
- .gitignore gitignore
- Dockerfile docker file behoordende tot de node docker
- Startup.txt file met instructies om docker omgeving op te zetten

## Docker folders
- mqtt: folder met alle files voor mqtt docker
- mongo: folder met alle files voor mongo docker
- visualisatie: folder met alle files voor visualisatie dockers
- node folder met alle files voor instellen van node applicaties (ip en port) en startup script node docker

## Documentatie
- api-documentatie folder met documentatie van dit project

## Applicaties
- database folder met database code
- oath folder met code voor oath node applicatie
- database-link folder met code voor database-link node applicatie (haalt data op van mqtt en zet het in de database)
- rest-full folder met code voor rest-full node applicatie (haalt data op uit de database en geeft het op ssh met endpoints aan) https://app.swaggerhub.com/apis/Rick-Farstreet/SendLab_rest/1.0.0#/default/in 
- zonneboot-websocket folder met code voor de zonneboot-websocket node applicatie (zet de zonneboot data om naar websocket, alleen de laaste data)
- event-generator-handler folder met code voor de event-generator-handler node applicatie (genereert event gebasseerd op ingekomen data)
- test-apps folder met alle test applicaties
- event-logger folder met code voor de event-logger electron-js applicatie (laat de gegenereerde events zien in een lijst)


### Poorten
- 4200: Visualisatie zonneboot
- 23450: REST-Full
- 34219: oath
- 8080: websocket zonneboot
- 8883: mqtt / mosquitto 

## License
[MIT](https://choosealicense.com/licenses/mit/)