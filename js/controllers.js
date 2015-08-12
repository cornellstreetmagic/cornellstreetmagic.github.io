/**
 * Created by aliu_000 on 8/11/2015.
 */
"use strict";
var app = angular.module('csm.controllers', ['backand', 'ngCookies']);

app.config(function (BackandProvider) {
    BackandProvider.manageDefaultHeaders();
    BackandProvider.setAppName('csmwebsite');
    //BackandProvider.setSignUpToken('01204698-f20d-41c3-8ac4-165e13096a67');
    //BackandProvider.setAnonymousToken('9e79303f-7fef-4cb4-a63b-f68732effa71');
});


app.controller('join.ctrl', ['$scope', '$http', 'Backand', '$cookieStore', function($scope, $http, Backand, $cookieStore){
    $scope.first="";
    $scope.last="";
    $scope.id = "";
    $scope.skill = false;

    $scope.derpToken= "";

    $scope.signIn = function() {
        Backand.signin('cornellstreetmagic@gmail.com', 'passcsm', 'csmwebsite')
            .then(
            function (token) {
                //Do good for the world
                console.log(token);
                $scope.derpToken = token;
            },
            function (data, status, headers, config) {
                //handle error
                console.log(data);
            }
        );
    };

    $scope.add = function(){
      return $http({
         method: 'POST',
         url: Backand.getApiUrl() + '/1/objects/joinResults?returnObject=true',
         headers: {
           'Authorization': $scope.derpToken
         },
         data: {
             "first": $scope.first,
             "last": $scope.last,
             "cid": $scope.id,
             "skill": $scope.skill
         }
      });
    };

    $scope.signIn();
}]);
