angular.module('startupers', [
    'ngMessages',
    'ui.router',
    'infinite-scroll',
    'LocalStorageModule',
    'ui.bootstrap',
    'startupers.home',
    'startupers.feed',
    'login.Service'
    ])
    .config(['$locationProvider', '$urlRouterProvider', '$httpProvider', function ($locationProvider, $urlRouterProvider, $httpProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

        $urlRouterProvider.otherwise("/notfound");
    }])
//    .run(['$http', 'localStorageService', 'topMenuService', '$rootScope', function ($http, localStorageService, topMenuService, $rootScope) {

//        var currentUser = localStorageService.get('currentUser');
//        angular.extend(topMenuService, currentUser);
//        if (currentUser && new Date(currentUser.expires) > new Date()) {
//            $http.defaults.headers.common.Authorization = currentUser.token;
//        }

//        $rootScope.isAuthenticated = topMenuService.isAuthenticated();
//}])
