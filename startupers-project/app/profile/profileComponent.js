(function () {
    function profileCtrl(localStorageService, appConfig) {
        var ctrl = this;
        ctrl.appConfig = appConfig;
        ctrl.currentUser = localStorageService.get('currentUser');
        ctrl.currentUser = ctrl.currentUser.data
    };

    profileCtrl.$inject = ['localStorageService', 'appConfig'];
    angular.module('startupers')
        .component('profilePage', {
            templateUrl: '/app/profile/profilePage.html',
            controller: profileCtrl
        });
})();