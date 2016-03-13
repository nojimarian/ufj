//import {computedFrom} from 'aurelia-framework';

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client' ;
import 'fetch';
import {Router} from 'aurelia-router';

export class ItemInvest {
  heading = '新アイテムに投資する';
  router;
  static inject() { return [Router]; }
  constructor(router) { this.router = router; }

  submit = () => this.router.navigate("item_result");

  response;
}