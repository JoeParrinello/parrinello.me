angular.module('MainCtrl', []).controller('MainController', ['$rootScope','$scope','$location','$timeout', function($rootScope, $scope, $location, $timeout){

  $timeout(function(){
    $rootScope.on = true;
  },100);

  $scope.goToPage = function(link){
    window.open(link,'_newtab');
  };

}]);
