(function () {
    function feedService($http, $stateParams, cutLinkService) {
        var factory = {};
        var params = {};
        factory.getPost = function (stateParams, skip) {
            var params = {};
            if (stateParams.hashtag)
                params.hashtag = stateParams.hashtag;
            if (stateParams.lastOrHot)
                params.lastOrHot = stateParams.lastOrHot;
            params.skip = skip ? skip : 0;

            return $http.get('https://startupers.us/api/v1/feed',
        {
            params: params
        }).then(function (result) {
            var data = result.data;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].link) {
                        data[i].smallLink = cutLinkService.cutLink(data[i].link)
                    }
                    
                }
                console.log(data);
                return data;

        })
        };

        factory.getHashtags = function () {
            return $http.get('https://startupers.us/api/v1/followinghashtag', {
            }).then(function (result) {
                
                return result.data;
            })
        }
        return factory;
    }

    feedService.$inject = ['$http', '$stateParams', 'cutLinkService'];
    angular.module('feed.Service', []).factory('feedService', feedService);
})();