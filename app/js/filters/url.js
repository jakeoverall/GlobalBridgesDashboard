(function () {
	'use strict';
	angular.module('app.filters.url', [])
	.filter('hostnameFromUrl', function () {
		return function (str) {
			var url = document.createElement('a');

			url.href = str;

			return url.hostname;
		};
	});
}).call(this);