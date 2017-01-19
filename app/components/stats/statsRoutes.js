const statsRoutes = ($stateProvider) => {
  $stateProvider
    .state('stats', {
      url: '/stats',
      template: '<stats></stats>'
    });
};

export default statsRoutes;
