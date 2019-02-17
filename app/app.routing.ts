import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './details/country.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'country/:id', component: CountryComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ] , { preloadingStrategy: PreloadAllModules }) // ,  {enableTracing: true} )
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }