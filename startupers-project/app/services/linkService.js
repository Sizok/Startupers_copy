(function () {
    'use strict';

    function linkService() {
        var factory = {};

        factory.linksUrl = {
            imgUrl: 'http://startupers.blob.core.windows.net'
        };
        

        return factory;
    }

    linkService.$inject = [];
    angular.module('link.Service', []).factory('linkService', linkService);
})();