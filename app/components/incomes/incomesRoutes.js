const incomesRoutes = ($stateProvider) => {
  $stateProvider
    .state('incomes', {
      url: '/incomes',
      template: '<incomes></incomes>'
    });
};

export default incomesRoutes;
