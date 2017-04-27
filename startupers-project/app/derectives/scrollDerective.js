(function () {
    'use strict'

    function goTop() {
        return {
            restrict: 'C',
            link: function () {
                $("#up").click(function () {
                    $("body").animate({ "scrollTop": 0 }, "slow");
                })
            }
        }
    };

    function displayButtonForScroll() {
        return {
            restrict: 'C',
            link: function () {
                $(window).scroll(function () {
                    if ($(this).scrollTop() > 250) {
                        $('#up').addClass('display-button');
                    } else {
                        $('#up').removeClass('display-button');
                    }
                })
            }
        }
    }

    goTop.$inject = [];
    displayButtonForScroll.$inject = [];

    angular.module('startupers')
        .directive('goTop', goTop)
        .directive('displayButtonForScroll', displayButtonForScroll);
})();