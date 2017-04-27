(function () {
    angular.module('startupers.chat', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider.state('chat', {
                url: '/chat',
                template: '<chat-page rooms="$resolve.chatRooms"></chat-page>',
                data: {
                    pageTitle: 'Chat'
                },
                resolve: {
                    chatRooms: ['chatService', function (chatService) {
                        var rooms = chatService.getChatRooms();

                        return rooms;
                    }]
                }
            });
        }])

})();