angular.module("listaTelefonica").filter("ellipsis", function() {
  return function(input, size){
    size = size ? size : 3;
    if(input.length <= size) return input;
    let inputFormatado = input.substring(0, size) +  "...";
    return inputFormatado;
  };
});
