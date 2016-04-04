'use strict';

describe('Controllers', function () {
	describe('DemoController', function () {
		var demoController, $scope, mockDemoService,
            mockContacts = [
                {
                    "id": 1,
                    "firstName": "Keith",
                    "lastName": "Kogane",
                    "occupation": "Captain, Pilot",
                    "vehicle": "Black Lion"
                },
                {
                    "id": 2,
                    "firstName": "Lance",
                    "lastName": "McClain",
                    "occupation": "Pilot",
                    "vehicle": "Red Lion"
                },
                {
                    "id": 3,
                    "firstName": "Darrell \"Pidge\"",
                    "lastName": "Stoker",
                    "occupation": "Pilot",
                    "vehicle": "Green Lion"
                },
                {
                    "id": 4,
                    "firstName": "Allura",
                    "lastName": "",
                    "occupation": "Princess, Pilot",
                    "vehicle": "Blue Lion"
                },
                {
                    "id": 5,
                    "firstName": "Tsuyoshi \"Hunk\"",
                    "lastName": "Garett",
                    "occupation": "Pilot",
                    "vehicle": "Yellow Lion"
                }
            ];
		
		beforeEach(function() {
			module('demo');
			
			module(function ($provide) {
				$provide.factory('DemoService', function($q) {
					var test = jasmine.createSpy('test').and.callFake(function () {
						return $q.when();
					});
					
					var googleTest = jasmine.createSpy('googleTest').and.callFake(function () {
						return $q.when();
					});
                    
                    var getContacts = jasmine.createSpy('getContacts').and.callFake(function () {
                        return $q.when(mockContacts);
                    });
					
                    var getContact = jasmine.createSpy('getContact').and.callFake(function (id) {
                        var contact = {};
                        
                        for (var i = 0; i < mockContacts.length; i += 1) {
                            if (mockContacts[i].id === id) {
                                contact = mockContacts[i];
                                break;
                            }
                        }
                        return $q.when(contact);
                    });
                    
					return {
						test: test,
						googleTest: googleTest,
                        getContacts: getContacts,
                        getContact: getContact
					}
				});
			});
		});
		
		// angular.mock.inject
		beforeEach(inject(function ($controller, $rootScope, _DemoService_) {
			$scope = $rootScope.$new();
			mockDemoService = _DemoService_;
			demoController = $controller('DemoController', {
				'DemoService': mockDemoService,
				'$scope': $scope
			});
		}));
		
		it('should exist', function () {
			expect(demoController).toBeDefined();
		});
		
		it('should have greet defined', function () {
			expect(demoController.greet).toBeDefined();
		});
		
		it('should set greeting to Hello Nick!', function () {
			demoController.greetName = 'Nick';
			demoController.greet();
			expect(demoController.greeting).toEqual('Hello Nick!');
		});
		
		it('should call the test method on DemoService', function () {
			demoController.testing();
			expect(mockDemoService.test).toHaveBeenCalled();
		});
		
		// This test utilizes the mockDemoService created to ensure the correct
		//	method gets called on the service.
		it('should call through to DemoService.googleTest', function () {
			demoController.googleTest();
			expect(mockDemoService.googleTest).toHaveBeenCalled();
		});
        
        it('should return 5 contacts from DemoService.getContacts', function () {
            demoController.getContacts();
            $scope.$apply();
            
            expect(mockDemoService.getContacts).toHaveBeenCalled();
            expect(demoController.contacts).toBeDefined();
            expect(demoController.contacts.length).toEqual(5);
        });
        
        it('should return 1 contact from DemoService.getContact() and use the correct id', function () {
            demoController.getContact(3);
            $scope.$apply();
            expect(mockDemoService.getContact).toHaveBeenCalledWith(3);
            expect(demoController.selectedContact).toBeDefined();
            expect(demoController.selectedContact.firstName).toEqual("Darrell \"Pidge\"");
        });
	});
});