import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { AboutPage } from './../about/about';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
// import { AboutPage } from '../about/about';


/**
 * Generated class for the TrendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-entertainment',
  templateUrl: 'entertainment.html',

})
export class EntertainmentPage {

  data={};
 i;

 

//   constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient) {
//   }
//   url='https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=f78729cd63a2418bb648a26a3a6a3af9';
//   ionViewDidLoad() {
//     this.http.get(this.url).subscribe(data => {
      
//         this.data = data;
       

//   data: any={};
//  i;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient, private iab: InAppBrowser) {
  }
  
  url='https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=f78729cd63a2418bb648a26a3a6a3af9';
  
  ionViewDidLoad() {

    this.http.get(this.url).subscribe(data => {    

      
        this.data = data;
      console.log(data);

    }, err => {
      console.log(err);
      
    });
  
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


 
    
    
   
  
  


