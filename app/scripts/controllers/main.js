'use strict';

/**
 * @ngdoc function
 * @name mhacksFirechatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mhacksFirechatApp
 */
angular.module('mhacksFirechatApp')
  .controller('MainCtrl', function ($scope, $window, $firebase, auth) {
    var ref = new $window.Firebase('https://mhacks-firechat-765432.firebaseio.com/');
    var sync = $firebase(ref);
    $scope.messages = sync.$asArray();

    $scope.user = {
      email: auth.getCurrentUserEmail()
    };

    $scope.send = function () {
      $scope.messages.$add({
        email: $scope.user.email,
        text: $scope.newMessage
      });
      $scope.newMessage = '';
    }
  });
