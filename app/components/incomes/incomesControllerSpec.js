import incomesController from './incomesController'

describe('incomesController', () => {
  'use strict';

  let sut;

  beforeEach(angular.mock.module(($controllerProvider) => {
    $controllerProvider.register('incomesController', incomesController);
  }));

  beforeEach(angular.mock.inject(($controller) => {
    sut = $controller('incomesController');
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
