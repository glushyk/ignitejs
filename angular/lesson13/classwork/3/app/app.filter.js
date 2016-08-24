(function() {
    'use strict';

angular
    .module('app')
    .filter('skipItem', skipItem);

    function skipItem() {
    	return function(arr) {
    		for (var i = 0; i < arr.length; i++) {
    			if (arr[i].expiration < 10) {
    				arr = arr.splice(i,1);
    			}
    		}

    		return arr;
    	}
    }
})();