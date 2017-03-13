angular.module("listaTelefonica").controller("detalhesContatoController",
  ($scope, $routeParams, contatosAPI) => DetalhesContatoController($scope, $routeParams, contatosAPI));

function DetalhesContatoController($scope, $routeParams, contatosAPI){
  let id = $routeParams.id;
  contatosAPI.getContato(id)
          .then(function(response){
              $scope.contato = response.data;
              console.log(response.data);
          });
}

