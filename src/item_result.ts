//import {computedFrom} from 'aurelia-framework';


import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client' ;
import 'fetch';
import {Router} from 'aurelia-router';

export class InvestResult {
  heading = 'アイテムゲット！';
  router;
    message = 'はずれ！';
    bgcolor = "red";
    imgurl;
  static inject() { return [Router]; }
  constructor(router) { this.router = router; }

  response;
  activate() {
    var a: any = new HttpClient()
        .fetch('http://54.238.223.36:3000/item_invest')
        .then(response => response.json())
        .then(response => {
          this.response = response;
            console.log(this.response);
            if (this.response.name) {
                this.message = this.response.name+'をゲットしました！';
                this.bgcolor = "deepskyblue";
            }
            this.imgurl = 'http://54.238.223.36:3000'+this.response.image;
        });
    return a;
  }
}