(function () {
	'use strict';
	
	angular
		.module('demo')
		.directive('demoComponent', DemoComponent);
		
	function DemoComponent() {
		return {
			restrict: 'EA',
			templateUrl: 'assets/component.html',
			scope: {
				max: "="
			},
			controller: 'TestController',
			controllerAs: 'ctrl',
			bindToController: true	
		};
	}
})();