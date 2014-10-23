angular.module('ProjectCtrl', []).controller('ProjectController', ['$scope', function($scope){
  $scope.projects = [{title:"This Personal Website", description:'Backend in Node.js and ExpressJS, with a frontend written with AngularJS and Twitter Bootstrap, this was my first experiment using Angular in a personal projects. I\'ve been toying with Angular and CSS3 animations, which you can see on the Home Page and this projecs page.', imageURL:'/assets/WebsiteClip.png', link:"https://github.com/Taevis662/parrinello.me"},
  {title:"JDistributedWork", description:'Programmed using Java Sockets, Threading, and File IO, this was an attempt to recreate a distributed work applications, like BOINC, onto multiple machines. The idea was to make a framework where the input would be a java class file that would have a slice of work to be done, and a method to call when all the slices were complete. Found a wierd bug where I would never be reported the n-1th thread, where n was the number of cores reported on the system.', imageURL:'/assets/JavaClip.png', link:"https://github.com/HardOrange/JDistributedWork"}];
  $scope.goToPage = function(project){
                    window.open(project.link,'_newtab');
  };


}]);
