'use strict';

angular.module('easySpinUpApp')
  .controller('ProjectsCtrl', function ($scope, $http, $state, socket, Auth) {
    $http.get('/api/projects', {
    params: { username: Auth.getCurrentUser().name }
}).success(function(projects) {
      $scope.projects = projects;
      socket.syncUpdates('projects', $scope.projects);
        

    $scope.junctionPath = "/Volume1/data";
        $scope.labels = ["Success", "Untested", "Failed"];
        var bla = [[30, 12, 5],[80, 12, 5],[95, 0, 5]];
        $scope.data = function(index) {return bla[index]};   

        $scope.goto = function (project_id) {
            $state.go('project', {id: project_id});
        }
    });
  });
