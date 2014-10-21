angular.module('ProjectCtrl', []).controller('ProjectController', ['$scope', function($scope){
  $scope.projects = [{title:"Project Name 1", description:'This is Description', imageURL:'/assets/cherries.jpg'},
  {title:"Project Name 2", description:'This is Description. Lorem Ipsum', imageURL:'/assets/rustCar.jpg'}];
}]);
