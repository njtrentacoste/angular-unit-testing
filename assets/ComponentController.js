(function () {
	'use strict';

	angular
		.module('demo')
		.controller('ComponentController', ComponentController);

	ComponentController.$inject = [];
	
	function ComponentController() {
		var vm = this;
		vm.counter = 0;
		
		vm.increment = function () {
			if (vm.counter < vm.max) {
				vm.counter += 1;
			}
		};
	}
})();