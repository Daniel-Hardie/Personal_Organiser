webpackJsonp([7],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar__ = __webpack_require__(717);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CalendarPageModule = /** @class */ (function () {
    function CalendarPageModule() {
    }
    CalendarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calendar__["a" /* CalendarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__calendar__["a" /* CalendarPage */]),
            ],
        })
    ], CalendarPageModule);
    return CalendarPageModule;
}());

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(158);
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
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.viewMonth = 0;
    }
    CalendarPage.prototype.ionViewWillEnter = function () {
        this.date = new Date();
        this.eventMonth = this.date.getMonth();
        this.eventYear = this.date.getFullYear();
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.getDaysOfMonth();
        this.displayLastView(this.viewMonth);
        //this.loadEventThisMonth();
    };
    /**
    * Lets the user resume from where they were at in calendar if they navigate to another page
    */
    CalendarPage.prototype.displayLastView = function (target) {
        if (target != 0) {
            if (target > 0) {
                for (var posA = 0; posA < target; posA++) {
                    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
                    this.eventMonth = this.date.getMonth();
                    this.eventYear = this.date.getFullYear();
                    this.getDaysOfMonth();
                }
            }
            else {
                for (var posB = 0; posB > target; posB--) {
                    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
                    this.eventMonth = this.date.getMonth();
                    this.eventYear = this.date.getFullYear();
                    this.getDaysOfMonth();
                }
            }
        }
    };
    /**
    * Works out what days are to be displayed on calendar and on what line
    */
    CalendarPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var j = 0; j < thisNumOfDays; j++) {
            this.daysInThisMonth.push(j + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
        for (var k = 0; k < (6 - lastDayThisMonth); k++) {
            this.daysInNextMonth.push(k + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var l = (7 - lastDayThisMonth); l < ((7 - lastDayThisMonth) + 7); l++) {
                this.daysInNextMonth.push(l);
            }
        }
    };
    /**
    * Navigates to previous month
    */
    CalendarPage.prototype.goToLastMonth = function () {
        this.viewMonth -= 1;
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.eventMonth = this.date.getMonth();
        this.eventYear = this.date.getFullYear();
        this.getDaysOfMonth();
    };
    /**
    * Navigates to next month
    */
    CalendarPage.prototype.goToNextMonth = function () {
        this.viewMonth += 1;
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.eventMonth = this.date.getMonth();
        this.eventYear = this.date.getFullYear();
        this.getDaysOfMonth();
    };
    /**
    * Take user to add event page
    */
    CalendarPage.prototype.addEvent = function () {
        this.navCtrl.push('AddEventPage');
    };
    CalendarPage.prototype.goToEventsInDayLastMonth = function (daySelected) {
        if (this.eventMonth == 0) {
            this.navCtrl.push('DayViewPage', { dayChosen: daySelected, monthChosen: 12, yearChosen: this.eventYear - 1 });
        }
        else {
            this.navCtrl.push('DayViewPage', { dayChosen: daySelected, monthChosen: this.eventMonth, yearChosen: this.eventYear });
        }
    };
    CalendarPage.prototype.goToEventsInDayThisMonth = function (daySelected) {
        this.navCtrl.push('DayViewPage', { dayChosen: daySelected, monthChosen: this.eventMonth + 1, yearChosen: this.eventYear });
    };
    CalendarPage.prototype.goToEventsInDayNextMonth = function (daySelected) {
        if (this.eventMonth == 11) {
            this.navCtrl.push('DayViewPage', { dayChosen: daySelected, monthChosen: 1, yearChosen: this.eventYear + 1 });
        }
        else {
            this.navCtrl.push('DayViewPage', { dayChosen: daySelected, monthChosen: this.eventMonth + 2, yearChosen: this.eventYear });
        }
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\danie\Documents\University\2018\SWEN325\AssignmentOne\Personal_Organiser\src\pages\calendar\calendar.html"*/'<!--\n  Generated template for the CalendarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton = "true" color = "headerBackColor">\n      <ion-title>Calendar</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addEvent()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="calendar-header">\n    <ion-row class="calendar-month">\n      <ion-col col-2 (click)="goToLastMonth()"><ion-icon name="arrow-back"></ion-icon></ion-col>\n      <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n      <ion-col col-2 (click)="goToNextMonth()"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n    </ion-row>\n  </div>\n  <div class="calendar-body">\n    <ion-grid>\n      <ion-row class="calendar-weekday">\n        <ion-col>Su</ion-col>\n        <ion-col>Mo</ion-col>\n        <ion-col>Tu</ion-col>\n        <ion-col>We</ion-col>\n        <ion-col>Th</ion-col>\n        <ion-col>Fr</ion-col>\n        <ion-col>Sa</ion-col>\n      </ion-row>\n      <ion-row class="calendar-date">\n        <!-- <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month">{{lastDay}}</ion-col> -->\n        <ion-col col-1 (click)="goToEventsInDayLastMonth(lastDay)" *ngFor="let lastDay of daysInLastMonth" class="last-month">{{lastDay}}</ion-col>\n        <ion-col col-1 (click)="goToEventsInDayThisMonth(day)" *ngFor="let day of daysInThisMonth">\n          <span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n          <ng-template #otherDate class="otherDate">{{day}}</ng-template>\n        </ion-col>\n        <ion-col col-1 (click)="goToEventsInDayNextMonth(nextDay)" *ngFor="let nextDay of daysInNextMonth" class="next-month">{{nextDay}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\danie\Documents\University\2018\SWEN325\AssignmentOne\Personal_Organiser\src\pages\calendar\calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ })

});
//# sourceMappingURL=7.js.map