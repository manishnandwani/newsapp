import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import {DataProvider} from '../../providers/data/data';
/**
 * Generated class for the InterestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// export interface User { displayName:string, photoUrl:string, email:string, interests:['']};

@Component({
  selector: 'page-interests',
  templateUrl: 'interests.html',
})
export class InterestsPage {
  // userData:User = {displayName:'', photoURL:'', email:'', interests:['']} 
  i={name:"", status:false};
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  // interest={name:["Wildlife"], status:false, images:["", "", "../../assets/imgs/entertainment.jpg", "../../assets/imgs/technology.jpg"]};
  interest = [{name:"Wildlife", image:"../../assets/imgs/wildlife.jpg", status:false}, {name:"Business", image:"../../assets/imgs/business.jpg", status:false},{name:"Entertainment", image:"../../assets/imgs/entertainment.jpg", status:false}, {name:"Technology", image:"../../assets/imgs/technology.jpg", status:false}]
  
  interest2 = [ {name:"Health", image:"../../assets/imgs/health.jpg", status:false},{name:"Science", image:"../../assets/imgs/science.jpg", status:false}, {name:"Sports", image:"../../assets/imgs/sports.jpg", status:false}]

  // arr=[];
  imgs=[ "../../assets/imgs/health.jpg",  "../../assets/imgs/sports.jpg"]
  interests=["Business", "Entertainment",  "Health", "Science", "Sports", "Technology", "Wildlife"];
  constructor(public navCtrl: NavController,public data:DataProvider, public navParams: NavParams, private afs:AngularFirestore) {
    this.userCollection = afs.collection<User>('users');

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad InterestsPage');
  }
toggle(i){
  i.status=!i.status;
  console.log(i);
  if((i.status)==true){
    // this.arr.indexOf(i.name) === -1 ? this.arr.push(i.name) : console.log("This item already exists");
   this.data.arr.push(i.name);
    console.log("aa",this.data.arr);
   }
  else if((i.status)==false){
      console.log(i);
   var j= this.data.arr.indexOf(i.name) 
     this.data.arr.splice(j, 1);
    console.log("aa",this.data.arr);
  }
}
continue(){
  this.navCtrl.push(HomePage);
}
}