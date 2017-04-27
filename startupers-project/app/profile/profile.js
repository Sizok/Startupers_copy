(function () {
    angular.module('startupers.profile', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('profile', {
                url: '/profile',
                template: '<profile-page></profile-page>',
                data: {
                    pageTitle: 'Profile'
                }
            });
        }])

})();