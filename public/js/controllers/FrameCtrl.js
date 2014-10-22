angular.module('FrameCtrl', []).controller('FrameController', ['$scope','$location','$rootScope', function($scope, $location, $rootScope){

  $rootScope.aboutPage = $location.path()=='/about';
  $rootScope.connectPage = $location.path()=='/connect';
  $rootScope.projectPage = $location.path()=='/projects';
  $rootScope.$watch(function(){return $location.path();}, function(newValue, oldValue){
                             if(newValue!==oldValue){
                                                       $rootScope.aboutPage = $location.path()=='/about';
                                                       $rootScope.connectPage = $location.path()=='/connect';
                                                       $rootScope.projectPage = $location.path()=='/projects';

                             }

  });
  $rootScope.on = false;

}]);
