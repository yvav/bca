import navigationComponent from './navigationComponent';

export default (() => {

  angular
    .module('budget.navigation', [])
    .component('navigation', navigationComponent);
})();
