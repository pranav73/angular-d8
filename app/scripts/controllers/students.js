'use strict';

/**
 * @ngdoc function
 * @name angularStudentApp.controller:StudentsCtrl
 * @description
 * # StudentsCtrl
 * Controller of the angularStudentApp
 */
angular
.module('angularStudentApp')
  .controller('StudentsCtrl', function ($scope, $rootScope, $http) {
    $rootScope.activeNav = 'students';
    $scope.students = [];
    $http.get($rootScope.baseUrl + '/student?_format=json').success(function(result) {
      console.log(result);
      $scope.students = result;
    });
  });
