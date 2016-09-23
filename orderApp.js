var orderApp = angular.module("orderApp", []);
orderApp.controller("OrderItemsController", ['$scope',
	function($scope) {

	$scope.items = [
		{
			name: 'service1:',
			price: 300,
			active:true
		},{
			name: 'service2:',
			price: 700,
			active:false
		},{
			name: 'service3:',
			price: 10.00,
			active:false
		},{
			name: 'service4:',
			price: 100,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	$scope.total = function(){

		var total = 0;

		angular.forEach($scope.items, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}]);
