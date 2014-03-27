var items = [
        {"id": 1,
            "title": "Introduction",
            "created": new Date(),
            "content": "History of AngularJS",
            "visible": true,
            "desc": "short intro"
        },
        {"id": 2,
            "title": "SecondSlide",
            "created": new Date(),
            "content": "Some content",
            "visible": true,
            "desc": "very important"
        }
    ];


var tacApp = angular.module('tacApp', ['ngRoute']);

var SlideController = function($scope){

    $scope.items = items;

    $scope.selectedIndex = 0;

    $scope.selectIndex = function(index){
        $scope.selectedIndex = index;
    };
};

tacApp.controller('slideController', SlideController);

