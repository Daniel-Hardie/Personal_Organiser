import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CalendarServiceProvider } from '../../providers/calendar-service/calendar-service';

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  event = { title: "", description: "", startTime: "", startDate: "", endTime: "", endDate: ""};
  currentTime: any;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,
    public calendarService: CalendarServiceProvider) {
      this.currentTime = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  save(){
    this.calendarService.createEvent(this.event);
  }

  goToCalendarPage(){
    this.navCtrl.push('CalendarPage');
  }



}
