import statsComponent from './statsComponent';
import statsRoutes from './statsRoutes';

export default (() => {

  angular
    .module('budget.stats', [])
    .component('stats', statsComponent)
    .config(statsRoutes);
})();
