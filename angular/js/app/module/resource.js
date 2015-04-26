angular.module('resource', ['ngResource'])
			.config(['$resourceProvider','$httpProvider', function ($resourceProvider,$httpProvider) {
				// Don't strip trailing slashes from calculated URLs
			    //$resourceProvider.defaults.stripTrailingSlashes = false;

				/****************************************************************
				 * Fix IE8 ajax caching issue                                   *
				 ****************************************************************/
				// $httpProvider.defaults.headers.get = $httpProvider.defaults.headers.get || {};
				// $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

			}])
			.factory('User', ['$resource', function ($resource, appConfig) {
				return $resource(
									'data/user',
									null, 
									{
										'create' 	:	{ method : 'POST' },
										'update' 	:	{ method : 'PUT'  },
										'get' 		:	{ method : 'GET' , url : 'data/user/:id', params : { id : 0} },
										'login'		:	{ method : 'POST' , url : 'data/login' },
										'logout'	:   { method : 'GET' , url : 'data/user/logout' }
									}
								);


			}])
			.factory('Service', ['$resource', function ($resource, appConfig) {
				return $resource(
									'data/service',
									null, 
									{
										'all' 	:	{ method : 'GET' , isArray : true},
										'get' 	:	{ method : 'GET' , url : 'data/services/:id', params : { id : 0} }
									}
								);


			}]);