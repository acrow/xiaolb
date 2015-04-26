var xiaolbApp = angular.module('xiaolb', ['ngRoute', 'resource', 'pascalprecht.translate', 'main']);
// 路由设置
xiaolbApp.config(['$routeProvider', function ($routeProvider) {
					$routeProvider
					.when('/home', {
						templateUrl:'htm/main/home.html',
						controller: 'home'
					})
					.when('/reg', {
						templateUrl:'htm/main/reg.html',
						controller: 'reg'
					})
					.when('/login', {
						templateUrl:'htm/main/login.html',
						controller: 'login'
					})
					.otherwise({
				        redirectTo: '/home'
				    });
				}]);

// 异常拦截器
xiaolbApp.config(['$httpProvider', function ($httpProvider) {
					$httpProvider.interceptors.push('errInterceptor');
				}]);

// 翻译
xiaolbApp.config(['$translateProvider', function ($translateProvider) {
					$translateProvider.translations('en', english);
					$translateProvider.translations('zh', chinese);
					$translateProvider.translations('jp', japanese);
					$translateProvider.preferredLanguage('en');
				}]);

// 翻译默认设置为中文，追加监视器
xiaolbApp.run(['$rootScope', '$translate', function($rootScope, $translate) {
					if (!$rootScope.lang) {
						$rootScope.lang = 'zh';
					}
					$rootScope.$watch('lang', function() {
						$translate.use($rootScope.lang);
					});
				}]);
