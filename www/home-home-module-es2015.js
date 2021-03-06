(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-searchbar (search)=\"getTime($event)\" inputmode=\"search\" autocorrect=\"on\" placeholder=\"Enter as CityName, State\" ></ion-searchbar>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        Single Selection\n      </ion-label>\n    </ion-list-header>\n  \n    \n    <ion-item>\n      <ion-label>Number of Participants</ion-label>\n      <ion-select placeholder=\"Select One\">\n        <ion-select-option value=\"2\">2</ion-select-option>\n        <ion-select-option value=\"3\">3</ion-select-option>\n        <ion-select-option value=\"4\">4</ion-select-option>\n        <ion-select-option value=\"5\">5</ion-select-option>\n        <ion-select-option value=\"6\">6</ion-select-option>\n        <ion-select-option value=\"7\">7</ion-select-option>\n        <ion-select-option value=\"8\">8</ion-select-option>\n        <ion-select-option value=\"9\">9</ion-select-option>\n        <ion-select-option value=\"10\">10</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n  </ion-list>\n  <ion-card>\n    <img src=\"https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png\"/>\n    <ion-card-header>\n      <ion-card-subtitle>What are you doing in my swamp?</ion-card-subtitle>\n      <ion-card-title>Shrek</ion-card-title>\n    </ion-card-header>\n    \n    <ion-card-content>\n      Hello \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





let HomePage = class HomePage {
    constructor(http) {
        this.http = http;
        this.canShow = false;
        this.locations = {};
        this.selected = {};
    }
    getTime(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let val = ev.target.value;
            val = val.trim();
            val = val.replace(/\s/g, '+');
            //var latLng = await this.getLatLng(val);
            var latLng;
            /*this.getLatLng(val).then((response) =>  {
                latLng = response;
                console.log("ltlng: " + latLng);
            }) */
            const response = yield this.getLatLng(val);
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
                    if (response['results'][i].hasOwnProperty("opening_hours")) {
                        this.locations[response['results'][i]['place_id']] = [response['results'][i]['name'], response['results'][i]['vicinity'], response['results'][i]['photos'][0]['photo_reference'], [0, response['results'][i]['opening_hours']['open_now']]];
                    }
                    else {
                        this.locations[response['results'][i]['place_id']] = [response['results'][i]['name'], response['results'][i]['vicinity'], response['results'][i]['photos'][0]['photo_reference'], [1]];
                    }
                    this.selected[response['results'][i]['place_id']] = 0;
                }
                console.log(this.locations[response['results'][2]['place_id']]);
                console.log(this.selected[response['results'][2]['place_id']]);
            });
        });
    }
    getLatLng(city) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var placesString = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + city + '&key=AIzaSyDN6CczC9Jy5lKDlw8ET2Z_cpjbLjTf5k8';
            var ltLng;
            //let httpString = proxyURL.concat(placesString);
            /*const data = await this.http.get(placesString, {responseType: 'json'}).toPromise();
            //console.log(data['results'][0]['geometry']['location']);
            
            var ltLng:any;
            ltLng = [data['results'][0]['geometry']['location']["lat"], data['results'][0]['geometry']['location']["lng"]]
        
            console.log(ltLng); */
            /*this.http.get(placesString).subscribe((response) => {
              console.log(response);
        
              ltLng = [2];
              ltLng[0] = response['results'][0]['geometry']['location']["lat"];
              ltLng[1] = response['results'][0]['geometry']['location']["lng"];
        
              console.log("in scope " + ltLng);
            }); */
            const response = yield this.http.get(placesString, { responseType: 'json' }).toPromise();
            ltLng = [2];
            ltLng[0] = response['results'][0]['geometry']['location']["lat"];
            ltLng[1] = response['results'][0]['geometry']['location']["lng"];
            console.log("out of scope " + ltLng);
            return ltLng;
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map