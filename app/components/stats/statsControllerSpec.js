import statsController from './statsController'

describe('statsController', () => {
  'use strict';

  let sut;

  beforeEach(angular.mock.module(($controllerProvider) => {
    $controllerProvider.register('statsController', statsController);
  }));

  beforeEach(angular.mock.inject(($controller) => {
    sut = $controller('statsController');
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
