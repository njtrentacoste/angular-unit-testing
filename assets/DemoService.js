(function () {
	'use strict';
	
	angular
		.module('demo')
		.factory('DemoService', DemoService);
		
	DemoService.$inject = ['$http', '$q'];
	
	function DemoService($http, $q) {
		var test = function () {
			return 'hello';	
		};
		
		var googleTest = function() {
			return $http({
				method: 'GET',
				url: 'http://www.google.com'
			}).then(success, failure);
		};
		
		return {
			test: test,
			googleTest: googleTest
		};
		
		function success(resp) {
			return resp.data;
		}

		function failure(resp) {
			if (resp.data) {
				return $q.reject(resp.data);
			}
			else {
				return $q.reject('Error occurred.')
			}
		}
	}
})();