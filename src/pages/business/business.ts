import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-business',
  templateUrl: 'business.html',

})
export class BusinessPage {
  
 
  
 
  url='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f78729cd63a2418bb648a26a3a6a3af9';

  data: any={};
 i;

 constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient, private iab: InAppBrowser) {
  }

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

 
    
    
   
  
  


