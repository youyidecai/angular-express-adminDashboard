require.config({
	paths: {
		angular: '/bower_components/angular/angular',
		jquery: '/bower_components/jquery/dist/jquery.min',
		twitter: '/bower_components/bootstrap/dist/bootstrap.min',
		uirouter: '/bower_components/angular-ui-router/release/angular-ui-router.min',
		app: 'app'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		jquery: {
			exports: 'jquery'
		},
		uirouter: {
			deps: ['angular'],
			exports: 'uirouter'
		}
	},
	urlArgs: "bust=" + (new Date()).getTime() //仅用于调试，环境中删除
});
define(['angular', 'jquery', 'uirouter', 'app'], 
		function(angular, app, permission) {
			'use strict';

			require(['angular', 'app'], function(angular, domReady, app) {
				angular.bootstrap(document, ['adminApp']);
			});
		});