import { Component, OnInit } from '@angular/core';
//import { registerElement } from 'nativescript-angular/element-registry';
import { MapView, Marker, Position } from "nativescript-google-maps-sdk";

import { ElementRef, ViewChild } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

// Important - must register MapView plugin in order to use in Angular templates
registerElement('MapView', () => MapView);

@Component({
  selector: 'ns-maps-page',
  templateUrl: './maps-page.component.html',
  styleUrls: ['./maps-page.component.css'],
  moduleId: module.id,
})
export class MapsPageComponent implements OnInit {

    mapView: MapView;

    constructor() { }

    public ngOnInit() { }

    public onMapReady(event) {
        console.log(" map ready ");

        const mapView = event.object;

        this.mapView = mapView;

        const NA_CENTER_LATITUDE = 39.8283459;
        const NA_CENTER_LONGITUDE = -98.5816737;

        this.mapView.latitude = NA_CENTER_LATITUDE;
        this.mapView.longitude = NA_CENTER_LONGITUDE;
        this.mapView.zoom = 3;

        const stLouisCoordinates = {
            latitude: 38.619081,
            longitude: -90.196846
        };

        const stLouisMarker = new Marker();
        stLouisMarker.position = Position.positionFromLatLng(
            stLouisCoordinates.latitude,
            stLouisCoordinates.longitude
        );
        stLouisMarker.title = "St. Louis, MO";
        stLouisMarker.snippet = "Go Cardinals!";
        stLouisMarker.color = "#6B8E23";
        this.mapView.addMarker(stLouisMarker);

    }

}
