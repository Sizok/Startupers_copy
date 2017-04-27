(function () {
    angular.module('startupers.feed', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('feed', {
                url: '/feed?hashtag&lastOrHot',
                template: '<feed-page posts="$resolve.feeds" hashtags="$resolve.hashtags"></feed-page>',
                data: {
                    pageTitle: 'Feeds'
                },
                resolve: {
                    feeds: ['feedService', '$stateParams', function (feedService, $stateParams) {
                        var posts = feedService.getPost($stateParams, 0);
                        return posts;
                    }],
                    hashtags: ['feedService', function (feedService) {
                        var hashtags = feedService.getHashtags();
                        return hashtags;
                        
                    }]
                }
            });
        }])

})();