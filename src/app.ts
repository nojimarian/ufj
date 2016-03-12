import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = '銀これ！';
    config.map([
      { route: ['', 'home'], name: 'home',      moduleId: 'home',      nav: true, title: 'home' },
      { route: 'character',         name: 'character',        moduleId: 'character',        nav: true, title: 'character' },
      { route: 'item',  name: 'item', moduleId: 'item', nav: true, title: 'item' },
      { route: 'welcome', name: 'welcome',      moduleId: 'welcome',      nav: true, title: '#Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: '#Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: '#Child Router' }
    ]);

    this.router = router;
  }
}
