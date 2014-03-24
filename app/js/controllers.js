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

var SlideController = function($scope, $location){

    $scope.items = items;

    $scope.selectedIndex = 0;

    $scope.selectIndex = function(index){
        $scope.selectedIndex = index;
    };

    $scope.newSlide = {};

    $scope.addSlide = function(){
        $scope.newSlide.created = new Date();
        $scope.items.push($scope.newSlide);
        $scope.newSlide = {};

        $location.path('/list');

    };

};

tacApp.controller('slideController', SlideController);


var RouterConfig = function($routeProvider){
    $routeProvider.when('/list', {
        controller: 'slideController',
        templateUrl: 'partials/list.html'
    }).when('/add', {
        controller: 'slideController',
        templateUrl: 'partials/add_template.html'
    }).otherwise({
        redirectTo: '/list'
    });
};


tacApp.config(['$routeProvider', RouterConfig]);
