import authorizationController from './authorizationController'

describe('authorizationController', () => {
  'use strict';

  let sut;

  beforeEach(angular.mock.module(($controllerProvider) => {
    $controllerProvider.register('authorizationController', authorizationController);
  }));

  beforeEach(angular.mock.inject(($controller) => {
    sut = $controller('authorizationController');
  }));

  describe('has to have properties', () => {
    it('one that to be 1', () => {
      expect(sut.one).toEqual(1);
    });

    it('two to that be 2', () => {
      expect(sut.two).toEqual(2);
    });

    it('three to that be 3', () => {
      expect(sut.three).toEqual(3);
    });
  });
});
