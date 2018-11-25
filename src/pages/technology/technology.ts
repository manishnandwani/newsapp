import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import {HttpClient} from '@angular/common/http';
import {DataProvider} from '../../providers/data/data';


/**
 * Generated class for the TechnologyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html',
})
export class TechnologyPage {
  data={};
  i;
  url='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=7c48c5e4372b458682302a0b9fdd44d8';


  
  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser,private http:HttpClient) {

  }

  ionViewDidLoad() {
    this.http.get(this.url).subscribe(data => {

        this.data = data;
       
      
      console.log(data);

     
    
    }, err => {
      console.log(err);
      
    });
    console.log('ionViewDidLoad TechnologyPage');
  }
  inapp(i){
    console.log(i)
    const options: InAppBrowserOptions = {
      zoom : 'no'
    }
    const browser = this.iab.create(i.url,'_self', options);
    // browser.open();
  }
  nextPage(){
    this.navCtrl.push(AboutPage);
  }

}
