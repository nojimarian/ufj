import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client' ;
import 'fetch';
import {Router} from 'aurelia-router';

export class Home {
  message = 'hoge';
  router;
  static inject() { return [Router]; }
  constructor(router) { this.router = router; }

  response;
  activate() {
      var a: any = new HttpClient()
        .fetch('http://54.238.223.36:3000/home')
        .then(response => response.json())
        .then(response => {
              this.response = response;
              this.message  = this.response.messages[Math.floor(Math.random() * this.response.messages.length)];
          });
            //console.log(this.response.completed);
      return a;
  }
}

