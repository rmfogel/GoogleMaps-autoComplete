import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AgmCoreModule} from '@agm/core'
import {GooglePlaceModule} from 'ngx-google-places-autocomplete'
import {NgxLoadingModule, ngxLoadingAnimationTypes} from 'ngx-loading'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        GooglePlaceModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0)', 
      backdropBorderRadius: '0.01px',
      primaryColour: 'green', 
      secondaryColour: 'green', 
      tertiaryColour: 'green'
    }),
    AgmCoreModule.forRoot(  {
      apiKey: 'AIzaSyD7Wui1ikC-x4CMLYBpPz-8Yutf2l3glNo',
     libraries: ["places"]
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
