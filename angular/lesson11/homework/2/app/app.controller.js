(function() {
    'use strict';

angular
    .module('app')
    .controller('AppController', AppController);

function AppController() {
	var vm = this;
	var i = 0;

	vm.todos = [
		{'name':'test1','description':'bal bla bla','date':'21.08.2016','done':false},
		{'name':'test2','description':'bal bla bla','date':'21.03.2016','done':false}
	];

	vm.addTask = addTask;
	vm.showPopup = showPopup;
	vm.hidePopup = hidePopup;
	vm.viewPopup = false;
	vm.modify = modify;

	function addTask() {
		if(vm.name) {
			vm.todos.push({
				'name':vm.name,
				'description':vm.description,
				'date':vm.date,
				'done':vm.done
			});
			vm.name = '';
			vm.description = '';
			vm.date = '';
			vm.done = false;
		}
	};

	function showPopup(index) {
		vm.viewPopup = true;
		i = index;
		vm.newName = vm.todos[index].name;
		vm.newDescription = vm.todos[index].description;
		vm.newDate = vm.todos[index].date;
		vm.newDone = vm.todos[index].done;	
	};

	function modify() {

		vm.todos[i].name = vm.newName;
		vm.todos[i].description = vm.newDescription;
		vm.todos[i].date = vm.newDate;
		vm.todos[i].done = vm.newDone;

		hidePopup();
	}

	function hidePopup() {
		vm.viewPopup = false;
	};	

}
})();