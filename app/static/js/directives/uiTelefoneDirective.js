angular.module("listaTelefonica").directive("uiTelefone", function(){
  return {
    require: "ngModel",
    link: function (scope, element, attrs, ctrl) {
      let _formatTelefone = function(telefone) {
        telefone = telefone.replace(/[^0-9]/g, "");
        if(telefone.length > 2){
          telefone = "(" + telefone.substring(0, 2) + ")" + telefone.substring(2);
        }
        if(telefone.length >= 12){
          let formatacaoComNonoDigito = telefone.length > 12 ? telefone.substring(4,9) + "-" + telefone.substring(9, 13) :
                                                               telefone.substring(4,8) + "-" + telefone.substring(8, 12);
          telefone = telefone.substring(0,4) + formatacaoComNonoDigito;
        }
        return telefone;
      }

      element.bind("keyup", function() {
        ctrl.$setViewValue(_formatTelefone(ctrl.$viewValue));
        ctrl.$render();
      })
    }
  };
});
