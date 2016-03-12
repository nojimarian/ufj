//import {computedFrom} from 'aurelia-framework';

export class Data {
  heading = 'データはありません';

}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
