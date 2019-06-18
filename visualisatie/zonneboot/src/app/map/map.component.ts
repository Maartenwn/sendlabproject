
import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() {
  }

  @Input() data: number;
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;

  mapProperties: any;

  ngOnInit() {
    this.mapProperties = {
      center: new google.maps.LatLng(51.58401660081866, 4.797248840332031),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapProperties);
  }

}
