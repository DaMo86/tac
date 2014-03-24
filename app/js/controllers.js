var SlideService = function() {
    var service = {};

    var items = [
        {"id": 1,
            "title": "Introduction",
            "created": new Date(),
            "content": "History of AngularJS",
            "visible": true,
            "desc": "Lalalalal"
        },
        {"id": 2,
            "title": "Introduction2",
            "created": new Date(),
            "content": "History of AngularJS2",
            "visible": true,
            "desc": "Lalalalal2"
        }
    ];

    service.getItems = function() {
        return items;
    };

    service.addItem = function(item) {
        items.push(item);
    };

    return service;
};

var TemplateController = function($scope, slideService, $location) {

    $scope.items = slideService.getItems();
    $scope.selectedIndex = 0;

    $scope.selectIndex = function(index) {
        $scope.selectedIndex = index;
    };

    $scope.newTemplate = {};
    

    var getLastIndex = function(items) {
        var lastIndex = 0;
        for (var i = items.length - 1; i >= 0; i--) {
            if (items[i].id > lastIndex) {
                lastIndex = items[i].id;
            }
            ;
        }
        ;
        return lastIndex;
    };
    
    $scope.lastIndex = getLastIndex($scope.items);

    $scope.addNewTemplate = function() {

        var lastIndex = $scope.lastIndex + 1;
        console.log("LastIndex: " + lastIndex);
        console.log("newTemplate: " + $scope.newTemplate);
        slideService.addItem({"id": lastIndex,
            "title": $scope.newTemplate.title,
            "created": new Date(),
            "content": $scope.newTemplate.content,
            "visible": $scope.newTemplate.visible,
            "desc": $scope.newTemplate.description
        });

        $scope.newTemplate = {};
        $location.path("/list");
    };

};

var PresenterController = function($scope, slideService, $routeParams, $location) {
    $scope.items = slideService.getItems();

    var isPageIdNumeric = $.isNumeric($routeParams.startId);
    var isPageIdValid = isPageIdNumeric &&
            ($routeParams.startId >= 1 && $routeParams.startId <= $scope.items.length);

    var isStartPage = isPageIdNumeric && $routeParams.startId + 1 === 1;
    var isEndPage = isPageIdNumeric && $routeParams.startId - 1 === $scope.items.length;

    if (isPageIdValid) {
        $scope.selectedIndex = $routeParams.startId - 1;
        $scope.selectedItem = $scope.items[$scope.selectedIndex];
    }
    else if ($scope.items.length > 0 && (isStartPage || !isPageIdNumeric)) {
        $location.path("/start/1");
    }
    else if ($scope.items.length > 0 && isEndPage) {
        $location.path("/start/" + $scope.items.length);
    }
    else {
        $location.path("/list");
    }

    $scope.showPrevious = function() {
        if ($scope.selectedIndex > 0) {
            var previousPage = $scope.selectedIndex;
            $location.path("/start/" + previousPage);
        }
        else {
            $location.path("/start/1");
        }
    };

    $scope.showNext = function() {
        if ($scope.selectedIndex < $scope.items.length) {
            var nextPage = $scope.selectedIndex + 2;
            $location.path("/start/" + nextPage);
        }
    };

};



var tacApp = angular.module('tacApp', ['ngRoute', 'textAngular']);

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

//Define Routes
tacApp.config(['$routeProvider', defineRoutes]);

//Define Services
tacApp.factory('slideService', SlideService);

//Define Controller
tacApp.controller('templateController', TemplateController);
tacApp.controller('presenterController', PresenterController);
