
var searchApp = angular.module("searchApp", []);

searchApp.controller('searchAppController', ['$scope',
	function($scope){
		console.log('check')

	// Request via AJAX

	$scope.items = [
		{
			url: '********',
			title: '****',
			image: '*****'
		},
		{
			url: '********',
			title: '****',
			image: '*****'
		},
		{
			url: '********',
			title: '*****',
			image: '*****'
		},
		{
			url: '********',
			title: '*****',
			image: '*****'
		},
		{
			url: '********',
			title: '*****',
			image: '*****'
		},
	];

}]);

searchApp.filter('searchFor', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});
