define(['app'], function(app) {
	return app.run(['$rootScope', '$state', '$stateParams',
		function($rootScope, $state, $stateParams) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		}])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider'], 
		function($stateProvider, $urlRouterProvider, $locationProvider) {
			$urlRouterProvider.otherwise('app');
			$stateProvider.
			    state('app', {
			    	url: '/index',
			    	templateUrl: "error"
			    })
		});
});