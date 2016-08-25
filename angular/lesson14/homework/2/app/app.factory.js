(function() {
    'use strict';

angular
    .module('app')
	.factory('postFactory', function () {
		return function ($http, data) {
			var prepareObj = angular.toJson(data);
			
			$http({
				method: 'POST',
				data: prepareObj,
				url: 'somefakeserver.com'
			});

			return prepareObj;
		};
	});

})();
