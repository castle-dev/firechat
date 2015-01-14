'use strict';

/**
 * @ngdoc function
 * @name mhacksFirechatApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the mhacksFirechatApp
 */
angular.module('mhacksFirechatApp')
  .controller('LoginCtrl', function ($scope, $location, auth) {
    $scope.submit = function () {
      $scope.errors = [];
      auth
      .login($scope.user)
      .then(function () { $location.path('/'); })
      .catch(function (err) { $scope.errors.push(err); });
    }
  });
