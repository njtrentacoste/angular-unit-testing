(function () {
	'use strict';
	
	angular
		.module('demo')
		.controller('DemoController', DemoController);
		
	DemoController.$inject = ['DemoService'];
	
	function DemoController(DemoService) {
		var vm = this;
		
		vm.greetPrefix = "Hello";
		vm.greeting = '';
		vm.greetName = '';
		vm.googleCalled = false;
		
		vm.greet = function () {
			vm.greeting = vm.greetPrefix + ' ' + vm.greetName + '!';
		};
		
		vm.googleTest = function () {
			DemoService.googleTest().then(function () {
				vm.googleCalled = true;
			});
		};
	}
})();