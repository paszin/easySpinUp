'use strict';

angular.module('easySpinUpApp')
    .controller('ProjectCtrl', function ($scope, $http, $stateParams, $mdDialog) {
        $scope.data = {
            selectedIndex: 0
        };


        $scope.labels = ["Success", "Untested", "Failed"];
        $scope.data = [30, 12, 5];

        $http({
            method: "POST",
            url: "https://54.153.6.84/occm/api/auth/login",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            contentType:"application/json",
            data:                 {
                "email": "mail@michael-weisz.de",
                "password": "3elysium19daWn"
            }
        }).success(function(resp) {console.log(resp)});
    
    
    $scope.getStuff = function() {
        $http.get("https://54.153.6.84:443/occm/api/vsa/volumes/VsaWorkingEnvironment-Wo9as61C/svm_EasySpinUp/volume1/snapshots");
    };





        $scope.next = function () {
            $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
        };
        $scope.previous = function () {
            $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
        };

        $scope.share = function () {
            //var useFullScreen = ($mdMedia("sm") || $mdMedia("xs"));
            $mdDialog.show({
                controller: DialogController,
                locals: {
                    project_id: $stateParams.id
                },
                templateUrl: "app/project/shareDialog.html",
                parent: angular.element(document.body),
                //targetEvent: ev,
                clickOutsideToClose: true
                    //fullscreen: useFullScreen
            });
        };

    });



function DialogController($scope, $mdDialog, $http, Auth, project_id) {
    $scope.project_id = project_id;
    $scope.users = [];
    $http.get("/api/users").success(function (users) {
        $scope.users = users;
        //socket.syncUpdates('users', $scope.users);
    });
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function () {
        $scope.users.forEach(function (user) {
            if (user.name === "Pascal") {
                $http({
                    method: "POST",
                    url: "api/projects",
                    data: {
                        name: "Machine Learning Annotater",
                        git: "https://github.com/sincraianul/generator-angular-material-fullstack.git",
                        junction_path: "/VolumeA_copy",
                        datasets: [],
                        user: {
                            name: user.name
                        }
                    }
                });
            }
        });

        $mdDialog.hide();
    };
}