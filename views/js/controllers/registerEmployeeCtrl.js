angular.module('registerEmployeeCtrl', []).controller('regEmployeeCtrl', function($scope,$http,$routeParams) {


 	$scope.newEmployee = {};
    
	$scope.employees = {};

	$scope.titulo ='Employee';

	console.log('REGISTER EMPLOYEE ');	

	// Función para registrar a una persona
	$scope.saveEmployee = function() {
		$http.post('/employee', $scope.newEmployee)
		.success(function(data) {
				$scope.newEmployee = {}; // Borramos los datos del formulario
			
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};



});