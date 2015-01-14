'use strict';

/**
 * @ngdoc function
 * @name mhacksFirechatApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the mhacksFirechatApp
 */
angular.module('mhacksFirechatApp')
  .controller('SignupCtrl', function ($scope, $location, auth) {
    $scope.submit = function () {
      $scope.errors = [];
      auth
      .signup($scope.user)
      .then(function () { return auth.login($scope.user); })
      .then(function () { $location.path('/'); })
      .catch(function (err) { $scope.errors.push(err); });
    };
  });
