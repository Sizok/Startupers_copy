(function () {
    function menuCtrl(loginService, $http, $rootScope, localStorageService, $uibModal) {
        var ctrl = this;

        ctrl.loginservice = loginService;
        ctrl.currentuser = localStorageService.get('currentuser');
        
        ctrl.userdata = {
            grant_type: 'password'
        };

        ctrl.loginnewuser = function () {
            ctrl.loginservice.loginuser(ctrl.userdata);
        }

        ctrl.rootscope = $rootScope;

        ctrl.logout = function () {
            ctrl.loginservice.logout();
        }

        ctrl.opencomponentmodal = function () {
            var modalinstance = $uibModal.open({
                animation: true,
                component: 'addpostcomp',
            });
        };
        
    };
    menuCtrl.$inject = ['loginService', '$http', '$rootScope', 'localStorageService', '$uibModal'];

    angular.module('startupers')
        .component('topMenu', {
            templateUrl: '/app/layout/topMenu.html',
            controller: menuCtrl
        });
})();