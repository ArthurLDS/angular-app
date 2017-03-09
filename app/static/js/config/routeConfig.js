angular.module("listaTelefonica").config(function ($routeProvider) {
  //$locationProvider.html5Mode(true);
  $routeProvider.when("/contatos", {
      templateUrl : 'view/contatos.html',
      controller: "listaTelefonicaController"
  });
});
