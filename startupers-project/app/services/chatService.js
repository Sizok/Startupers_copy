(function () {
    function chatService($http) {
        var factory = {};
        var params = {};
        factory.getChatRooms = function () {
            return $http.get('https://startupers.azurewebsites.net/api/v1/chatroom', {})
                .then(function (result) {
                    debugger;
                    return result.data;
                })
        };
        return factory;

    }

    chatService.$inject = ['$http'];
    angular.module('chat.Service', []).factory('chatService', chatService);
})();