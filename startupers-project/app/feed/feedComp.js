(function () {
    function feedCtrl() {
        
    };

    feedCtrl.$inject = [];

    angular.module('startupers')
        .component('feedPage', {
            templateUrl: '/app/feed/feedPage.html',
            bindings: {
                posts: '<'
            },
            controller: feedCtrl
        });
})();