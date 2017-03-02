var app = angular.module("listaTelefonica", []);

app.controller("listaTelefonicaController", ($scope, $http) => ListaTelefonicaController($scope, $http));

function ListaTelefonicaController($scope, $http){

  $scope.adicionar = function(contato){
    contato.data = new Date();
    $http.put('http://localhost:8090/addContato', contato).then(function(response){
      delete $scope.contato;
      $scope.contatoForm.$setPristine(true);
      carregarContatos();
    },
    function(response){
      alert("Erro ao cadastrar contato.");
    });
  };

  $scope.remover = function(contatos){
    let contatosNaoSelecionados = contatos.filter(c => !c.selecionado);
    $http.post("http://localhost:8090/deleteContato", contatosNaoSelecionados).then(function(response){
      $scope.contatos = contatosNaoSelecionados;
    },
    function(response){
      alert("Erro ao excluir contato.");
    });

  };

  $scope.isContatoSelecionado = function(contatos){
    return contatos.some(c => c.selecionado);
  };

  $scope.ordernarPor = function(campo){
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  let carregarContatos = function(){
    $http.get('http://localhost:8090/contatos').then(function (response) {
      $scope.contatos = response.data;
    },
    function(response){
      alert("Erro ao carregar contatos.");
    });
  }

  let carregarOperadoras = function(){
    $http.get('http://localhost:8090/operadoras').then(function (response){
      $scope.operadoras = response.data;
    },
    function(response){
      alert("Erro ao carregar operadora.")
    });
  }

  carregarContatos();
  carregarOperadoras();
}
