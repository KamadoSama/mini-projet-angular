import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import localeFr  from '@angular/common/locales/fr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearderComponent } from './hearder/hearder.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './accueil/accueil.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ResidenceModule } from './residence/residence.module';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr,'fr')

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    AccueilComponent,
    CarrouselComponent
  ],
  imports: [
    ResidenceModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
