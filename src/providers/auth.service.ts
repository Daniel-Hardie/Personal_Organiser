import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
	private user: firebase.User;
	userId: any;
	temp: any;
	dbRefSelectedUser: any;

	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
			if(user) this.userId = user.uid

		});
		// this.userId = this.user.id;
	}

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(credentials, name) {
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
	}

	 addUserToFirebase(name, uids){
			console.log(name);
			firebase.database().ref('users/' + uids).update({
				name : name
			});
	 }

	get authenticated(): boolean {
	  return this.user !== null;
	}

	getEmail() {
	  return this.user && this.user.email;
	}

	getName(){
		 //if(this.userId != null){
		 this.dbRefSelectedUser = firebase.database().ref('users/'+this.userId).orderByChild('name');
		 return this.dbRefSelectedUser.once('value');
		// }
		 //return firebase.database().ref('users/'+this.userId+'name').once('value');
	}

	signOut(): Promise<void> {
	  return this.afAuth.auth.signOut();
	}

}
