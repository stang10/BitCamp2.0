import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient, private alertController: AlertController) { }

  lat: number;
  long: number;
  locations = {};
  selected = {};
  submitted = false;
  searched: String;
  participants: String = "2";
  matched = false;

  //Card Values
  name: String;
  address: String;
  linkToPhoto: String;
  photoExists = true;
  counter = 0;
  rating: any;
  keys = []

  //Participant Stuff
  play = false;
  person: number = 1;

  //Match
  votes: number = 0;
  displayString: String;


  setSearches(ev: any) {
    let val: String = ev.target.value;

    val = val.trim();
    val = val.replace(/\s/g, '+')

    this.searched = val
  }

  async getLocation() {

    if (!this.searched || !this.participants) {
      this.missingFields()
    }
    else {

      var latLng;

      const response = await this.getLatLng(this.searched);

      if (response) {
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
            // if (response['results'][i].hasOwnProperty("opening_hours")){
            //   this.locations[response['results'][i]['place_id']] = [response['results'][i]['name'], response['results'][i]['vicinity'], response['results'][i]['photos'][0]['photo_reference'], [0,response['results'][i]['opening_hours']['open_now']], response['results'][i]['rating']]
            // }
            // else{
            //   this.locations[response['results'][i]['place_id']] = [response['results'][i]['name'], response['results'][i]['vicinity'], response['results'][i]['photos'][0]['photo_reference'], [1], response['results'][i]['rating']]
            // }

            if (response['results'][i].hasOwnProperty("name")) {
              this.locations[response['results'][i]['place_id']] = [response['results'][i]['name']]
            }
            else {
              this.locations[response['results'][i]['place_id']] = ["No Name Registered"]
            }

            if (response['results'][i].hasOwnProperty("vicinity")) {
              this.locations[response['results'][i]['place_id']].push(response['results'][i]['vicinity'])
            }
            else {
              this.locations[response['results'][i]['place_id']].push("No Official Address Registered")
            }

            if (response['results'][i].hasOwnProperty("photos")) {
              this.locations[response['results'][i]['place_id']].push(response['results'][i]['photos'][0]['photo_reference'])
            }
            else {
              this.locations[response['results'][i]['place_id']].push("None")
            }

            if (response['results'][i].hasOwnProperty("opening_hours")) {
              this.locations[response['results'][i]['place_id']].push([0, response['results'][i]['opening_hours']['open_now']])
            }
            else {
              if (response['results'][i].hasOwnProperty("permanently_closed:")) {
                this.locations[response['results'][i]['place_id']].push([1])
              }
              else {
                this.locations[response['results'][i]['place_id']].push([2])
              }
            }

            if (response['results'][i].hasOwnProperty("rating")) {
              this.locations[response['results'][i]['place_id']].push(response['results'][i]['rating'])
            }
            else {
              this.locations[response['results'][i]['place_id']].push(-1)
            }

            this.selected[response['results'][i]['place_id']] = 0
          }

          console.log(this.locations[response['results'][2]['place_id']])
          console.log(this.selected[response['results'][2]['place_id']])

          console.log(Object.keys(this.locations));

          this.submitted = true;
          this.keys = Object.keys(this.locations)
          this.generateCards();
        });

        console.log(this.participants);
      }
    }

  }

  async getLatLng(city: String) {

    var placesString = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=AIzaSyDN6CczC9Jy5lKDlw8ET2Z_cpjbLjTf5k8';
    var ltLng: any;

    const response = await this.http.get(placesString, { responseType: 'json' }).toPromise();
    console.log(response)

    if (response['status'] == "ZERO_RESULTS") {
      this.unrecognizedLocation()
      return null
    } else {
      ltLng = [2];
      ltLng[0] = response['results'][0]['geometry']['location']["lat"];
      ltLng[1] = response['results'][0]['geometry']['location']["lng"];

      console.log("out of scope " + ltLng);

      return ltLng;
    }
  }

  generateCards() {
    var card = this.keys[this.counter]
    if (this.locations[card][2] == "None") {
      this.photoExists = false
    }
    else {
      this.photoExists = true
      this.linkToPhoto = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + this.locations[card][2] + '&key=AIzaSyDN6CczC9Jy5lKDlw8ET2Z_cpjbLjTf5k8'
    }
    this.name = this.locations[card][0]
    this.address = this.locations[card][1]
    if (this.locations[card][4] == -1){
      this.rating = "Unrated"
    } else {
      this.rating = this.locations[card][4]
    }

  }

  moveToNext() {
    if (this.counter != 19) {
      this.counter++;
      if (this.locations[this.counter + 1] && (this.locations[this.keys[this.counter]][3][0] == 1 || (this.locations[this.keys[this.counter]][3][0] == 0 && this.locations[this.keys[this.counter]][3][1] == false))) {
        this.counter++;
      }
      this.generateCards()
    }
    else {
      this.nextPerson()
    }
  }

  increment() {
    this.selected[this.keys[this.counter]]++;
    this.moveToNext();
  }

  startPerson() {
    this.play = true;
  }

  nextPerson() {
    if (this.person < +this.participants) {
      this.counter = 0;
      this.generateCards()
      this.person++;
      this.play = false;
    } else {
      this.getResults();
    }
  }

  getResults() {
    var max: number = -1;
    var maxPlaceId;
    var maxRating;

    for (let key in this.selected) {
      let value = this.selected[key];

      if (value > max) {
        max = value;
        maxPlaceId = key;
        maxRating = this.locations[key][4];
      }

      if (value == max) {
        if (this.locations[key][4] > maxRating) {
          max = value;
          maxPlaceId = key;
          maxRating = this.locations[key][4];
        }
      }
    }
    this.matched = true;
    this.linkToPhoto = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + this.locations[maxPlaceId][2] + '&key=AIzaSyDN6CczC9Jy5lKDlw8ET2Z_cpjbLjTf5k8'
    this.name = this.locations[maxPlaceId][0]
    this.address = this.locations[maxPlaceId][1]
    this.rating = this.locations[maxPlaceId][4]
    this.votes = max;
    if (this.votes == +this.participants){
      this.displayString = "It's a match!"
    } else if (this.votes == 0){
      this.displayString = "Here's our recommendation!"
    } else if (this.votes >= +this.participants/2){
      this.displayString = "It's nearly a match!"
    } else {
      this.displayString = "Here's the most agreed upon place!"
    }
  }

  startOver() {
    this.lat = 0;
    this.long = 0;
    this.locations = {};
    this.selected = {};
    this.submitted = false;
    this.searched = "";
    this.participants = "2";
    this.matched = false;

    //Card Values
    this.name = "";
    this.address = "";
    this.linkToPhoto = "";
    this.counter = 0;
    this.rating = 0.0;
    this.keys = []

    //Participant Stuff
    this.play = false;
    this.person = 1;

    //Match
    this.votes = 0;
    this.displayString = "";
  }

  async unrecognizedLocation() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Unrecognized Location',
      message: 'Google was unable to generate suggestions based on the entered location.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.startOver();
          }
        }
      ]
    });

    await alert.present();
  }

  async missingFields() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Missing Fields',
      message: 'You must enter both a Location and Number of Participants to Proceed.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.startOver();
          }
        }
      ]
    });

    await alert.present();
  }
}
