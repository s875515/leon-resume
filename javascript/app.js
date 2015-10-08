// var myApp = angular.module('myApp',['br.fullpage']);

var myApp = angular.module('myApp', ['ngRoute', 'br.fullpage'], function($routeProvider) {
	$routeProvider.when('/home', {
		controller: 'homeCtrl',
	  templateUrl: 'views/home.html'
	}).when('/website' , {
		templateUrl: 'views/website.html'
	}).otherwise({
	  redirectTo: '/home'
	});
});
