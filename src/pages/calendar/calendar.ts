import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  eventList: any;
  selectedEvent: any;
  isSelected: any;

  eventMonth: any;    //correctly stores before and after dates in month
  eventYear: any;

  viewMonth: any;   //this remembers what month user was on when leaving page

  constructor(public navCtrl: NavController) {
    this.viewMonth = 0;

  }

  ionViewWillEnter() {
    this.date = new Date();
    this.eventMonth = this.date.getMonth();
    this.eventYear = this.date.getFullYear();
    this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.getDaysOfMonth();

    this.displayLastView(this.viewMonth);

    //this.loadEventThisMonth();
  }


  /**
  * Lets the user resume from where they were at in calendar if they navigate to another page
  */
  displayLastView(target){
    if(target != 0){
      if(target > 0){
        for(var posA = 0; posA < target; posA++){
          this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
          this.eventMonth = this.date.getMonth();
          this.eventYear = this.date.getFullYear();
          this.getDaysOfMonth();
        }
      }
      else{
        for(var posB = 0; posB > target; posB--){
          this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
          this.eventMonth = this.date.getMonth();
          this.eventYear = this.date.getFullYear();
          this.getDaysOfMonth();
        }
      }
    }
  }

  /**
  * Works out what days are to be displayed on calendar and on what line
  */
  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }

    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }

    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    for (var j = 0; j < thisNumOfDays; j++) {
      this.daysInThisMonth.push(j+1);
    }

    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (var k = 0; k < (6-lastDayThisMonth); k++) {
      this.daysInNextMonth.push(k+1);
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for(var l = (7-lastDayThisMonth); l < ((7-lastDayThisMonth)+7); l++) {
        this.daysInNextMonth.push(l);
      }
    }
  }

  /**
  * Navigates to previous month
  */
  goToLastMonth() {
    this.viewMonth -= 1;
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.eventMonth = this.date.getMonth();
    this.eventYear = this.date.getFullYear();
    this.getDaysOfMonth();
  }

  /**
  * Navigates to next month
  */
  goToNextMonth() {
    this.viewMonth += 1;
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.eventMonth = this.date.getMonth();
    this.eventYear = this.date.getFullYear();
    this.getDaysOfMonth();
  }

  /**
  * Take user to add event page
  */
  addEvent() {
    this.navCtrl.push('AddEventPage');
  }

  goToEventsInDayLastMonth(daySelected){
      if(this.eventMonth == 0){
        this.navCtrl.push('DayViewPage', {dayChosen: daySelected, monthChosen: 12, yearChosen: this.eventYear-1});
      }
      else{
        this.navCtrl.push('DayViewPage', {dayChosen: daySelected, monthChosen: this.eventMonth, yearChosen: this.eventYear});
      }
  }

  goToEventsInDayThisMonth(daySelected){
    this.navCtrl.push('DayViewPage', {dayChosen: daySelected, monthChosen: this.eventMonth+1, yearChosen: this.eventYear});
  }

  goToEventsInDayNextMonth(daySelected){
      if(this.eventMonth == 11){
        this.navCtrl.push('DayViewPage', {dayChosen: daySelected, monthChosen: 1, yearChosen: this.eventYear+1});

      }
      else{
        this.navCtrl.push('DayViewPage', {dayChosen: daySelected, monthChosen: this.eventMonth+2, yearChosen: this.eventYear});
      }
  }
}
