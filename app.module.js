var app = angular.module('liverpool', ['ngRoute']);

app.config(function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('mainController', function($scope){
	
});