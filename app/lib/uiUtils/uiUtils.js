angular.module("uiUtils", []);

angular.module("uiUtils").directive("uiAccordions", function(){
  return {
    controller: function($scope, $element, $attrs){
      let accordions = [];

      this.registerAccordion = function (scope) {
        accordions.push(scope);
      }
      this.closeAll = function() {
        accordions.forEach(a => a.isOpened = false);
      }
    }
  }
});

angular.module("uiUtils").directive("uiAccordion", function(){
  return{
      restrict: "E",
      require: "^uiAccordions",
      templateUrl: "view/accordion.html",
      transclude : true,
      scope: {
        title : "@"
      },
      link: function (scope, element, attrs, ctrl){
        ctrl.registerAccordion(scope);
        scope.open = function() {
          ctrl.closeAll();
          scope.isOpened = !scope.isOpened;
        }
      }
  };
});
