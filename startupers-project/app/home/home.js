(function () {
    angular.module('startupers.home', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                template: '<home-page></home-page>',
                data: {
                    pageTitle: 'Home'
                }
            });
        }])

})();