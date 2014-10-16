angular.module('ProjectCtrl', []).controller('ProjectController', ['$scope', function($scope){
                              $scope.searchText="";

                              $scope.projects=[{title:"Project 1", description:"This is the description for Project 1", link:"www.google.com"},
                                                  {title:"Project 2", description:"This is the description for Project 2"}];

}]);
