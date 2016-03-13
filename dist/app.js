define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = '銀これ！';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'ホーム' },
                { route: 'success', name: 'success', moduleId: 'success', nav: false, title: 'やったぜ' },
                { route: 'character', name: 'character', moduleId: 'character', nav: true, title: 'キャラ' },
                { route: 'character_summon', name: 'character_summon', moduleId: 'character_summon', nav: false, title: 'character_summon' },
                { route: 'character_fuse', name: 'character_fuse', moduleId: 'character_fuse', nav: false, title: 'character_fuse' },
                { route: 'character_result', name: 'character_result', moduleId: 'character_result', nav: false, title: 'character_result' },
                { route: 'character_result_ma', name: 'character_result_ma', moduleId: 'character_result_ma', nav: false, title: 'character_result_ma' },
                { route: 'item', name: 'item', moduleId: 'item', nav: true, title: 'アイテム' },
                { route: 'item_equip', name: 'item_equip', moduleId: 'item_equip', nav: false, title: 'item_equip' },
                { route: 'item_invest', name: 'item_invest', moduleId: 'item_invest', nav: false, title: 'item_invest' },
                { route: 'item_result', name: 'item_result', moduleId: 'item_result', nav: false, title: 'item_result' },
                { route: 'item_result_eq', name: 'item_result_eq', moduleId: 'item_result_eq', nav: false, title: 'item_result_eq' },
                { route: 'friend', name: 'friend', moduleId: 'friend', nav: true, title: 'フレンド' },
                { route: 'data', name: 'data', moduleId: 'data', nav: true, title: 'データ' },
                { route: 'setting', name: 'setting', moduleId: 'setting', nav: true, title: '設定' },
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=app.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVBO1FBQUE7UUE0QkEsQ0FBQztRQXpCQyw2QkFBZSxHQUFmLFVBQWdCLE1BQTJCLEVBQUUsTUFBYztZQUN6RCxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUN0QixNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBQyxNQUFNLEVBQU8sUUFBUSxFQUFDLE1BQU0sRUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFHLEtBQUssRUFBRSxLQUFLLEVBQUU7Z0JBQzFGLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBSyxJQUFJLEVBQUMsU0FBUyxFQUFJLFFBQVEsRUFBQyxTQUFTLEVBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO2dCQUMzRixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUcsSUFBSSxFQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFFLEtBQUssRUFBRTtnQkFDMUYsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFDLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRTtnQkFDM0gsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUksSUFBSSxFQUFDLGdCQUFnQixFQUFJLFFBQVEsRUFBRSxnQkFBZ0IsRUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRTtnQkFDekgsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFDLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRTtnQkFDM0gsRUFBRSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFDLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRTtnQkFDdkksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFTLElBQUksRUFBQyxNQUFNLEVBQVMsUUFBUSxFQUFDLE1BQU0sRUFBUyxHQUFHLEVBQUUsSUFBSSxFQUFHLEtBQUssRUFBRSxNQUFNLEVBQUU7Z0JBQy9GLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRyxJQUFJLEVBQUMsWUFBWSxFQUFHLFFBQVEsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO2dCQUNyRyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtnQkFDdEcsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7Z0JBQ3RHLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBQyxnQkFBZ0IsRUFBRSxRQUFRLEVBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQ2xILEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBTyxJQUFJLEVBQUMsUUFBUSxFQUFPLFFBQVEsRUFBQyxRQUFRLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRyxLQUFLLEVBQUUsTUFBTSxFQUFFO2dCQUMvRixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVMsSUFBSSxFQUFDLE1BQU0sRUFBUyxRQUFRLEVBQUMsTUFBTSxFQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUcsS0FBSyxFQUFFLEtBQUssRUFBRTtnQkFDOUYsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFNLElBQUksRUFBQyxTQUFTLEVBQU0sUUFBUSxFQUFDLFNBQVMsRUFBTSxHQUFHLEVBQUUsSUFBSSxFQUFHLEtBQUssRUFBRSxJQUFJLEVBQUU7YUFJOUYsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUNILFVBQUM7SUFBRCxDQUFDLEFBNUJELElBNEJDO0lBNUJZLFdBQUcsTUE0QmYsQ0FBQSJ9
