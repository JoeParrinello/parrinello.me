angular.module('MainCtrl', []).controller('MainController', ['$rootScope','$scope','$location','$timeout', '$animate', function($rootScope, $scope, $location, $timeout, $animate){

  $timeout(function(){
    $rootScope.on = true;
  },100);

}]);
