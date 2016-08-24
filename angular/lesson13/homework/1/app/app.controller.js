(function() {
    'use strict';

angular
    .module('app')
    .controller('AppController', AppController);

function AppController() {
	var vm = this;
	vm.classList = {'background': false,
					'border': false,
					'line': false};	


}
})();