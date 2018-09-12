import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarServiceProvider } from '../../providers/calendar-service/calendar-service';
import { AuthService } from '../../providers/auth.service';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  name: any;
  userId: any;
  day: any;
  numEventsToday: any;
  currentTime: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private calService: CalendarServiceProvider, private auth: AuthService) {
      this.auth.getName().then((results) => {
        this.name = results.val().name;
      });


  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad HomePage');
    this.currentTime = new Date().toISOString();
    this.day = this.currentTime.substring(0,10);

    this.auth.getName().then((results) => {
      this.name = results.val().name;
    });

    this.calService.getEventsOnDay(this.day).then((results) => {
      var size = 0, key;
      for(key in results.val()){
        if(results.val().hasOwnProperty(key)) size++;
      }
      this.numEventsToday = size;
    });
  }

  getData(){

  }

}
