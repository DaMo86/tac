var tacApp = angular.module('tacApp', ['ngRoute', 'textAngular']);

//Define Routes
tacApp.config(['$routeProvider', defineRoutes]);

var TemplateController = function($scope, $rootScope, $location) {
    
    if($rootScope.items && $rootScope.items.length > 0) {
        $scope.selectedIndex = 0;
    }
   
    var getLastIndex = function(items){
        console.log("calculate last index");
        var lastIndex = 0;
        for (var i = items.length - 1; i >= 0; i--) {
            if (items[i].id > lastIndex) {
                lastIndex = items[i].id;
            };
        };
        return lastIndex;
    };

    $scope.items = $rootScope.items;
    $scope.lastIndex = getLastIndex($scope.items);

    $scope.synchRootScope = function() {
        console.log("info", "Laueft");
        $rootScope.items = $scope.items;
    };
    
    $scope.selectIndex = function(index) {
        $scope.selectedIndex = index;
    };

    $scope.newTemplate = {};

    $scope.addNewTemplate = function() {
        var lastIndex = $scope.lastIndex + 1;
        console.log("LastIndex: " + lastIndex);
        console.log("newTemplate: " + $scope.newTemplate);
        $scope.items.push({"id": lastIndex,
                "title": $scope.newTemplate.title,
                "created": new Date(),
                "content": $scope.newTemplate.content,
                "visible": $scope.newTemplate.visible,
                "desc" : $scope.newTemplate.description
            });
        $scope.newTemplate = {};
        $scope.synchRootScope;
        $location.path("/list");
    };
    

};

tacApp.controller('templateController', TemplateController);

tacApp.controller('InitController', function($rootScope) {

    if (!$rootScope.items) {
        $rootScope.items = [
            {"id": 1,
                "title": "Introduction",
                "created": new Date(),
                "content": "History of AngularJS",
                "visible": true,
                "desc" : "Lalalalal"
            },
            {"id": 2,
                "title": "Introduction2",
                "created": new Date(),
                "content": "History of AngularJS2",
                "visible": true,
                "desc" : "Lalalalal2"
            }
        ];
    };

    $rootScope.getClass = function(path) {
        if ($location.path().substr(0, path.length) == path) {
          return "active"
        } else {
          return ""
        }
    };
});


tacApp.directive('activeLink', ['$location', function(location) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
        var path = attrs.href;
        path = path.substring(1); //hack because path does not return including hashbang
        scope.location = location;
        scope.$watch('location.path()', function(newPath) {
          if (path === newPath) {
            element.parent().addClass("active");
          } else {
            element.parent().removeClass("active");
          }
        });
      }
    };
  }]);




/*
 
 tacApp.controller('SlidesCtrl', function($scope) {
 
 
 
 var resetOtherEditFlags = function() {
 for (slide in slides) {
 if (slide == currentSlide) {
 slide.isEdited = true;
 }
 else {
 slide.isEdited = false
 }
 }
 
 };
 });*/