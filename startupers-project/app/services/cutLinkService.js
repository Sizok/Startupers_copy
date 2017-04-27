(function () {
    function cutLinkService() {
        var factory = {};
        factory.cutLink = function (link) {
            link = link.split('');
            for (var i = 0; i < link.length; i++) {
                if(link[i] == '/' && link[i+1] == '/'){
                    var start = i + 2;
                }
                if (link[i] == '/' && link[i - 1] != '/' && link[i + 1] != '/') {
                    var end = i;
                    break;
                }
            }
            var sliceLenght = end - start;
            link = link.splice(start, sliceLenght).join('');
            return link;
            
        }
        return factory;
    }

    cutLinkService.$inject = [];
    angular.module('cutLink.Service', []).factory('cutLinkService', cutLinkService);
})();