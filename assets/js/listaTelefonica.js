var app = angular.module("listaTelefonica", []);

app.controller("listaTelefonicaController", $scope => ListaTelefonicaController($scope));

function ListaTelefonicaController($scope){
  $scope.operadoras = [
    {nome: "Oi", codigo: 14},
    {nome: "Vivo", codigo: 15},
    {nome: "Tim", codigo: 41},
    {nome: "Claro", codigo: 42}
  ];

  $scope.contatos = [
    {nome : "Arthur", telefone : 4434533, operadora: $scope.operadoras[0]},
    {nome : "Mara", telefone : 33453433, operadora: $scope.operadoras[2]},
    {nome : "Rafael", telefone : 3354453, operadora: $scope.operadoras[1]}
  ];

  $scope.adicionar = function(contato){
    $scope.contatos.push(contato);
    delete $scope.contato;
    $scope.contatoForm.$setPristine(true);
  }

  $scope.remover = function(contatos){
    $scope.contatos = contatos.filter(c => !c.selecionado);
  }

  $scope.isContatoSelecionado = function(contatos){
    return contatos.some(c => c.selecionado);
  }
}