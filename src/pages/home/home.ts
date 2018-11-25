import { AboutPage } from './../about/about';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,Nav } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';
import {ForYouPage} from '../for-you/for-you'
import {VideosPage} from '../videos/videos';
import {TrendingPage} from '../trending/trending';
import {HttpClient} from '@angular/common/http';
import {DataProvider} from '../../providers/data/data';
import { LoginPage } from '../login/login';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage { 

  pages=[
    
  {pageName:ForYouPage,title:"For You", icon:"heart",arr:""},
  {pageName:TrendingPage, title:"Trending" ,icon:"trending-up",arr:""},
  {pageName: VideosPage,title:"All News",icon:"videocam",arr:""}
  
];
selectedTab=0;
  @ViewChild(SuperTabs) SuperTabs: SuperTabs;
  array
  constructor(public navCtrl: NavController,public nav: Nav,public data:DataProvider, public navParams: NavParams,private http:HttpClient) {
    console.log("ss",this.data.arr)

    // if(this.data.sign == false)
    //     this.nav.setRoot(LoginPage)
    // else
        

    // for(var i=0;i<this.data.arr.length;i++)
    // {   
    //   this.pages[i].arr = this.data.arr[i]
    // }
  }
  onTabSelect(ev:any){
    this.selectedTab=ev.index
  }
 
 nextPage(){
   this.navCtrl.push(AboutPage);
 }
 

}
