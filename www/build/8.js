webpackJsonp([8],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventPageModule", function() { return AddEventPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_event__ = __webpack_require__(720);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddEventPageModule = /** @class */ (function () {
    function AddEventPageModule() {
    }
    AddEventPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_event__["a" /* AddEventPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_event__["a" /* AddEventPage */]),
            ],
        })
    ], AddEventPageModule);
    return AddEventPageModule;
}());

//# sourceMappingURL=add-event.module.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calendar_service_calendar_service__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddEventPage = /** @class */ (function () {
    function AddEventPage(alertCtrl, navCtrl, navParams, calendarService) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.calendarService = calendarService;
        this.event = { title: "", description: "", startTime: "", startDate: "", endTime: "", endDate: "" };
        this.currentTime = new Date().toISOString();
    }
    AddEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEventPage');
    };
    AddEventPage.prototype.save = function () {
        this.calendarService.createEvent(this.event);
    };
    AddEventPage.prototype.goToCalendarPage = function () {
        this.navCtrl.push('CalendarPage');
    };
    AddEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-event',template:/*ion-inline-start:"C:\Users\danie\Documents\University\2018\SWEN325\AssignmentOne\Personal_Organiser\src\pages\add-event\add-event.html"*/'<!--\n  Generated template for the AddEventPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "headerBackColor">\n    <ion-title>Add Event</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="save()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Title</ion-label>\n        <ion-input type="text" [(ngModel)]="event.title" name="event.title"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Description</ion-label>\n        <ion-input type="text" [(ngModel)]="event.description" name="event.description"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Start Time</ion-label>\n        <ion-datetime displayFormat="hh:mm A" pickerFormat="hh:mm/A" [(ngModel)]="event.startTime" name="event.startTime"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Start Date</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY" [min]="currentTime" [max]="2100-12-31" pickerFormat="DD/MM/YYYY" [(ngModel)]="event.startDate" name="event.startDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>End Time</ion-label>\n        <ion-datetime displayFormat="hh:mm A" pickerFormat="hh:mm/A" [(ngModel)]="event.endTime" name="event.endTime"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>End Date</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY" [min]="currentTime" [max]="2100-12-31" pickerFormat="DD/MM/YYYY" [(ngModel)]="event.endDate" name="event.endDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button type="submit" (click)="goToCalendarPage()" full round>Add Event</button>\n      </ion-item>\n\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\danie\Documents\University\2018\SWEN325\AssignmentOne\Personal_Organiser\src\pages\add-event\add-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_calendar_service_calendar_service__["a" /* CalendarServiceProvider */]])
    ], AddEventPage);
    return AddEventPage;
}());

//# sourceMappingURL=add-event.js.map

/***/ })

});
//# sourceMappingURL=8.js.map