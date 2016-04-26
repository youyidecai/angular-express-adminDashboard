define(['angular', 'uirouter'],
	function(angular) {
		return angular
			.module("adminApp", ['ui.router']).
			config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
		    $stateProvider.
		      state('state1', {
		      	url: '/state1',
		        templateUrl: 'index'
		      }).
		      state('state2', {
		      	url: '/state2',
		        templateUrl: 'error'
		      })
		    /*$locationProvider.html5Mode(true);*/
		  }]);
	});