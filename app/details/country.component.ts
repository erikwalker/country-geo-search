import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeonameService } from '../home/geoname.service';
import { ICountry } from '../home/country';

@Component({
  moduleId: module.id,
  templateUrl: 'country.template.html'
})

export class CountryComponent implements OnInit {
  country: ICountry;
  isLoading: boolean = false;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
                        private _geonameService: GeonameService) {
    console.log(this.route.snapshot.params['id']);
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.getCountryDetails(id);
  }

  getCountryDetails(id: string) {
    this.isLoading = true;
    this._geonameService.getCountry(id)
          .subscribe(
             results => {
               console.log(results);
               this.isLoading = false;
               this.country = results[0];
             },
             error => this.errorMessage = <any>error
            );
  }

}