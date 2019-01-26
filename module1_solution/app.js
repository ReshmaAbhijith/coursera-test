(function () {

    'use strict';

    var app1 = angular.module("LunchCheck", []);

    app1.controller("LunchCheckController", LunchChecker);

    LunchChecker.$inject = ['$scope'];

    function LunchChecker($scope) {

        $scope.menu = "";
        $scope.messages = "";
        $scope.check = function () {

            if ($scope.menu == "") {
                $scope.messages = "Please enter data first!";
            } else {
                /* var menuList = $scope.menu.replace(/[, ]+/g, " ").trim().split(" "); */
                var menuList = $scope.menu.split(",");
                if (menuList.length <= 3)
                    $scope.messages = "Enjoy";
                else if (menuList.length > 3)
                    $scope.messages = "Too much";
            }



        };

    }





})();