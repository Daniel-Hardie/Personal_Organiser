import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';


/*
  Generated class for the CalendarServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CalendarServiceProvider {


  userId: string;
  item: any;
  dbRefSelectedUser: any;

  constructor(private afAuth: AngularFireAuth) {
     this.afAuth.authState.subscribe(user => {
       if(user) this.userId = user.uid
     });
  }

  createEvent(event){
    if(this.userId != null){
      this.dbRefSelectedUser = firebase.database().ref('users/'+this.userId+'/calendarEvents/');
      this.dbRefSelectedUser.child(event.startDate+'/'+event.startTime).update({
        title : event.title,
        description: event.description,
        startTime: event.startTime,
        startDate: event.startDate,
        endTime: event.endTime,
        endDate: event.endDate
      });
    }
  }

  getEventsOnDay(date){
     if(this.userId != null){
      this.dbRefSelectedUser = firebase.database().ref('users/'+this.userId+'/calendarEvents/'+date+'/');
      return this.dbRefSelectedUser.once('value');
     }
  }

  deleteEvent(time){
    if(this.userId != null){
      this.dbRefSelectedUser = firebase.database().ref('users/'+this.userId+'/calendarEvents/'+time);
      console.log('users/'+this.userId+'/calendarEvents/'+time);
      this.dbRefSelectedUser.getRef().remove();
    }
  }
}
