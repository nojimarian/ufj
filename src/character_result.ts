//import {computedFrom} from 'aurelia-framework';

export class CharacterResult {
  heading = 'M&A';
  new_character = '東京三菱UFJ三井住友銀子';
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
