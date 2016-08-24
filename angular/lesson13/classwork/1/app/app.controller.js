(function() {
    'use strict';

angular
    .module('app')
    .controller('AppController', AppController);

function AppController() {
	var vm = this;
	vm.classList = {'red': true,
					'border': true};	
	vm.class = {};
	vm.getClass = getClass;
	vm.reset = reset;

	function getClass() {
		vm.class = vm.classList;
	}

	function reset() {
		vm.class = {};
	}

}
})();