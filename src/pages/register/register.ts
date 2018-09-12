import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

    signupError: string;
  	form: FormGroup;
    name: any;

  	constructor(fb: FormBuilder, private navCtrl: NavController, private auth: AuthService) {
  		this.form = fb.group({
        name: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
  			email: ['', Validators.compose([Validators.required, Validators.email])],
  			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
  		});
    }


  signup() {
      console.log(this.name);
  		let data = this.form.value;
  		let credentials = {
  			email: data.email,
  			password: data.password
  		};
  		this.auth.signUp(credentials, this.name).then(
  			(result) => {
          this.auth.addUserToFirebase(this.name, result.user.uid);
          this.navCtrl.setRoot('TabsPage');
          console.log(result);
       },
  			error => this.signupError = error.message
  		);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
