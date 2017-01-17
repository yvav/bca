import './style.scss';
import './components/authorization/authorizationConfig.js';
import './components/expenses/expensesConfig.js';
import './components/incomes/incomesConfig.js';
import './components/stats/statsConfig.js';

export default (function () {
  angular
    .module('budget', [
      'ionic',
      'budget.authorization',
      'budget.expenses',
      'budget.incomes',
      'budget.stats'
      ])
    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    });
})();
