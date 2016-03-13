import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = '銀これ！';
    config.map([
      { route: ['', 'home'], name:'home',      moduleId:'home',       nav: true,  title: 'ホーム' },
      { route: 'success',    name:'success',   moduleId:'success',    nav: false, title: 'やったぜ' },
      { route: 'character',  name:'character', moduleId: 'character', nav: true,  title: 'キャラ' },
      { route: 'character_summon', name:'character_summon', moduleId: 'character_summon', nav: false, title: 'character_summon' },
      { route: 'character_fuse',   name:'character_fuse',   moduleId: 'character_fuse',   nav: false, title: 'character_fuse' },
      { route: 'character_result', name:'character_result', moduleId: 'character_result', nav: false, title: 'character_result' },
      { route: 'character_result_ma', name:'character_result_ma', moduleId: 'character_result_ma', nav: false, title: 'character_result_ma' },
      { route: 'item',        name:'item',        moduleId:'item',        nav: true,  title: 'アイテム' },
      { route: 'item_equip',  name:'item_equip',  moduleId:'item_equip',  nav: false, title: 'item_equip' },
      { route: 'item_invest', name:'item_invest', moduleId:'item_invest', nav: false, title: 'item_invest' },
      { route: 'item_result', name:'item_result', moduleId:'item_result', nav: false, title: 'item_result' },
      { route: 'item_result_eq', name:'item_result_eq', moduleId:'item_result_eq', nav: false, title: 'item_result_eq' },
      { route: 'friend',      name:'friend',      moduleId:'friend',      nav: true,  title: 'フレンド' },
      { route: 'data',        name:'data',        moduleId:'data',        nav: true,  title: 'データ' },
      { route: 'setting',     name:'setting',     moduleId:'setting',     nav: true,  title: '設定' },
      //{ route: 'welcome',     name:'welcome', moduleId: 'welcome', nav: true, title: '#Welcome' },
      //{ route: 'users',       name:'users', moduleId: 'users', nav: true, title: '#Github Users' },
      //{ route: 'child-router',name:'child-router', moduleId:'child-router', nav: true, title: '#Child Router' }
    ]);

    this.router = router;
  }
}
