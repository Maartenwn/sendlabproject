//import {} from 'googlemaps';
import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    lat = 51.58401660081866;
    lng = 4.797248840332031;

    constructor() {
    }

    @Input() set data(data: any) {
        if(data !== null) {
            this.lat = data['gps-loc'].lat;
            this.lng = data['gps-loc'].long
        }
    }

    @ViewChild('map') mapElement: any;
    map: google.maps.Map;

    mapProperties: any;

    ngOnInit() {
        this.mapProperties = {
            center: new google.maps.LatLng(this.lat, this.lng),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapProperties);
    }

}
