(function () {
    angular.module('startupers.feed', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('feed', {
                url: '/feeds?hashtag&lastOrHot',
                template: '<feed-page posts="$resolve.feeds"></feed-page>',
                data: {
                    pageTitle: 'Feeds'
                }
                //resolve: {
                //    feeds: ['getPostService', '$stateParams', function (getPostService, $stateParams) {
                //        var test = getPostService.getPost($stateParams, 0);
                //        return test;
                //    }],
                //}
            });
        }])

})();