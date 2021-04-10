import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {}

  canShow: boolean = false;
  lat: number;
  long: number;
  locations = {};
  selected = {};
  submitted = false;
  searched: String;
  participants: String;

  //Card Values
  name: String;
  address: String;
  linkToPhoto: String;
  counter = 0;


  setSearches(ev: any){
    let val: String = ev.target.value;

    val = val.trim();
    val = val.replace(/\s/g, '+')

    this.searched = val
  }

  async getLocation() {

    var latLng;

    const response = await this.getLatLng(this.searched);

    latLng = response;

    //console.log("ltlng: " + latLng);

    var lt = latLng[0];
    var lng = latLng[1];

    console.log("lt: " + lt + " lng: " + lng);

    const proxyURL = "https://cors-anywhere.herokuapp.com/";

    var rests = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?query=restaurant&location=" + lt + "," + lng + "&radius=15000&&type=restaurant&key=AIzaSyDN6CczC9Jy5lKDlw8ET2Z_cpjbLjTf5k8";

    let httpString = proxyURL.concat(rests);


    this.http.get(httpString).subscribe((response) => {
      console.log(response);
      
      for (let i = 0; i < 20; i++) {
        if (response['results'][i].hasOwnProperty("opening_hours")){
          this.locations[response['results'][i]['place_id']] = [response['results'][i]['name'], response['results'][i]['vicinity'], response['results'][i]['photos'][0]['photo_reference'], [0,response['results'][i]['opening_hours']['open_now']]]
        }
        else{
          this.locations[response['results'][i]['place_id']] = [response['results'][i]['name'], response['results'][i]['vicinity'], response['results'][i]['photos'][0]['photo_reference'], [1]]
        }
        this.selected[response['results'][i]['place_id']] = 0
      }
      
      console.log(this.locations[response['results'][2]['place_id']])
      console.log(this.selected[response['results'][2]['place_id']])

      console.log(Object.keys(this.locations));

      this.submitted = true;
      this.generateCards();
    });

    console.log(this.participants);

  }

  async getLatLng(city: String) {

    var placesString =  'https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=AIzaSyDN6CczC9Jy5lKDlw8ET2Z_cpjbLjTf5k8';
    var ltLng:any;

    const response = await this.http.get(placesString, {responseType: 'json'}).toPromise();

    ltLng = [2];
    ltLng[0] = response['results'][0]['geometry']['location']["lat"];
    ltLng[1] = response['results'][0]['geometry']['location']["lng"];

    console.log("out of scope " + ltLng);
    
    return ltLng; 
  }

  generateCards() {
    
    var keys = Object.keys(this.locations)
    var first = keys[this.counter]

    this.linkToPhoto = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + this.locations[first][2] + '&key=AIzaSyDN6CczC9Jy5lKDlw8ET2Z_cpjbLjTf5k8'
    this.name = this.locations[first][0]
    this.address = this.locations[first][1]

  }

  moveToNext() {
    if (this.counter != 19){
      var keys = Object.keys(this.locations)

      this.counter++;
      if (this.locations[keys[this.counter]][3][0] == 1){
        this.counter++;
      }
      this.generateCards()
    }
  }

}
