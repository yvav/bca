import expensesController from './expensesController'

describe('expensesController', () => {
  'use strict';

  let sut;

  beforeEach(angular.mock.module(($controllerProvider) => {
    $controllerProvider.register('expensesController', expensesController);
  }));

  beforeEach(angular.mock.inject(($controller) => {
    sut = $controller('expensesController');
  }));

  describe('has to have properties', () => {
    it('one that to be 1', () => {
      expect(sut.one).toEqual(1);
    });

    it('two to that be 2', () => {
      expect(sut.two).toEqual(2);
    });
  });
});
