(function(){

 'use strict';

 var app = angular.module("myFirstApp",[]);
 
 app.controller("myFirstController", function($scope){
     $scope.firstname = "Reshma";
     $scope.lastname = "Sivakumar";
     $scope.fullname = function(){
         return  $scope.firstname +" "+ $scope.lastname;
     };

 });



})();