'use strict';

describe('Components', function () {
	var element, $scope, controller;
	
	beforeEach(module('demo'));
	// This module is created by the ng-html2js Karma preprocessor
	beforeEach(module('demo.templates'));
	
	beforeEach(inject(function($controller, $rootScope, $compile) {
		// create new scope for the component
		$scope = $rootScope.$new();
		// get a reference to the custom component
		element = angular.element('<demo-component max="5"></demo-component>');
		
		// process the directive
		$compile(element)($scope);
		
		// force angular to update
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
		
		it('should not show the max value error on load', function () {
			var errorElem = element.find('#maxValueError');
			expect(errorElem.length).toEqual(0);
		});
		
		it('should show the max value reached markup after reaching the max counter value', function() {
			// simulate 5 button clicks
			element.find('button').triggerHandler('click');
			element.find('button').triggerHandler('click');
			element.find('button').triggerHandler('click');
			element.find('button').triggerHandler('click');
			element.find('button').triggerHandler('click');
			
			expect(controller.counter).toEqual(5);
			
			var errorElem = element.find('#maxValueError');
			expect(errorElem.length).toEqual(1);
			expect(errorElem.text()).toEqual('Counter max reached!');
		});
	});
});