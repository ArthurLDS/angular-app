angular.module("listaTelefonica").factory("contatosAPI", function ($http, config){

  var _getContatos = function() {
    return $http.get(config.baseUrl + '/contatos');
  };

  var _saveContato = function(contato) {
    return $http.put(config.baseUrl + '/addContato', contato);
  };
  
  var _getContato = function(id) {
     return $http.get(config.baseUrl + '/contato/?id=' + id); 
  };

  return {
    getContatos : _getContatos,
    getContato  : _getContato,
    saveContato : _saveContato
  };
});
