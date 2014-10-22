angular.module('ProjectCtrl', []).controller('ProjectController', ['$scope', function($scope){
  $scope.projects = [{title:"Project Name 1", description:'This is Description', imageURL:'/assets/WebsiteClip.png'},
  {title:"Project Name 2", description:'This is Description. Lorem Ipsum', imageURL:'/assets/JavaClip.png'}];


}]);
