angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
  .when('/',{
             templateUrl:'views/cover.html',
             controller: 'MainController'
  
  }).when('/index.html',{
             templateUrl:'views/cover.html',
             controller: 'MainController'
  
  }).when('/home.html',{
			templateUrl:'views/home.html',
			controller: 'MainController'
      
	}).when('/connect.html',{
      templateUrl:'views/contact.html',
			controller: 'MainController'
  });

	$locationProvider.html5Mode(true);


}]);
