(function() {
    'use strict';

angular
    .module('app')
    .controller('AppController', AppController);

function AppController() {
	var vm = this;

	vm.plus = plus;
	vm.minus = minus;
	vm.mul = mul;
	vm.division = division;

	function plus() {
		vm.result = vm.firstVal + vm.secondVal;
	}
	function minus() {
		vm.result = vm.firstVal - vm.secondVal;
	}
	function mul() {
		vm.result = vm.firstVal * vm.secondVal;
	}
	function division() {
		if (vm.secondVal != 0) {
			vm.result = vm.firstVal / vm.secondVal;			
		} else {
			alert('Invalid second value');
		};
	};
	

}
})();