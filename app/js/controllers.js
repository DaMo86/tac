var tacApp = angular.module('tacApp', ['ngRoute', 'textAngular']);

//Define Routes
tacApp.config(['$routeProvider', defineRoutes]);

var TemplateController = function($scope, $rootScope) {
    
    if($rootScope.items && $rootScope.items.length > 0) {
        $scope.selectedIndex = 0;
    }
   
    var getLastIndex = function(items){
        console.log("calculate last index");
        lastIndex = 0;
        for (var i = items.length - 1; i >= 0; i--) {
            if (items[i].id > lastIndex) {
                lastIndex = items[i].id;
            };
        };
    };

    $scope.items = $rootScope.items;
    var lastIndex = getLastIndex($scope.items);

    $scope.synchRootScope = function() {
        console.log("info", "Laueft");
        $rootScope.items = $scope.items;
    };
    
    $scope.selectIndex = function(index) {
        $scope.selectedIndex = index;
    };

    $scope.addNewTemplate = function(title, description, content) {
        lastIndex = lastIndex + 1;
        $scope.items.push({"id": lastIndex,
                "title": title,
                "created": new Date(),
                "content": content,
                "visible": true,
                "desc" : description
            });
        $scope.synchRootScope;
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