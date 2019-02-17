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
var router_1 = require("@angular/router");
var geoname_service_1 = require("../home/geoname.service");
var CountryComponent = (function () {
    function CountryComponent(route, _geonameService) {
        this.route = route;
        this._geonameService = _geonameService;
        this.isLoading = false;
        console.log(this.route.snapshot.params['id']);
    }
    CountryComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.getCountryDetails(id);
    };
    CountryComponent.prototype.getCountryDetails = function (id) {
        var _this = this;
        this.isLoading = true;
        this._geonameService.getCountry(id)
            .subscribe(function (results) {
            console.log(results);
            _this.isLoading = false;
            _this.country = results[0];
        }, function (error) { return _this.errorMessage = error; });
    };
    return CountryComponent;
}());
CountryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'country.template.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        geoname_service_1.GeonameService])
], CountryComponent);
exports.CountryComponent = CountryComponent;
//# sourceMappingURL=country.component.js.map