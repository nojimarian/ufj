//import {computedFrom} from 'aurelia-framework';

export class Setting {
  heading = '設定できません';

}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
