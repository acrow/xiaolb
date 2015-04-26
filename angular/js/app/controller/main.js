
angular.module('main',['resource', 'pascalprecht.translate'])

// 首页控制器
.controller('home', function($scope, $window, User, Service, $rootScope) {
	Service.all(
		{},
		{},
		function(result) {
			$scope.svcs = result;
		},
		function(err) {
			$window.alert("fail:" + err);
		}
	);
})

// 登陆控制器
.controller('login', function($scope, $window, User, $rootScope) {
	$scope.usr = {};
	$scope.onLogin = function() {
		User.login(
			{},
			{usr: $scope.usr},
			function(result) {
				$rootScope.usr = result;
				$window.alert("success:" + $rootScope.usr.name);
			},
			function(err) {
				$window.alert("fail:" + err);
			}
		);
	};

})

// 注册控制器
.controller('reg', function($scope, $window, User) {
	$scope.usr = {};
	$scope.onSave = function () {
		if ($scope.usr.password != $scope.usr.passwordRepeat) {
			$window.alert("err:密码不一致！");
			return;
		}
		User.create(
			{},
			{usr: $scope.usr},
			function(result) {
				$window.alert("success!");
			},
			function(err) {
				$window.alert("fail:" + err);
			}
		);
	};
})

// 异常拦截器
.factory('errInterceptor', function($q, $rootScope) {
	var interceptor = {
		responseError: function(rejection) {
			$rootScpoe.errors = rejection.data.error;
		}
	};
	return interceptor;
})
;

