(function () {
    'use strict';
    function curretUserService(localStorageService) {
        var factory = {};

        factory.currentUser = {};

        factory.currentUser = localStorageService.get('currentUser');

        return factory;
    }

    curretUserService.$inject = ['localStorageService'];
    angular.module('currentUser.Service', []).factory('curretUserService', curretUserService);
})();