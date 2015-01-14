'use strict';

/**
 * @ngdoc service
 * @name mhacksFirechatApp.auth
 * @description
 * # auth
 * Factory in the mhacksFirechatApp.
 */
angular.module('mhacksFirechatApp')
  .factory('auth', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
