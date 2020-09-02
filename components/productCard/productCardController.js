app.controller('productCardController', function($scope, $element, $attrs){

	$ctrl = this;
	
	$scope.product = {};
	
	$ctrl.$onInit = () => {
		$scope.product = $ctrl.product;
	};

});