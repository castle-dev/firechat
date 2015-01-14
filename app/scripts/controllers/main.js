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
    $scope.user = auth.getCurrentUser();

    $scope.send = function () {
      $scope.messages.$add({
        email: $scope.user.email,
        uid: $scope.user.id,
        text: $scope.newMessage
      });
      $scope.newMessage = '';
    }
  });
