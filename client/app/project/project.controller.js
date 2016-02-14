'use strict';

angular.module('easySpinUpApp')
    .controller('ProjectCtrl', function ($scope, $http, $stateParams, $mdDialog) {
        $scope.data = {
            selectedIndex: 0
        };


        $scope.labels = ["Success", "Untested", "Failed"];
        $scope.data = [30, 12, 5];
    
    $http.get("/api/netapp").success(function (data) {console.log(data)});
    
    
    $scope.sampleData = [
 {
   "name": "hourly.2016-02-14_2005",
   "accessTime": 1455480300000,
   "label": null
 },
 {
   "name": "hourly.2016-02-14_1905",
   "accessTime": 1455476700000,
   "label": null
 },
 {
   "name": "hourly.2016-02-14_1805",
   "accessTime": 1455473100000,
   "label": null
 },
 {
   "name": "clone_volume3.0",
   "accessTime": 1455472479000,
   "label": null
 },
 {
   "name": "hourly.2016-02-14_1205",
   "accessTime": 1455451500000,
   "label": null
 },
 {
   "name": "clone_volume1_copy5.0",
   "accessTime": 1455451295000,
   "label": null
 },
 {
   "name": "clone_volume1_copy3.0",
   "accessTime": 1455450975000,
   "label": null
 },
 {
   "name": "clone_volume1_copy.0",
   "accessTime": 1455450681000,
   "label": null
 },
 {
   "name": "hourly.2016-02-14_1105",
   "accessTime": 1455447900000,
   "label": null
 },
 {
   "name": "hourly.2016-02-14_1005",
   "accessTime": 1455444300000,
   "label": null
 }
];
    
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
                        forked_from: Auth.getCurrentUser().name,
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