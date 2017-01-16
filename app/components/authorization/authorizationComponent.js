module.exports = (function () {
  'use strict';

  let template = require('./authorization.html');

  const authorizationComponent = {
    template: template,
    controller: 'authorizationController',
    controllerAs: 'authorizationCtrl'
  };

  angular
    .module('starter.authorization')
    .component('authorization', authorizationComponent);
})();
