(function() {
    'use strict';

angular
    .module('app')
    .controller('AppController', AppController);

function AppController() {
	var vm = this;
	vm.todos = [
		{'name':'test1','description':'bal bla bla','date':'21.08.2016','done':false},
		{'name':'test2','description':'bal bla bla','date':'21.03.2016','done':false}
	];

	vm.addTask = addTask;

	function addTask() {
		if(vm.name) {
			vm.todos.push({
				'name':vm.name,
				'description':vm.description,
				'date':vm.date.toLocaleString("ua", {year: "numeric", month: "numeric", day: "numeric"}),
				'done':vm.done
			});
			vm.name = '';
			vm.description = '';
			vm.done = false;
		}
	}
	

}
})();