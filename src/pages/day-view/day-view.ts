import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CalendarServiceProvider } from '../../providers/calendar-service/calendar-service';

/**
 * Generated class for the DayViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-day-view',
  templateUrl: 'day-view.html',
})
export class DayViewPage {

  day: any;
  month: any;
  year: string;
  id: any;
  displayStartDate: string;
  displayEndDate: string;
  eventList: any = [];
  emptyMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventService: CalendarServiceProvider, public alertCtrl: AlertController) {
    this.day = navParams.get('dayChosen');
    if(this.day < 10){
      this.day = '0'+ this.day;
    }
    this.month = navParams.get('monthChosen');
    if(this.month < 10){
      this.month = '0'+ this.month;
    }
    this.year = navParams.get('yearChosen');
    this.id = (this.year + "-" + this.month + "-" + this.day);
    this.getEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DayViewPage');
  }

  getEvents(){
    this.eventService.getEventsOnDay(this.id).then((result) => {
      let allEvents = result.val();
      this.eventList = [];
      console.log(allEvents);
      if(allEvents != null){
        document.getElementById("emptyMessage").style.visibility="hidden";
        document.getElementById("allEvents").style.visibility="visible";


        for(var time in allEvents){
          this.eventList.push({
              title: allEvents[time].title,
              description: allEvents[time].description,
              startTime: allEvents[time].startTime,
              startDate: allEvents[time].startDate,
              endTime: allEvents[time].endTime,
              endDate: allEvents[time].endDate,
              displayStartDate: this.formatDate(allEvents[time].startDate),
              displayEndDate: this.formatDate(allEvents[time].endDate),
          });
        }
      }
      else{
        document.getElementById("allEvents").style.visibility="hidden";
        document.getElementById("emptyMessage").style.visibility="visible";
      }

    });
  }

  formatDate(time){
    return time.substring(8,10) + "/" + time.substring(5,7) + "/" + time.substring(0,4);
  }

  showInfo(event){
    const alert = this.alertCtrl.create({
      title: event.title,
      subTitle: event.description,
      message:
        "Start time: " + event.startTime + " " + event.displayStartDate +
        "<br>End time: " + event.endTime + " " + event.displayEndDate,
      buttons: [
        {text: 'Okay'},
        {text: 'Delete',
          handler: () => {
            this.eventService.deleteEvent(event.startDate+'/'+event.startTime);
            this.navCtrl.setRoot('CalendarPage');
          }
        }
      ]
    });
    alert.present();
  }
}
