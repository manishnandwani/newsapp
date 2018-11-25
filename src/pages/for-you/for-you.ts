import { Component ,Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {DataProvider} from '../../providers/data/data';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { AboutPage } from '../about/about';


/**
 * Generated class for the ForYouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-for-you',
  templateUrl: 'for-you.html',
  providers:[DataProvider]
})
export class ForYouPage {

  data={};
  i;
  // @Input("arr") arr

  constructor(public navCtrl: NavController,private iab: InAppBrowser, public navParams: NavParams,private http:HttpClient) {
    //ionViewDidLoad(){}
   
  }

  url='https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f78729cd63a2418bb648a26a3a6a3af9';
  ionViewDidLoad() {
    this.http.get(this.url).subscribe(data => {

     
        this.data = data;
       

      // for(this.i=0;this.i<data['articles'].length;this.i++)

      
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


  // getdata(){

  //     this.http.get(this.url).subscribe(data => {
  //       for(this.i=0;this.i<data.articles.length;this.i++)
  //       {
  //         this.data = data;
  //       this.title=data.articles[this.i].title;
  //       this.img=data.articles[this.i].urlToImage;
  //       console.log(data);
  //       console.log(this.title);
  //       console.log(this.img)
  //     }
  //     }, err => {
  //       console.log(err);
        
  //     });
    
    
  
   
     
  //   }}