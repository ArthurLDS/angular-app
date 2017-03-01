var app = angular.module("listaTelefonica", []);

app.controller("listaTelefonicaController", ($scope, $http) => ListaTelefonicaController($scope, $http));

function ListaTelefonicaController($scope, $http){
  /*$scope.operadoras = [
  {nome: "Oi", codigo: 14},
  {nome: "Vivo", codigo: 15},
  {nome: "Tim", codigo: 41},
  {nome: "Claro", codigo: 42}
];

$scope.contatos = [
{nome : "Arthur", telefone : 4434533, operadora: $scope.operadoras[0], data: new Date(2016, 10, 27)},
{nome : "Mara", telefone : 33453433, operadora: $scope.operadoras[2] , data: new Date()},
{nome : "Rafael", telefone : 3354453, operadora: $scope.operadoras[1], data: new Date()},
{nome : "Larri", telefone : 5654453, operadora: $scope.operadoras[1], data: new Date()}
];*/

//To do: corrigir método.
$scope.adicionar = function(contato){
  let contatoFake = {nome: "Arthur", telefone:"9999-8188", codigo: "51",data: "2016-11-27T02:00:00.000Z"};
  var req = {
    method: 'POST',
    url: 'http://localhost:8090/addContato',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    data: $.param(contatoFake),
  };
  $http(req).then(function(response){
    delete $scope.contato;
    $scope.contatoForm.$setPristine(true);
    carregarContatos();
  },
  function(response){
    alert("Erro ao cadastrar contato.");
  });
};

$scope.remover = function(contatos){
  $scope.contatos = contatos.filter(c => !c.selecionado);
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
