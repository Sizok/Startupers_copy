(function () {
    function feedCtrl($http, feedService, $stateParams, $uibModal, appConfig, cutLinkService) {
        var ctrl = this;
        ctrl.posts = [];
        ctrl.postService = feedService;
        ctrl.appConfig = appConfig;
        ctrl.cutLinkService = cutLinkService;
        ctrl.progress = false;
        ctrl.stateParams = $stateParams;

        ctrl.getNewPosts = function () {
            ctrl.progress = true;
            feedService.getPost($stateParams, ctrl.posts.length).then(function (result) {
                ctrl.progress = false;
                if (result) {
                    ctrl.posts = ctrl.posts.concat(result);
                }
            });
        }
        ctrl.openComponentModal = function (post) {
            var modalInstance = $uibModal.open({
                animation: true,
                component: 'postModalPage',
                resolve: {
                    post: function () {
                        return post;
                    }
                }
            });
        };
    };

    feedCtrl.$inject = ['$http', 'feedService', '$stateParams', '$uibModal', 'appConfig', 'cutLinkService'];

    angular.module('startupers')
        .component('feedPage', {
            templateUrl: '/app/feed/feedPage.html',
            bindings: {
                posts: '<',
                hashtags: '<'
            },
            controller: feedCtrl
        });
})();