/**
 * Created by aliu_000 on 8/11/2015.
 */
"use strict";
var app = angular.module('csm.controllers', []);

app.controller('join.ctrl', ['$scope', '$http', function($scope, $http){
    $scope.first="";
    $scope.last="";
    $scope.id = "";
    $scope.skill = false;
}]);