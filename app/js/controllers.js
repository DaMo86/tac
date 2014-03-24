var TemplateService = function() {
    var service = {};
    
    var items = [
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
    
    service.getItems = function() {
        return items;  
    };
    
    return service;
};





var TemplateController = function($scope, templateService) {
    
    $scope.items = templateService.getItems();
    $scope.selectedIndex = 0;
    
    $scope.selectIndex = function(index) {
        $scope.selectedIndex = index;
    };
    
};

var PresenterController = function($scope, templateService,$routeParams,$location) {
    $scope.items = templateService.getItems();
    
    var isPageIdNumeric = $.isNumeric($routeParams.startId);
    var isPageIdValid = isPageIdNumeric && 
            ($routeParams.startId >= 1 && $routeParams.startId <= $scope.items.length);
    
    var isStartPage = isPageIdNumeric && $routeParams.startId+1 === 1;
    var isEndPage = isPageIdNumeric && $routeParams.startId-1 === $scope.items.length;
    
    if(isPageIdValid) {
        $scope.selectedIndex = $routeParams.startId-1;
        $scope.selectedItem = $scope.items[$scope.selectedIndex]; 
    }
    else if($scope.items.length > 0 && (isStartPage || !isPageIdNumeric)) {
        $location.path("/start/1");
    }
    else if($scope.items.length > 0 && isEndPage) {
        $location.path("/start/"+$scope.items.length);
    }
    else {
        $location.path("/list");
    }
    
    $scope.showPrevious = function() {
       if($scope.selectedIndex > 0) {
           var previousPage = $scope.selectedIndex;
           $location.path("/start/"+previousPage);
       } 
       else {
           $location.path("/start/1");
       }
    };
    
    $scope.showNext = function() {
        if($scope.selectedIndex < $scope.items.length) {
           var nextPage = $scope.selectedIndex+2;
           $location.path("/start/"+nextPage);
       }
    };
    
};

var tacApp = angular.module('tacApp', ['ngRoute', 'textAngular']);

//Define Routes
tacApp.config(['$routeProvider', defineRoutes]);

//Define Services
tacApp.factory('templateService', TemplateService);

//Define Controller
tacApp.controller('templateController', TemplateController);
tacApp.controller('presenterController', PresenterController);
