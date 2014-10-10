angular.module('FrameCtrl', []).controller('FrameController', function($scope, $location, $rootScope){

  $rootScope.aboutPage = $location.path()=='/about';
  $rootScope.connectPage = $location.path()=='/connect';
  $rootScope.$watch(function(){return $location.path();}, function(newValue, oldValue){
                             if(newValue!==oldValue){
                                                       $rootScope.aboutPage = $location.path()=='/about';
  $rootScope.connectPage = $location.path()=='/connect';
                             }
                             
  });

});
