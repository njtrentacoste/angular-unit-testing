'use strict';

describe('Components', function () {
	var element, $scope, controller;
	
	beforeEach(module('demo'));
	// This module is created by the ng-html2js Karma preprocessor
	beforeEach(module('demo.templates'));
	
	beforeEach(inject(function($controller, $rootScope, $compile) {
		$scope = $rootScope.$new();
		element = angular.element('<demo-component max="5"></demo-component>');
		
		$compile(element)($scope);
		
		$scope.$digest();
		
		// retrieve the component's controller
		controller = element.controller('demoComponent');
	}));
	
	describe('DemoComponent', function () {
		it('should exist', function () {
			expect(element).toBeDefined();
		});
		
		it('should have counter initialized to 0', function() {
			expect(controller.counter).toEqual(0);
		});
		
		it('should have max counter initialized to 5', function() {
			expect(controller.max).toEqual(5);
		});
		
		it('should increment the counter after clicking the button', function() {
			element.find('button').triggerHandler('click');
			$scope.$digest();
			expect(controller.counter).toEqual(1);
		});
	});
});