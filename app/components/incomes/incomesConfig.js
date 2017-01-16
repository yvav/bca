import incomesComponent from './incomesComponent';

export default (() => {

  angular
    .module('budget.incomes', [])
    .component('incomes', incomesComponent);
})();
