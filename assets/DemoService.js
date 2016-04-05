(function () {
	'use strict';
	
	angular
		.module('demo')
		.factory('DemoService', DemoService);
		
	DemoService.$inject = ['$http', '$q'];
	
	function DemoService($http, $q) {
        var baseUrl = 'http://localhost:3000',
            endpoint = '/contacts';
        
		var test = function () {
			return 'hello';	
		};
		
		var googleTest = function() {
			return $http({
				method: 'GET',
				url: 'http://www.google.com'
			}).then(success, failure);
		};
        
        var getContacts = function() {
            return $http({
                method: 'GET',
                url: baseUrl + endpoint
            }).then(success, failure);
        };
        
        var getContact = function(contactId) {
            return $http({
                method: 'GET',
                url: baseUrl + endpoint + '/' + contactId
            }).then(success, failure);
        };
		
		return {
			test: test,
			googleTest: googleTest,
            getContacts: getContacts,
            getContact: getContact
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