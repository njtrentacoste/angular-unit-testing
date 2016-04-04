module.exports = function (config) {
	config.set({
		frameworks: ['jasmine'],
		reporters: ['spec', 'coverage'],
		browsers: ['PhantomJS'],
		files: [
            // note order
			'node_modules/jquery/dist/jquery.js',
			'node_modules/angular/angular.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'assets/app.js',
			'assets/*.js',
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