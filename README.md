# angular-unit-testing
AngularJs 1.x Unit Testing demo

This repository was created as a demonstration for writing angularjs 1.x unit tests for the major components in an angular application:
Controllers, Services and Directives.

In this repository we have a functional sample application which utilizes a Controller and a Service to retrieve data from a web api.
It includes specs for both these components.

Additionally, there is a Directive and a corresponding spec which tests the directive's controller as well as the UI to ensure proper
operation of the directive.


## Setup:
`npm install`

## Running the app:
To run the application open two command prompts.  Run the following commands in each:

`npm run dataServer`

`npm run webServer`

## Running Tests:
This demo uses gulp as the task runner.  In order to kick off the tests run:

`gulp test`