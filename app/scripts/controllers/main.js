'use strict';

/**
 * @ngdoc function
 * @name mhacksFirechatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mhacksFirechatApp
 */
angular.module('mhacksFirechatApp')
  .controller('MainCtrl', function ($scope, auth) {
    $scope.user = {
      email: auth.getCurrentUserEmail()
    }
  });
