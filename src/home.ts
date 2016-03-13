import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client' ;
import 'fetch';
import {Router} from 'aurelia-router';

export class Home {
  message = 'hoge';
  router;
    messageupdate;
  static inject() { return [Router]; }
  constructor(router) {
      this.router = router;
      this.messageupdate = () => {
          this.message = this.response.messages[Math.floor(Math.random() * this.response.messages.length)];
      }
  }


  response;
    w1;
    w2;
    hair;face;cloth;

  activate() {
      var a: any = new HttpClient()
        .fetch('http://54.238.223.36:3000/home')
        .then(response => response.json())
        .then(response => {
              this.response = response;
              this.message  = this.response.messages[Math.floor(Math.random() * this.response.messages.length)];
              if (this.response.completed) {
                  this.router.navigate("success");
              }
              this.w1 = 'width:'+ response.user.achievement + '%;';
              this.w2 = 'width:'+ response.bank.level/2*100 + '%;';
              this.hair = "http://54.238.223.36:3000" + response.image.hair;
              this.face = "http://54.238.223.36:3000" + response.image.face;
              this.cloth = "http://54.238.223.36:3000" + response.image.cloth;

          });
            //console.log(this.response.completed);
      return a;
  }
}

