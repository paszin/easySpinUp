'use strict';

angular.module('easySpinUpApp')
  .controller('ProjectsCtrl', function ($scope, $http, $state, socket, Auth) {
    $http.get('/api/projects', {
    params: { username: Auth.getCurrentUser().name }
}).success(function(projects) {
      $scope.projects = projects;
      socket.syncUpdates('projects', $scope.projects);
        
    $scope.junctionPath = "/Volume1/data";
        
        $scope.goto = function (project_id) {
            $state.go('project', {id: project_id});
        }
    });
  });
