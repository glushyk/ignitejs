(function() {
    'use strict';

angular
    .module('app')
    .controller('AppController', AppController);

function AppController() {
	var vm = this;

	vm.text = 'Hello';
	vm.change = change;

	function change() {
		var result = document.querySelector('.result');
		result.innerHTML = vm.text;
	}

}
})();