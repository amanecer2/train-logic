(function () {
    angular.module('trainlogic')
        .config(function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('contacts', {
                            url: '/contacts',
                            template: '<tl-contacts></tl-contacts>'
                        }
                    )
                $urlRouterProvider.otherwise('/contacts');
            }
        );
})();