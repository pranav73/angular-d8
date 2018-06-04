'use strict';

/**
 * @ngdoc overview
 * @name angularStudentApp
 * @description
 * # angularStudentApp
 *
 * Main module of the application.
 */
angular
  .module('angularStudentApp', [
    'ngCookies',
    'ngRoute',
  ])
  .run(function($rootScope) {
    $rootScope.baseUrl = "http://headless-angular.local/";
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/student', {
        templateUrl: 'views/students.html',
        controller: 'StudentsCtrl',
        controllerAs: 'student'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
