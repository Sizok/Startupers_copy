(function () {
    function chatCtrl() {
        var ctrl = this;
    };

    chatCtrl.$inject = [];

    angular.module('startupers')
        .component('chatPage', {
            templateUrl: '/app/chat/chatPage.html',
            controller: chatCtrl,
            bindings: {
                rooms: '<'
            }
        });
})();