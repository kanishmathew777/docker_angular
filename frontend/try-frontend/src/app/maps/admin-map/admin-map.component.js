"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AdminMapComponent = (function () {
    function AdminMapComponent() {
        this.cityCircle = null;
    }
    AdminMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var brussels = new google.maps.LatLng(50.82, 4.35);
        var paris = new google.maps.LatLng(48.85, 2.32);
        this.mapProp = {
            zoom: 9,
            center: brussels,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(document.getElementById("googleMap"), this.mapProp);
        var marker = new google.maps.Marker({
            position: brussels,
            map: this.map,
            title: 'Brussels'
        });
        this.map.addListener('center_changed', function () {
            console.log('center changed');
            window.setTimeout(function () {
                _this.map.panTo(marker.getPosition());
            }, 3000);
        });
    };
    AdminMapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "sompo-admin-map",
            templateUrl: "./admin-map.component.html",
            styleUrls: ['./admin-map.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AdminMapComponent);
    return AdminMapComponent;
}());
exports.AdminMapComponent = AdminMapComponent;
