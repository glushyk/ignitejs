(function() {
    'use strict';

angular
    .module('app')
    .controller('AppController', AppController);

function AppController() {
	var vm = this;
	vm.items = [{'text':'Text1'},{'text':'Text5'},{'text':'Text5'}];
	for(var i = 0; i < 10; i++) {
		vm.items.push({'text':'Text' + i});
	}

	vm.searchVal = '';
	vm.searchValue = '';
	vm.search = search;
	vm.getFilter = getFilter;

	function search() {
		vm.searchValue = vm.searchVal;
	}

	function getFilter(item) {
        if (item.text == vm.searchValue) {
            return item;
        } else if (vm.searchValue == '') {
        	return item;
        }
	}
}
})();