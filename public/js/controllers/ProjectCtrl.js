angular.module('ProjectCtrl', []).controller('ProjectController', ['$scope', function($scope){
  $scope.projects = [{title:"This Personal Website", description:'Backend in Node.js and ExpressJS, with a frontend written with AngularJS and Twitter Bootstrap, this was my first experiment using Angular in a personal projects. I\'ve been toying with Angular and CSS3 animations, which you can see on the Home Page and this projects page.', imageURL:'/assets/WebsiteClip.png', link:"https://github.com/Taevis662/parrinello.me"},
  {title:"Jimmy Bob's Car-a-palooza", description:"This stemmed from a project for my Introductions to Database Class, CS431. The design specification was for a simple POS unit for a car dealership to handle customer sales. My friend Trevor and I took it a bit farther, and decided to implement some extra technologies for practice. The front end is written as a single page application in AngularJS, where the backend is a Laravel setup, using MySQL database.", imageURL:'/assets/JimmyBob.png', link:'https://github.com/tsums/CarSalesProject'},
  {title:"JDistributedWork", description:'Programmed using Java Sockets, Threading, and File IO, this was an attempt to recreate a distributed work applications, like BOINC, onto multiple machines. The idea was to make a framework where the input would be a java class file that would have a slice of work to be done, and a method to call when all the slices were complete. Found a wierd bug where I would never be reported the n-1th thread, where n was the number of cores reported on the system.', imageURL:'/assets/JavaClip.png', link:"https://github.com/HardOrange/JDistributedWork"},
  {title:"Chaotic Clementine", description:"An SMS based event planning app built on Google app Engine. Collaborated with Trevor Summerfield and Matt Lavine.",imageURL:'/assets/AppEngineClip.jpg',  link:'https://github.com/HardOrange/ChaoticClementine'},
  {title:"CalculatePi", description:"A Java application that runs either with GUI or without to calculate the value of Pi using sums. This leverages concurrency in Java. This was one of the inspirations for JDistributedWork.", imageURL:'/assets/JavaClip.png', link:'https://github.com/Taevis662/CalculatePi'}];
  $scope.goToPage = function(project){
                    window.open(project.link,'_newtab');
  };


}]);
