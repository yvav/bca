import template from './expenses.html';
import expensesController from './expensesController';

const expensesComponent = {
  template,
  controller: expensesController,
  controllerAs: 'expensesCtrl'
};

export default expensesComponent;
