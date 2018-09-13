webpackJsonp([6],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewPageModule", function() { return DayViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__day_view__ = __webpack_require__(718);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DayViewPageModule = /** @class */ (function () {
    function DayViewPageModule() {
    }
    DayViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__day_view__["a" /* DayViewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__day_view__["a" /* DayViewPage */]),
            ],
        })
    ], DayViewPageModule);
    return DayViewPageModule;
}());

//# sourceMappingURL=day-view.module.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DayViewPage; });
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



/**
 * Generated class for the DayViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DayViewPage = /** @class */ (function () {
    function DayViewPage(navCtrl, navParams, eventService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.eventService = eventService;
        this.alertCtrl = alertCtrl;
        this.eventList = [];
        this.day = navParams.get('dayChosen');
        if (this.day < 10) {
            this.day = '0' + this.day;
        }
        this.month = navParams.get('monthChosen');
        if (this.month < 10) {
            this.month = '0' + this.month;
        }
        this.year = navParams.get('yearChosen');
        this.id = (this.year + "-" + this.month + "-" + this.day);
        this.getEvents();
    }
    DayViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DayViewPage');
    };
    DayViewPage.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEventsOnDay(this.id).then(function (result) {
            var allEvents = result.val();
            _this.eventList = [];
            console.log(allEvents);
            if (allEvents != null) {
                document.getElementById("emptyMessage").style.visibility = "hidden";
                document.getElementById("allEvents").style.visibility = "visible";
                for (var time in allEvents) {
                    _this.eventList.push({
                        title: allEvents[time].title,
                        description: allEvents[time].description,
                        startTime: allEvents[time].startTime,
                        startDate: allEvents[time].startDate,
                        endTime: allEvents[time].endTime,
                        endDate: allEvents[time].endDate,
                        displayStartDate: _this.formatDate(allEvents[time].startDate),
                        displayEndDate: _this.formatDate(allEvents[time].endDate),
                    });
                }
            }
            else {
                document.getElementById("allEvents").style.visibility = "hidden";
                document.getElementById("emptyMessage").style.visibility = "visible";
            }
        });
    };
    DayViewPage.prototype.formatDate = function (time) {
        return time.substring(8, 10) + "/" + time.substring(5, 7) + "/" + time.substring(0, 4);
    };
    DayViewPage.prototype.showInfo = function (event) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: event.title,
            subTitle: event.description,
            message: "Start time: " + event.startTime + " " + event.displayStartDate +
                "<br>End time: " + event.endTime + " " + event.displayEndDate,
            buttons: [
                { text: 'Okay' },
                { text: 'Delete',
                    handler: function () {
                        _this.eventService.deleteEvent(event.startDate + '/' + event.startTime);
                        _this.navCtrl.setRoot('CalendarPage');
                    }
                }
            ]
        });
        alert.present();
    };
    DayViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-day-view',template:/*ion-inline-start:"C:\Users\danie\Documents\University\2018\SWEN325\AssignmentOne\Personal_Organiser\src\pages\day-view\day-view.html"*/'<!--\n  Generated template for the DayViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color = "headerBackColor">\n    <ion-title>{{day}}/{{month}}/{{year}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="allEvents">\n    <p class = "alignTitle">Event</p>\n    <p class = "alignTime">Start Time</p>\n  </div>\n  <div>\n    <ion-list no-lines>\n        <ion-item *ngFor="let event of eventList">\n          <ion-label (click)="showInfo(event)">\n            <p class = "alignTitle">{{event.title}}</p>\n            <p class = "alignTime">{{event.startTime}}</p>\n          </ion-label>\n        <</ion-item>\n    </ion-list>\n  </div>\n\n  <div id="emptyMessage">\n    <p>No events for today!</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\danie\Documents\University\2018\SWEN325\AssignmentOne\Personal_Organiser\src\pages\day-view\day-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_calendar_service_calendar_service__["a" /* CalendarServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DayViewPage);
    return DayViewPage;
}());

//# sourceMappingURL=day-view.js.map

/***/ })

});
//# sourceMappingURL=6.js.map