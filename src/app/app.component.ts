import { Component } from '@angular/core';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autoCompleteGoogleMaps';
  lat = 51.678418;
  lng = 7.809007;

 handleDestinationChange(a:Address){
    
    console.log(a)
  }
 }
