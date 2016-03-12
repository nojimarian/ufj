define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = '銀これ！';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'home' },
                { route: 'character', name: 'character', moduleId: 'character', nav: true, title: 'character' },
                { route: 'item', name: 'item', moduleId: 'item', nav: true, title: 'item' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMiLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVBO1FBQUE7UUFnQkEsQ0FBQztRQWJDLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3pELE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBTyxRQUFRLEVBQUUsTUFBTSxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtnQkFDM0YsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLElBQUksRUFBRSxXQUFXLEVBQVMsUUFBUSxFQUFFLFdBQVcsRUFBUyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7Z0JBQ3JILEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO2dCQUM1RSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBTyxRQUFRLEVBQUUsU0FBUyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtnQkFDbEcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFVLElBQUksRUFBRSxPQUFPLEVBQVMsUUFBUSxFQUFFLE9BQU8sRUFBUyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUU7Z0JBQzdHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRyxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFO2FBQzlHLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFDSCxVQUFDO0lBQUQsQ0FBQyxBQWhCRCxJQWdCQztJQWhCWSxXQUFHLE1BZ0JmLENBQUEifQ==
