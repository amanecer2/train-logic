(function () {
    angular.module('webnews')
        .config(function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('todo', {
                            url: '/todo',
                            template: '<wn-todos></wn-todos>'
                        }
                    )
                $urlRouterProvider.otherwise('/todo');
            }
        );
})();