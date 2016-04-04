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
        vm.contacts = [];
		vm.selectedContact = null;
        
		vm.greet = function () {
			vm.greeting = vm.greetPrefix + ' ' + vm.greetName + '!';
		};
		
		vm.testing = function () {
			return DemoService.test(); 
		};
		
		vm.googleTest = function () {
			DemoService.googleTest().then(function () {
				vm.googleCalled = true;
			});
		};
        
        vm.getContacts = function () {
            DemoService.getContacts().then(function (data) {
                debugger;
                vm.contacts = data;
            });
        };
        
        vm.getContact = function (contactId) {
            DemoService.getContact(contactId).then(function (data) {
                vm.selectedContact = data; 
            });
        };
	}
})();