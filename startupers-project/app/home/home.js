(function () {
    angular.module('startupers.home', [])
        .config(['$stateProvider', function ($stateProvider, loginService) {
            $stateProvider.state('home', {
                url: '/',
                template: '<home-page></home-page>',
                data: {
                    pageTitle: 'Home'
                }
            });
        }])

})();