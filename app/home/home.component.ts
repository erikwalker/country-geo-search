import { Component, OnInit } from '@angular/core';
import { GeonameService } from './geoname.service';
import { ICountry } from './country';

@Component({
    moduleId: module.id,
    selector: 'ng-home',
    templateUrl: 'home.template.html'
})

export class HomeComponent {
  countries: ICountry[];
  copyCountries: ICountry[] = [];
  errorMessage: string;
  isLoading: boolean = false;

  constructor(private _geonameService: GeonameService) {}

  loadCountries() {
    this.isLoading = true;
    this._geonameService.getCountries()
      .subscribe(
        countries => {
          this.isLoading = false;
          this.countries = countries;
        },
        error => this.errorMessage = <any>error,
        () => this.copyCountries = this.countries
        );
  }

  sortType(sort: string) {
    if(sort === 'name') {
      this.countries = this.copyCountries.sort(this.sortByCountryName);
      console.log(this.countries);
    }
    if(sort === 'pop') {
      this.countries = this.copyCountries.sort(this.sortByPopulation);
      console.log(this.countries);
    }
  }

  filterBy(filter: string) {
    switch(filter) {
      case 'all':
      this.countries = this.copyCountries;
      console.log('all countries clicked');
      break;
    case 'europe':
      this.countries = this.countries.filter(country => {
        return country.continentName.toLowerCase().includes('europe');
      });
      console.log('show only european countries');
      break;
   case 'pop':
     this.countries = this.countries.filter(country => {
       return parseInt(country.population) > 1000000;
     });
     console.log('show population > 1M');
     break;
   }
  }

  sortByCountryName(c1: ICountry, c2: ICountry) {
      if(c1.countryName > c2.countryName) return 1
        else if(c1.countryName === c2.countryName) return 0
          else return -1
  }

  sortByPopulation(c1: ICountry, c2: ICountry) {
    return parseInt(c1.population) - parseInt(c2.population);
  }

}
