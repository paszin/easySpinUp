'use strict';

angular.module('easySpinUpApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('project', {
        url: '/project/:id',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectCtrl'
      });
  });