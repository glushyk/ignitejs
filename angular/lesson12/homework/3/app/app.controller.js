(function() {
    'use strict';

angular
    .module('app')
    .controller('AppController', AppController);

function AppController() {
	var vm = this;
    
    vm.getResult = getResult;
    vm.result = 0;
    
    function getResult() {
        if (vm.questionOne == 0) vm.result++
        if (vm.questionTwo == 0) vm.result++
        if (vm.questionThree == 0) vm.result++
        if (vm.questionFour == 0) vm.result++
        if (vm.questionFive == 0) vm.result++
        vm.complite = 'done';
    }



}
})();