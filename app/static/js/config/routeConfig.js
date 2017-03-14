angular.module("listaTelefonica").config(function ($locationProvider, $routeProvider) {
  
  $routeProvider
    .when("/contacts", {
      templateUrl : 'view/contatos.html',
      controller: 'listaTelefonicaController',
      resolve: {
          contatos : function(contatosAPI){
            return contatosAPI.getContatos();
          }
      }
    })
    .when("/detalhesContato/:id", {
      templateUrl : 'view/detalhesContato.html'
      
    })
    .when("/error", {
        templateUrl : 'view/error.html'
    })
    .otherwise({
      redirectTo: '/'
    });
 
  $locationProvider.html5Mode(true);
  
});
