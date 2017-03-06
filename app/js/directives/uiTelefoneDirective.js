angular.module("listaTelefonica").directive("uiTelefone", function(){
  return {
    require: "ngModel",
    link: function (scope, element, attrs, ctrl) {
      let _formatTelefone = function(telefone) {
        telefone = telefone.replace(/[^0-9]/g, "");
        if(telefone.length > 2){
          telefone = "(" + telefone.substring(0, 2) + ")" + telefone.substring(2,6) + "-" + telefone.substring(6);
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
