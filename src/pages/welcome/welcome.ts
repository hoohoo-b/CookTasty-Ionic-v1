import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {MainPage} from "../pages";

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController,
  public toastCtrl: ToastController) { }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  guestLogin() {
    this.navCtrl.push(MainPage);

    let toast = this.toastCtrl.create({
      message: "Welcome to CookTasty!",
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }
}
