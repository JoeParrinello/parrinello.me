angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
  .when('/',{
             templateUrl:'views/cover.html',
             controller: 'MainController'
  
  }).when('/about',{
			templateUrl:'views/home.html',
			controller: 'MainController'
      
	}).when('/connect',{
      templateUrl:'views/contact.html',
			controller: 'MainController'
      
  }).when('/projects',{
			templateUrl:'views/projects.html',
			controller: 'ProjectController'
      
	}).otherwise({
                redirectTo:'/' 
	});

	$locationProvider.html5Mode(true);


}]);
