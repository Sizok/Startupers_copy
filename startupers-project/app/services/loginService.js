(function () {
    'use strict';
    function loginService($rootScope, $http, localStorageService) {
        var factory = {};

        var loginData = {};


        factory.isAuthenticated = function () {
            if (factory.token && new Date(factory.expires) > new Date()) {
                return true;
            } else {
                return false;
            }
        };


        factory.loginUser = function (user) {
            $http.post('https://startupers.us/oauth/token', $.param(user))
                .then(function (user) {
                    factory.userData = user;
                    var currentUser = {};
                    if (user && user.data['.expires'])
                        currentUser.expires = new Date(user.data['.expires']);

                    currentUser.token = factory.userData.data.token_type + ' ' + factory.userData.data.access_token;

                    localStorageService.set('currentUser', currentUser)

                    $http.defaults.headers.common.Authorization = currentUser.token;
                    $http.get('https://startupers.us/api/v1/user',
                        {
                        })
                            .then(function (user) {
                                currentUser.data = user.data;
                                localStorageService.set('currentUser', currentUser)
                                factory.loginData = user;
                                $rootScope.isAuthenticated = true;
                                factory.isAuthenticated();
                            });
                });
        };

        factory.logOut = function () {
            localStorageService.remove('currentUser');
            delete $http.defaults.headers.common.Authorization;
            delete loginService.token;
            $rootScope.isAuthenticated = false;
            factory.isAuthenticated();
        }

        return factory;
    }

    loginService.$inject = ['$rootScope', '$http', 'localStorageService'];
    angular.module('login.Service', []).factory('loginService', loginService);
})();