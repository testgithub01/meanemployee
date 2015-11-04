angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider','$httpProvider', function($routeProvider,$locationProvider) {

	$routeProvider
  	.when('/', {
			
			templateUrl: 'registerEmployee.html',
			controller: 'regEmployeeCtrl'
	
		});

     $routeProvider
    .when('/listEmployee', {
      
      templateUrl: 'listEmployee.html',
      controller: 'listEmployeeCtrl'
  
    })
		;

	$locationProvider.html5Mode(true);

}]);
