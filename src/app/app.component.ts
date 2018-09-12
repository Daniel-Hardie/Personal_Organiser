import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth.service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = 'LoginPage';
  rootPage: any;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initializeApp();
    });
  }

  initializeApp() {
	  this.auth.afAuth.authState
	    .subscribe(
	      user => {
	        if (user) {
	          this.rootPage = 'TabsPage';
	        } else {
	          this.rootPage = 'LoginPage';
	        }
	      },
	      () => {
	        this.rootPage = 'LoginPage';
	      }
	    );
	}


  login() {
    //this.menu.close();
  	this.auth.signOut();
  	this.nav.setRoot('LoginPage');
  }



}
