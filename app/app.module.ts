import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './nav/nav.component';
import { CountryComponent } from './details/country.component';

import { GeonameService } from './home/geoname.service';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule,
                   HttpModule
                   ],
  declarations: [ AppComponent,
                          HomeComponent,
                          NavbarComponent,
                          CountryComponent
                          ],
  providers: [ GeonameService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }