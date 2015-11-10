'use strict';

describe('Controllers', function () {
	describe('DemoController', function () {
		var mockDemoController, $scope, mockDemoService, $httpBackend;
		
		beforeEach(function() {
			module('demo');
			
			// module(function ($provide) {
			// 	$provide.factory('DemoService', function($q) {
			// 		var test = jasmine.createSpy('test').and.callFake(function () {
			// 			//return 'goodbye';
			// 			return $q.when();
			// 		});
			// 		
			// 		var googleTest = jasmine.createSpy('googleTest').and.callFake(function () {
			// 			return $q.when();
			// 		});
			// 		
			// 		return {
			// 			test: test,
			// 			googleTest: googleTest
			// 		}
			// 	});
			// });
		});
		
		// angular.mock.inject
		beforeEach(inject(function ($controller, $rootScope, _DemoService_, _$httpBackend_) {
			$scope = $rootScope.$new();
			mockDemoService = _DemoService_;
			$httpBackend = _$httpBackend_;
			mockDemoController = $controller('DemoController', {
				'DemoService': mockDemoService,
				'$scope': $scope
			});
		}));
		
		
		// Forgot to mention this function.  It's a cleanup function for verification after each of the it() calls.
		//	It's this call that will generate an error if we don't $httpBackend.expect() any underlying network calls. 
		afterEach(function () {
			$httpBackend.verifyNoOutstandingExpectation();
     		$httpBackend.verifyNoOutstandingRequest();
		});
		
		it('should exist', function () {
			expect(mockDemoController).toBeDefined();
		});
		
		it('should have greet defined', function () {
			expect(mockDemoController.greet).toBeDefined();
		});
		
		it('should set greeting to Hello Nick!', function () {
			mockDemoController.greetName = 'Nick';
			mockDemoController.greet();
			expect(mockDemoController.greeting).toEqual('Hello Nick!');
		});
		
		// This test utilizes the mockDemoService created to ensure the correct
		//	method gets called on the service.
		// it('should call through to DemoService.googleTest', function() {
		// 	mockDemoController.googleTest();
		// 	expect(mockDemoService.googleTest).toHaveBeenCalled();
		// });
		
		// The call to mockDemoController.googleTest() performs a GET:http://www.google.com.
		//	Using the $httpBackend we can test that this call occurs.
		//	Without these expect/when statements, we will get an error.
		//	Also, the flush is necessary as the $httpBackend is synchronous, we need to manually
		//	release the response.
		it('should make a web request to www.google.com', function() {
			$httpBackend.expect('GET', 'http://www.google.com');
			
			$httpBackend.when('GET', 'http://www.google.com').respond(200, 'made it');
			
			mockDemoController.googleTest();
			
			$httpBackend.flush();
		});
	});
});