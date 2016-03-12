//import {computedFrom} from 'aurelia-framework';

export class Character {
  heading = 'ステータス';
  level = 1;
  favorability = 0;
  discription = 'hogehoge';
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
