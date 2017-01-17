import expensesComponent from './expensesComponent';

export default (() => {

  angular
    .module('budget.expenses', [])
    .component('expenses', expensesComponent);
})();
