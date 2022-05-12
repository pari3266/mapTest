/// <reference types="@types/googlemaps" />

import {Component, OnInit, ViewChild} from '@angular/core';
import {} from 'googlemaps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test-map';

  @ViewChild('map', {static: true}) mapElement: any;
  // map: google.maps.Map;
  map : any;
  ngOnInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement?.nativeElement,    mapProperties);
  }
}
