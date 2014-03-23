var tacApp = angular.module('tacApp', ['ngRoute', 'textAngular']);

//Define Routes
tacApp.config(['$routeProvider', defineRoutes]);

var TemplateController = function($scope, $rootScope) {
    
    if($rootScope.items && $rootScope.items.length > 0) {
        $scope.selectedIndex = 0;
    }
   
    $scope.items = $rootScope.items;

    $scope.synchRootScope = function() {
        console.log("info", "Laueft");
        $rootScope.items = $scope.items;
    };
    
    $scope.selectIndex = function(index) {
        $scope.selectedIndex = index;
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
    }

});




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