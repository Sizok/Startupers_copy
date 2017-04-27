angular.module('startupers', [
    'ngMessages',
    'ui.router',
    'infinite-scroll',
    'LocalStorageModule',
    'ui.bootstrap',
    'startupers.home',
    'startupers.feed',
    'startupers.profile',
    'startupers.chat',
    'login.Service',
    'feed.Service',
    'currentUser.Service',
    'cutLink.Service',
    'chat.Service'
    ])
    .constant('appConfig', {
        'urlStartupersBlob': 'http://startupers.blob.core.windows.net',
        'urlYoutubeBlob': 'https://www.youtube.com/embed/',
        'http': 'http://'
    })
    .config(['$locationProvider', '$urlRouterProvider', '$httpProvider', '$sceDelegateProvider', function ($locationProvider, $urlRouterProvider, $httpProvider, $sceDelegateProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

        $urlRouterProvider.otherwise("/notfound");

        $sceDelegateProvider.resourceUrlWhitelist([
                'self',
                'https://www.youtube.com/embed/**'
        ]);
    }])
    .run(['$http', 'localStorageService', 'loginService', '$rootScope', '$timeout', function ($http, localStorageService, loginService, $rootScope, $timeout) {

        var currentUser = localStorageService.get('currentUser');
        angular.extend(loginService, currentUser);
        if (currentUser && new Date(currentUser.expires) > new Date()) {
            $http.defaults.headers.common.Authorization = currentUser.token;
        }

        $rootScope.isAuthenticated = loginService.isAuthenticated();

    }])
