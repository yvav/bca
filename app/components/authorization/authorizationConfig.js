import authorizationComponent from './authorizationComponent';

export default (() => {

  angular
    .module('budget.authorization', [])
    .component('authorization', authorizationComponent);
})();
