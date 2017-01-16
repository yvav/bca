module.exports = (function () {
  'use strict';

  const authorizationController = function () {
    const one = 1;
    const two = 2;
    
    return {
      one,
      two
    }  
  };
  
  angular
    .module('starter.authorization')
    .controller('authorizationController', authorizationController);
})();
