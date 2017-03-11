angular.module("listaTelefonica").config(function ($locationProvider, $routeProvider) {
  
  
  $routeProvider.when("/contacts", {
      templateUrl : 'view/contatos.html'
  })
  .otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
  
});
