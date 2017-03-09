angular.module("listaTelefonica").directive("uiAlert", function(){
    return {
      templateUrl: "view/alert.html",
      restrict: "E",
      scope: {
        alertTitle : "@title",
        alertMessage : "=message"
      }
    };
});
