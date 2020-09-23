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


 handleDestinationChange(a:Address){
    
    console.log(a)
  }
 }
