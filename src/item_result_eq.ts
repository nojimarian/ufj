//import {computedFrom} from 'aurelia-framework';


import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client' ;
import 'fetch';
import {Router} from 'aurelia-router';

export class InvestResult {
  heading = 'うっぉぉぉお！！！着替えました';
  router;
  static inject() { return [Router]; }
  constructor(router) { this.router = router; }

  response;
  activate() {
    var a: any = new HttpClient()
        .fetch('http://54.238.223.36:3000/item_invest')
        .then(response => response.json())
        .then(response => {
          this.response = response;
        });
    return a;
  }
}