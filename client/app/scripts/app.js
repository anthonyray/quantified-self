'use strict';

angular
  .module('quantifiedApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute','angles'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/sugar', {
        templateUrl: 'views/sugar.html',
        controller: 'MainCtrl'
      })
      .when('/feed',{
        templateUrl : 'views/'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('quantifiedApp').factory('sugarFactory', function($http) { 
  var factory = {};
            
  factory.getTodaySugar = function() {
    return $http.get('/api/sugar');
  };
            
  return factory;
});