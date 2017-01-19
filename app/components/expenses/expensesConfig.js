import expensesComponent from './expensesComponent';
import expensesRoutes from './expensesRoutes';

export default (() => {

  angular
    .module('budget.expenses', [])
    .component('expenses', expensesComponent)
    .config(expensesRoutes);
})();
