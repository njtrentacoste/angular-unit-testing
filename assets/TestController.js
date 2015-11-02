(function () {
	'use strict';

	angular
		.module('demo')
		.controller('TestController', TestController);

	TestController.$inject = ['$scope'];
	
	function TestController($scope) {
		var vm = this;
		vm.counter = 0;
		
		vm.increment = function () {
			if (vm.counter < vm.max) {
				vm.counter += 1;
			}
		};
	}
})();