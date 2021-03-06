//import {computedFrom} from 'aurelia-framework';

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client' ;
import 'fetch';
import {Router} from 'aurelia-router';

export class CharacterFuse {
  heading = 'M&A';
  router;
  static inject() { return [Router]; }
  constructor(router) { this.router = router; }

  submit = () => this.router.navigate("character_result_ma");

  response;
  activate() {
    var a: any = new HttpClient()
        .fetch('http://54.238.223.36:3000/character')
        .then(response => response.json())
        .then(response => {
          this.response = response;
        });
    return a;
  }
}