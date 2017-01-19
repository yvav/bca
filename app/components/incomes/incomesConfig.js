import incomesComponent from './incomesComponent';
import incomesRoutes from './incomesRoutes';

export default (() => {

  angular
    .module('budget.incomes', [])
    .component('incomes', incomesComponent)
    .config(incomesRoutes);
})();
