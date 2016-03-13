//import {computedFrom} from 'aurelia-framework';

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client' ;
import 'fetch';
import {Router} from 'aurelia-router';

export class Character {
  heading = 'キャラクター一覧';
  router; charaupdate;
  static inject() { return [Router]; }
  constructor(router) { this.router = router;

      this.charaupdate = () => {
          this.i = (this.i+1)%this.response.characters.length;
          this.w2 = 'width:'+ this.response.characters[0].level/2*100 + '%;';
          this.hair = "http://54.238.223.36:3000" + this.response.characters[this.i].image.hair;
          this.face = "http://54.238.223.36:3000" + this.response.characters[this.i].image.face;
          this.cloth = "http://54.238.223.36:3000" + this.response.characters[this.i].image.cloth;
          this.name = this.response.characters[this.i].name;
          this.description = this.response.characters[this.i].description;
      }
  }

  response; w2;
    hair;face;cloth;name;description;
    i = 0;
  activate() {

    var a: any = new HttpClient()
        .fetch('http://54.238.223.36:3000/character')
        .then(response => response.json())
        .then(response => {
          this.response = response;
          this.w2 = 'width:'+ response.characters[0].level/2*100 + '%;';
            this.hair = "http://54.238.223.36:3000" + response.characters[this.i].image.hair;
            this.face = "http://54.238.223.36:3000" + response.characters[this.i].image.face;
            this.cloth = "http://54.238.223.36:3000" + response.characters[this.i].image.cloth;
            this.name = response.characters[this.i].name;
            this.description = response.characters[this.i].description;
        });
    return a;
  }
}