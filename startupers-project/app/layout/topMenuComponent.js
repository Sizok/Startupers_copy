(function () {
    function menuCtrl(loginService, $http, $rootScope, localStorageService, $uibModal, curretUserService, appConfig) {
        var ctrl = this;

        ctrl.loginService = loginService;
        ctrl.curretUserService = curretUserService;
        ctrl.currentUser = curretUserService;
        ctrl.appConfig = appConfig;
        ctrl.rootScope = $rootScope;

        ctrl.userData = {
            grant_type: 'password'
        };

        ctrl.loginNewUser = function () {
            loginService.loginUser(ctrl.userData);
        }

        ctrl.logOut = function () {
            ctrl.loginService.logOut();
        }

        ctrl.opencomponentmodal = function () {
            var modalinstance = $uibModal.open({
                animation: true,
                component: 'addpostcomp',
            });
        };
        
    };
    menuCtrl.$inject = ['loginService', '$http', '$rootScope', 'localStorageService', '$uibModal', 'curretUserService', 'appConfig'];

    angular.module('startupers')
        .component('topMenu', {
            templateUrl: '/app/layout/topMenu.html',
            controller: menuCtrl
        });
})();