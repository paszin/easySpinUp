'use strict';

angular.module('easySpinUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      });
  });