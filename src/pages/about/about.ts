import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { Nav,NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import {DataProvider} from '../../providers/data/data';
import { AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  displayName;
   user;
  constructor(public nav:Nav ,public navCtrl: NavController,public data:DataProvider,private afAuth: AngularFireAuth, public navParams: NavParams, private nativeStorage:NativeStorage) {
    console.log("kjb",this.data.arr)
  }

  ionViewDidLoad() {
    console.log("mm",this.data.arr)
    
  //   this.nativeStorage.getItem('user').then((user) => {
  //     console.log("this is email: " + user.email);
  //     console.log("this is password: " + user.pasword);
  // })
    console.log('ionViewDidLoad AboutPage',this.data.name,this.data.photo);

  }

  logout(){
    // this.nav.setRoot(LoginPage);
    //  this.afAuth.auth.signOut();

    this.afAuth.auth.signOut().then(() => {
      // this.authService.doLogout().then(function(){
      console.log('Signed Out');
      this.nav.setRoot(LoginPage);
      this.data.sign = false
     
    }, function(error) {

      const alert = this.alertCtrl.create({
        title: error.message ,
        buttons: ['OK']
          });
  
          alert.present();
      console.error('Sign Out Error', error);
    });

     
  }



}
