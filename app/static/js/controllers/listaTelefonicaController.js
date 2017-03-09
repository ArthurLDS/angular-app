angular.module("listaTelefonica").controller("listaTelefonicaController",
  ($scope, $http, contatosAPI) => ListaTelefonicaController($scope, $http, contatosAPI));

function ListaTelefonicaController($scope, $http, contatosAPI){

  $scope.adicionar = function(contato){
    contatosAPI.saveContato(contato).then(function(response){
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
    contatosAPI.getContatos().then(function (response) {
      $scope.contatos = response.data;
    },
    function(response){
      alert("Erro ao carregar contatos.");
      $scope.errorContatos = "Erro ao carregar contatos.";
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
