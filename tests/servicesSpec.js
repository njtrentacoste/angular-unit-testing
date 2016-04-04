'use strict';

describe('Services', function () {
	describe('DemoService', function () {
		var mockDemoService, $httpBackend, $q;
		
		beforeEach(module('demo'));
		
		beforeEach(inject(function(DemoService, _$httpBackend_, _$q_) {
			mockDemoService = DemoService;
			$httpBackend = _$httpBackend_;
			$q = _$q_;
		}));
		
		// Forgot to mention this function.  It's a cleanup function for verification after each of the it() calls.
		//	It's this call that will generate an error if we don't $httpBackend.expect() any underlying network calls. 
		afterEach(function () {
			$httpBackend.verifyNoOutstandingExpectation();
     		$httpBackend.verifyNoOutstandingRequest();
		});
		
		it('should exist', function () {
			expect(mockDemoService).toBeDefined();
		});
		
		it('should contain a test method', function () {
			expect(mockDemoService.test).toBeDefined();
		});
		
		it('should contain a googleTest method', function () {
			expect(mockDemoService.googleTest).toBeDefined();
		});
		
		it('should return \'hello\' when calling test()', function () {
			var tmp = mockDemoService.test();
			expect(tmp).toEqual('hello');
		});
		
        // The call to googleTest() performs a GET:http://www.google.com.
		//	Using the $httpBackend we can test that this call occurs.
		//	Without these expect/when statements, we will get an error.
		//	Also, the flush is necessary as the $httpBackend is synchronous, we need to manually
		//	release the response.
		it('should make an http GET call to http://www.google.com', function () {
			$httpBackend.expect('GET', 'http://www.google.com');
			
			$httpBackend.when('GET', 'http://www.google.com').respond(200, 'made it');
			
			mockDemoService.googleTest();
			
			$httpBackend.flush();
		});
	});
});