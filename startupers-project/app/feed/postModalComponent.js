(function () {
    function postModalCtrl(appConfig) {
        var ctrl = this;

        ctrl.appConfig = appConfig;
        ctrl.currentPostData = {};
        ctrl.$onInit = function () {
            ctrl.currentPostData = ctrl.resolve.post;
            console.log(ctrl.currentPostData)
        };


        ctrl.close = function () {
            ctrl.dismiss({ $value: 'cancel' });
        };
    }

    postModalCtrl.$inject = ['appConfig'];

    angular.module('startupers')
        .component('postModalPage', {
            templateUrl: '/app/feed/views/postModal.html',
            controller: postModalCtrl,
            bindings: {
                resolve: '<',
                close: '&',
                dismiss: '&'
            }
        });
})();