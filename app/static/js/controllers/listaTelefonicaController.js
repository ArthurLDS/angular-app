angular.module("listaTelefonica").controller("listaTelefonicaController",

function ListaTelefonicaController($scope, $http, contatos, contatosAPI, config){
  $scope.contatos = contatos.data;
  $scope.operadoras = [];
  
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
    $http.post(config.baseUrl + "/deleteContato", contatosNaoSelecionados).then(function(response){
      $scope.contatos = contatosNaoSelecionados;
    },
    function(response){
      alert("Erro ao excluir contato.");
    });

  };
  $scope.editarContato = function(contato){
      //To-do: persistir o contato.
      $scope.contato = angular.copy(contato);
  };
  
  $scope.cancelarEdicao = function(){
    $scope.contato = {}; 
    $scope.contatoForm.$setPristine(true);
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
    $http.get(config.baseUrl + '/operadoras').then(function (response){
      $scope.operadoras = response.data;
    },
    function(response){
      alert("Erro ao carregar operadora.")
    });
  }
  
  carregarOperadoras();
});
