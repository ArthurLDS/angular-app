angular.module("listaTelefonica").config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  //$locationProvider.html5Mode(true);
  $routeProvider.when("/contatos", {
      templateUrl : "view/contatos.html",
      controller: "listaTelefonicaController"
  });
}]);
