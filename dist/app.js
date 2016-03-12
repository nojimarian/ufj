define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = '銀これ！';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'ホーム' },
                { route: 'character', name: 'character', moduleId: 'character', nav: true, title: 'キャラ' },
                { route: 'character_summon', name: 'character_summon', moduleId: 'character_summon', nav: false, title: 'character_summon' },
                { route: 'character_fuse', name: 'character_fuse', moduleId: 'character_fuse', nav: false, title: 'character_fuse' },
                { route: 'character_result', name: 'character_result', moduleId: 'character_result', nav: false, title: 'character_result' },
                { route: 'item', name: 'item', moduleId: 'item', nav: true, title: 'アイテム' },
                { route: 'item_equip', name: 'item_equip', moduleId: 'item_equip', nav: false, title: 'item_equip' },
                { route: 'item_invest', name: 'item_invest', moduleId: 'item_invest', nav: false, title: 'item_invest' },
                { route: 'item_result', name: 'item_result', moduleId: 'item_result', nav: false, title: 'item_result' },
                { route: 'friend', name: 'friend', moduleId: 'friend', nav: true, title: 'フレンド' },
                { route: 'data', name: 'data', moduleId: 'data', nav: true, title: 'データ' },
                { route: 'setting', name: 'setting', moduleId: 'setting', nav: true, title: '設定' },
                { route: 'welcome', name: 'welcome', moduleId: 'welcome', nav: true, title: '#Welcome' },
                { route: 'users', name: 'users', moduleId: 'users', nav: true, title: '#Github Users' },
                { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: '#Child Router' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=app.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVBO1FBQUE7UUF5QkEsQ0FBQztRQXRCQyw2QkFBZSxHQUFmLFVBQWdCLE1BQTJCLEVBQUUsTUFBYztZQUN6RCxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUN0QixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBQyxNQUFNLEVBQU8sUUFBUSxFQUFDLE1BQU0sRUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7Z0JBQ3pGLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRyxJQUFJLEVBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO2dCQUN6RixFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUMsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFO2dCQUMzSCxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBSSxJQUFJLEVBQUMsZ0JBQWdCLEVBQUksUUFBUSxFQUFFLGdCQUFnQixFQUFJLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFO2dCQUN6SCxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUMsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFO2dCQUMzSCxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVMsSUFBSSxFQUFDLE1BQU0sRUFBUyxRQUFRLEVBQUMsTUFBTSxFQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFFLE1BQU0sRUFBRTtnQkFDL0YsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFHLElBQUksRUFBQyxZQUFZLEVBQUcsUUFBUSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7Z0JBQ3JHLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFO2dCQUN0RyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtnQkFDdEcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFPLElBQUksRUFBQyxRQUFRLEVBQU8sUUFBUSxFQUFDLFFBQVEsRUFBTyxHQUFHLEVBQUUsSUFBSSxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUU7Z0JBQy9GLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBUyxJQUFJLEVBQUMsTUFBTSxFQUFTLFFBQVEsRUFBQyxNQUFNLEVBQVMsR0FBRyxFQUFFLElBQUksRUFBRyxLQUFLLEVBQUUsS0FBSyxFQUFFO2dCQUM5RixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQU0sSUFBSSxFQUFDLFNBQVMsRUFBTSxRQUFRLEVBQUMsU0FBUyxFQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFFLElBQUksRUFBRTtnQkFDN0YsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFNLElBQUksRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7Z0JBQzNGLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBUSxJQUFJLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFO2dCQUM1RixFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTthQUMxRyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBQ0gsVUFBQztJQUFELENBQUMsQUF6QkQsSUF5QkM7SUF6QlksV0FBRyxNQXlCZixDQUFBIn0=
