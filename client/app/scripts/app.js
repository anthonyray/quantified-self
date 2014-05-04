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
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'MainCtrl'
      })
      .when('/explore', {
        templateUrl : 'views/explore.html',
        controller : 'MainCtrl'
      }).
      when('/feed', {
        templateUrl : 'views/feed.html',
        controller : 'MainCtrl'
      }).
      when('/sugar', {
        templateUrl : 'views/sugar.html',
        controller: 'MainCtrl'
      }).
      when('/', {
        templateUrl : 'views/main.html',
        controller : 'MainCtrl'
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