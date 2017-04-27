(function () {
    'use strict';
    function loginService($rootScope, $http, localStorageService, $state, $timeout, curretUserService, $uibModal) {
        var factory = {};

        var loginData = {};


        factory.isAuthenticated = function () {
            if (factory.token && new Date(factory.expires) > new Date()) {
                $timeout(function () {
                    $state.go('feed');
                });
                return true;
            } else {
                $timeout(function () {
                    $state.go('home');
                });
                return false;  
            }
        };

        factory.loginUser = function (user) {
            return $http.post('https://startupers.us/oauth/token', $.param(user))
                .then(function (user) {
                    factory.userData = user;
                    var currentUser = {};
                    if (user && user.data['.expires'])
                        currentUser.expires = new Date(user.data['.expires']);

                    factory.expires = currentUser.expires;
                    factory.token = factory.userData.data.token_type;
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
                                curretUserService.currentUser = user;
                                $rootScope.isAuthenticated = factory.isAuthenticated();
                            });
                }, function(){
                    factory.openLoginPopup();
                });
        };

        factory.logOut = function () {
            localStorageService.remove('currentUser');
            delete $http.defaults.headers.common.Authorization;
            delete loginService.token;
            factory.token = null;
            factory.expires = null;
            $rootScope.isAuthenticated = factory.isAuthenticated();
            $timeout(function () {
                $state.go('home');
            });
        }

        factory.openLoginPopup = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                component: 'loginModalPage',
            });
        }

        return factory;
    }

    loginService.$inject = ['$rootScope', '$http', 'localStorageService', '$state', '$timeout', 'curretUserService', '$uibModal'];
    angular.module('login.Service', []).factory('loginService', loginService);
})();