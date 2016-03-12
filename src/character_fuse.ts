//import {computedFrom} from 'aurelia-framework';

export class CharacterFuse {
  heading = 'M&A';
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
