angular.module("listaTelefonica").filter("namePerson", function(){
    return function(input) {
      let listaNomes = input.split(" ");
      let listaNomesFormatados = listaNomes.map(function(nome){
        if(/(da|de)/.test(nome)) return nome;
        return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
      });
      return listaNomesFormatados.join(" ");
    };
});
