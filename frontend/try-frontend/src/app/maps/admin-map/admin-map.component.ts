import { Component, OnInit, Input, AfterViewInit} from "@angular/core";

declare var google: any;
@Component({
    selector: "sompo-admin-map",
    templateUrl: "./admin-map.component.html",
    styleUrls: ['./admin-map.component.css']
})
export class CustomAdminMapComponent implements OnInit{
  private map : any;
  private mapProp : any;
  private cityCircle: any = null;

  constructor() {
  }
  ngOnInit() {
    let brussels = new google.maps.LatLng(50.82, 4.35);
    let paris = new google.maps.LatLng(48.85, 2.32);
    this.mapProp = {
        zoom: 9,
        center: brussels,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // display map
    this.map = new google.maps.Map(document.getElementById("googleMap"), this.mapProp);
    
    // let service = new google.maps.places.PlacesService(map);

    // mark on the map
    let marker = new google.maps.Marker({
      position: brussels,
      map: this.map,
      title: 'Brussels'
    });

    // var locations = [
    //   ['Berlin', brussels, "Berlin Germany"],
    //   ['Paris', paris, "Paris France"]
    // ];

    // for (let location of locations){
    //   console.log(location[0], location[1])
    //     var marker = new google.maps.Marker({
    //       position: location[1],
    //       map: this.map,
    //       title: location[0]
    //     })
    //     show_info(marker, location[2])
    // }

    // function show_info(marker, info_content){
    //   let infowindow = new google.maps.InfoWindow({content:info_content});
    //   marker.addListener('click', function() {
    //       infowindow.open(marker.get('map'), marker);
    //     });
    //   }
    // show info
    // let infowindow = new google.maps.InfoWindow({content:marker.title});

    // marker.addListener('click', function() {
    //   infowindow.open(marker.get('map'), marker);
    // });

    // draw a circle in google map
    // this.map.addListener('center_changed', ()=> {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
    //   console.log('center changed')
    //   window.setTimeout(()=> {
    //     this.map.panTo(marker.getPosition());
    //   }, 3000);
    // });
    // this.map = map;
    // this.cityCircle = new google.maps.Circle({
    //   strokeColor: '#FF0000',
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: '#FF0000',
    //   fillOpacity: 0.35,
    //   map: map,
    //   center: this.mapProp.center,
    //   radius: 1000
    // });
  }


  // ngAfterViewInit() {
  //   this.map.addListener('center_changed', function() {
  //     // 3 seconds after the center of the map has changed, pan back to the
  //     // marker.
  //     console.log('center changed')
  //     window.setTimeout(function() {
  //       this.map.moveCamera(this.marker.getPosition());
  //       // this.map.panTo(this.marker.getPosition());
  //     }, 3000);
  //   });
  // }
  distancechanged(kms){
    this.cityCircle.setMap(null);
    this.cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: this.map,
      center: this.mapProp.center,
      radius: kms * 1000
    })
  }
  //   console.log(kms)
  // }
}
