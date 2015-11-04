angular.module('listEmployeeCtrl', []).controller('listEmployeeCtrl', function($scope,$http,$routeParams) {

    $scope.titulo ='List Employee ';
    $scope.employees = {};

	console.log('LIST EMPLOYEE ');	


	$scope.listEmployee = function() {
		
		$http.get('/employee').success(function(data) {
			$scope.employees = data;
         
         	console.log('list employees success');
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	
	};


});