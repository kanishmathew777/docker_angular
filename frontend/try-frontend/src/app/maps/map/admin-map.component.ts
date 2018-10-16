import { Component, OnInit, Input, AfterViewInit} from "@angular/core";

declare var google: any;
@Component({
    selector: "sompo-admin-map",
    templateUrl: "./admin-map.component.html",
    styleUrls: ['./admin-map.component.css']
})
export class AdminMapComponent implements AfterViewInit{
    title = 'Dashboard';
  private map: any;

  constructor() {
  }
  onMapsReady(){
    let brussels = new google.maps.LatLng(50.82, 4.35);
    var mapOptions = {
      zoom: 9,
      center: brussels
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
      position: brussels
    });
    //google.maps.event.addListener(marker, 'click', ( () => this.select.next("i was a map click")) )
    marker.setMap(this.map);
  }
  ngAfterViewInit(){
    (<any>window).googleMapsReady=this.onMapsReady.bind(this);
     var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
    script.src = "http://maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=googleMapsReady";
  }
}
