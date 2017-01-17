import template from './authorization.html';
import authorizationController from './authorizationController';

const authorizationComponent = {
  template,
  controller: authorizationController,
  controllerAs: 'authorizationCtrl'
};

export default authorizationComponent;
