(function() {
    'use strict';

angular
    .module('app')
    .controller('AppController', AppController);

function AppController() {
	var vm = this;

	vm.nameFormat = /^[A-Za-z]*$/;
	vm.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
	vm.phoneFormat = /^[0-9]{6}$/

	vm.post = post;
	vm.passClass = {'invalid':false};
	vm.comparePass = comparePass;

	function post() {
		alert('Юзер добавлен');
	}

	function comparePass() {
		if (vm.userPassword == vm.userPassword2) {
			vm.passClass.invalid = false;
		} else {
			vm.passClass.invalid = true;
		}
	}

}
})();