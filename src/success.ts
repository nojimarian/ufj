//import {computedFrom} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client' ;
import 'fetch';
import {Router} from 'aurelia-router';

export class Success {
  heading = '目標を達成しました！';
  character = '東京三菱UFJ三井住友銀子';
  router;

  response;
  static inject() { return [Router]; }
  constructor(router) { this.router = router; }

  activate() {
    var a: any = new HttpClient()
        .fetch('http://54.238.223.36:3000/complete')
        .then(response => response.json())
        .then(response => {
          this.response = response;
          console.log(this.response);
        });
    //console.log(this.response.completed);
    return a;
  }
}

