import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client' ;
import 'fetch';
import {Router} from 'aurelia-router';

export class ItemEquip {
  heading = 'お着替えタイム';
  router;
  item_id;
  static inject() { return [Router]; }
  constructor(router) { this.router = router; }

  submit() {
    var a: any = new HttpClient()
        .fetch('http://54.238.223.36:3000/item_equip?item_id='+this.item_id)
        .then(response => response.json())
        .then(response => {
          this.response = response;
        });
    a;
    this.router.navigate("item_result_eq");
  }
  response;
  activate() {

    var a: any = new HttpClient()
        .fetch('http://54.238.223.36:3000/item')
        .then(response => response.json())
        .then(response => {
          this.response = response;
        });
    return a;
  }
}