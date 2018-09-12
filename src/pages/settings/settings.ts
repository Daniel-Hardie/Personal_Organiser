import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { CalendarServiceProvider } from '../../providers/calendar-service/calendar-service';
import { AuthService } from '../../providers/auth.service';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  @ViewChild(Nav) nav: Nav;


  constructor(public navCtrl: NavController, public navParams: NavParams, public eventService: CalendarServiceProvider, private auth: AuthService) {

  }

  ionViewDidLoad() {

  }

  logout() {
  	this.auth.signOut();
  	this.navCtrl.setRoot('LoginPage');
  }

}
