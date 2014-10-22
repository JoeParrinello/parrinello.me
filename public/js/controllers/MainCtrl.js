angular.module('MainCtrl', []).controller('MainController', ['$scope','$location','$timeout', '$animate', function($scope, $location, $timeout, $animate){

  $scope.on = false;
  $timeout(function(){
    $scope.on = true;
  },100);

}]);
