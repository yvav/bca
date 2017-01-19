const expensesRoutes = ($stateProvider) => {
  $stateProvider
    .state('expenses', {
        url: '/expenses',
        template: '<expenses></expenses>'
    });
};

export default expensesRoutes;
