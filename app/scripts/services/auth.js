'use strict';

/**
 * @ngdoc service
 * @name mhacksFirechatApp.auth
 * @description
 * # auth
 * Factory in the mhacksFirechatApp.
 */
angular.module('mhacksFirechatApp')
  .factory('auth', function ($window, $q) {

    var ref = new $window.Firebase('https://mhacks-firechat-765432.firebaseio.com/');

    // Public API here
    return {
      signup: function (user) {
        var deferred = $q.defer();
        try {
          ref.createUser(user, function (err) {
            if (err) { deferred.reject(err); }
            else { deferred.resolve(); }
          });
        } catch (err) {
          deferred.reject(err.message);
        }
        return deferred.promise;
      },
      login: function (user) {
        var deferred = $q.defer();
        try {
          ref.authWithPassword(user, function (err, auth) {
            if (err) { deferred.reject(err); }
            else { deferred.resolve(auth) }
          })
        } catch (err) {
          deferred.reject(err.message);
        }
        return deferred.promise;
      },
      getCurrentUserEmail: function () {
        return ref.getAuth().password.email;
      }
    };
  });
