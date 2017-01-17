import statsComponent from './statsComponent';

export default (() => {

  angular
    .module('budget.stats', [])
    .component('stats', statsComponent);
})();
