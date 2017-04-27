(function () {
    'use strict'

    function hideImage() {
        return {
            restrict: 'C',
            link: function () {
                $('.play-button').click(function () {
                    var id = this.id;
                    var itemId = '#' + id;
                    $(itemId).css('display', 'none');
                    $(itemId + '.play-button').css('display', 'none');
                })
            }
        }
    };


    hideImage.$inject = [];

    angular.module('startupers')
        .directive('hideImage', hideImage);
})();