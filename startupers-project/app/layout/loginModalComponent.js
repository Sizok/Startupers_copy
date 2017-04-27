(function () {
    function loginModalCtrl(loginService) {
        var ctrl = this;

        ctrl.loginService = loginService;

        ctrl.userData = {
            grant_type: 'password'
        };

        ctrl.loginNewUser = function (valid) {
            if(valid){
            loginService.loginUser(ctrl.userData);
            ctrl.close();
            }
        }

        ctrl.close = function () {
            ctrl.dismiss({ $value: 'cancel' });
        };
    }

    loginModalCtrl.$inject = ['loginService'];

    angular.module('startupers')
        .component('loginModalPage', {
            templateUrl: '/app/layout/views/loginModal.html',
            controller: loginModalCtrl,
            bindings: {
                close: '&',
                dismiss: '&'
            }
        });
})();