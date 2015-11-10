module.exports = function (config) {
	config.set({
		frameworks: ['jasmine'],
		reporters: ['spec', 'coverage'],
		browsers: ['PhantomJS'],
		files: [
			'node_modules/jquery/dist/jquery.js',
			'node_modules/angular/angular.js',
			'node_modules/angular-route/angular-route.js',
			'node_modules/angular-bootstrap-npm/dist/angular-bootstrap.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'assets/app.js',
			'assets/DemoController.js',
			'assets/DemoService.js',
			'assets/ComponentController.js',
			'assets/DemoComponent.js',
			'assets/component.html',
			'tests/*.js'
		],
		preprocessors: {
			'assets/component.html': ['ng-html2js'],
			'assets/js/*.js': ['coverage']
		},
		ngHtml2JsPreprocessor: {
			moduleName: 'demo.templates'
		},
		coverageReporter: {
			type: 'text'
		}
	});
};