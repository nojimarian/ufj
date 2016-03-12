//import {computedFrom} from 'aurelia-framework';

export class Friend {
  heading = '友達はいません';

}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
