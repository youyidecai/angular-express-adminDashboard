define(['angular', 'ui-router'],
	function(angular) {
		return angular
			.module("adminApp", ['ui-router']).
			config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		    $stateProvider.
		      state('state1', {
		      	url: '/state1',
		        templateUrl: 'index'
		      }).
		      when('state2', {
		      	url: '/state2',
		        templateUrl: 'error'
		      }).
		    $locationProvider.html5Mode(true);
		  }]);
	});