import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Facebook } from '@ionic-native/facebook';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage 
{
  posts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private fb: Facebook) {}

  ionViewDidLoad() 
  {
    //console.log(this.fb.getAccessToken());

    this.http.get('https://graph.facebook.com/v3.2/me/posts/?EAAQ5ZAqqQ7CgBAK8jLdtiAyP1ZCDl2NXm6OIp9DX9D7sZBr9oCtJZAsxZAZAPRdnDoymRRHnzoa0C0LtlC7d8mh1FD9ZBWhJFTNMlphpakcusCj8uKJbZBPYAgWSXZCtOk1Pc8XN3C5yw3nY3jLCE3AJ0wg7PgFkQzKbtICNCmspdd6TYhteIIWCelGDgC7pdk6oZD').subscribe(data =>
    {
      alert("Yes! i did it...");//console.log(data['response']);

    },err => 
    {
      console.log(this.fb.getAccessToken());
    });
  }
}
