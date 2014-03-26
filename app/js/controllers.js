var SlideService = function() {
    var service = {};

    var items = [{"id":1,"title":"AngularJS","created":"2014-03-26T07:19:38.879Z","content":"<div><ul>&#10;    <li>Open Source JavaScript Framework von Google</li>&#10;    <li>Single Page Web Application - Desktop Application im Browser</li>&#10;    <li>Aktuelle Version 1.2.3</li>&#10;    <li>Architektur-Pattern&#10;        <ul>&#10;            <li>Model View Controller (MVC)</li>&#10;            <li>MVVM (Model View View Model)</li>&#10;            <li>MVW (Model View Whatever)</li>&#10;        </ul>&#10;    </li>&#10;    <li>Etablierte Konzepte&#10;        <ul>&#10;            <li>Dependency Injection</li>&#10;            <li>DataBinding</li>&#10;            <li>Templates</li>&#10;            <li>Filter</li>&#10;            <li>Direktiven</li>&#10;            <li>Modules, Factories, Services</li>&#10;            <li>Routes</li>&#10;        </ul>&#10;    </li>&#10;</ul></div>","visible":true,"desc":"Allgemeine Informationen zu AngularJS","$$hashKey":"00E"},{"id":2,"title":"Bootrap AngularJS","created":"2014-03-26T07:19:38.879Z","content":"<div><pre><span>/* ng-app &#8211; initialisiert eine AngularJS Applikation */</span>&#10;<span>&lt;</span>html ng<span>-</span>app<span>=</span><span>'slideApp'</span> <span>&gt;</span>&#10;&#10;<span>/* ng-controller &#8211; definiert einen Controller, der in einem DOM-Bereich g&#252;ltig ist */</span>&#10;<span>&lt;</span>html ng<span>-</span>app<span>=</span><span>'slideApp'</span> ng<span>-</span>controller<span>=</span><span>'SlideController'</span> <span>&gt;</span>&#10;&#10;<span>var</span> tacApp <span>=</span> angular.module(<span>'tacApp'</span>, []);&#10;&#10;tacApp.controller(slideController, <span>function</span>() {&#10;<span>//&#8230;</span>&#10;});&#10;</pre></div>","visible":true,"desc":"Laden einer AngularJS-Applikation","$$hashKey":"00F"},{"id":3,"title":"DI, DOM-Manipulation","created":"2014-03-26T07:54:43.431Z","content":"<div><pre><span>// Dependency Injection</span>&#10;<span>var</span> slidefunction <span>=</span> <span>function</span>($scope) {&#10;&#9;<span>//&#8230;</span>&#10;};&#10;&#10;<span>//-------------------------</span>&#10;&#10;<span>//Data Binding, Templates, Filter</span>&#10;<span>var</span> slidefunction <span>=</span> <span>function</span>($scope) {&#10;&#9;$scope.message <span>=</span> Hello World;&#10;&#9;$scope.toDay <span>=</span> <span>new</span> <span>Date</span>();&#10;};&#10;&#10;<span>&lt;</span>input type<span>=</span><span>&#34;text&#34;</span> ng<span>-</span>model<span>=</span><span>&#34;message&#34;</span> <span>/&gt;</span>&#10;&#10;<span>&lt;</span>h1<span>&gt;</span>{{message}}<span>&lt;</span><span>/h1&gt;</span>&#10;&#10;<span>&lt;</span>h1 ng<span>-</span>bind<span>=</span><span>&#34;toDay |  date : 'yyyy-MM-dd HH:mm:ss'&#34;</span> <span>&gt;&lt;</span><span>/h1&gt;</span>&#10;</pre></div>","visible":true,"desc":"Dependency Injection, Data Binding, Templates, Filter","$$hashKey":"05K"},{"id":4,"title":"Directives","created":"2014-03-26T09:57:05.070Z","content":"<div><pre><span>// Restricts</span>&#10;<span>'A'</span> <span>-</span> <span>&lt;</span>div ng<span>-</span>sparkline<span>&gt;&lt;</span><span>/div&gt; </span>&#10;<span>'E'</span> <span>-</span> <span>&lt;</span>ng<span>-</span>sparkline<span>&gt;&lt;</span><span>/ng-sparkline&gt;</span>&#10;<span>'C'</span> <span>-</span> <span>&lt;</span>span <span>class</span><span>=</span><span>&#34;ng-sparkline&#34;</span><span>&gt;&lt;</span><span>/span&gt; </span>&#10;<span>'M'</span> <span>-</span> <span>&lt;!--</span> directive<span>:</span> ng<span>-</span>sparkline <span>--&gt;</span>&#10;&#10;<span>// Beispiel:</span>&#10;app.directive(<span>'ngSparkline'</span>, &#10;   <span>function</span>() { &#10;&#9;<span>return</span> { &#10;&#9;&#9;restrict<span>:</span> <span>'A'</span>, template<span>:</span> <span>'&lt;div class=&#34;sparkline&#34;&gt;&lt;/div&gt;'</span> &#10;} });&#10;&#10;<span>// Quelle: http://www.ng-newsletter.com/posts/directives.html</span>&#10;</pre></div>&#10;","visible":true,"desc":"Vordefinierte Templates mit AngularJS","$$hashKey":"088"},{"id":5,"title":"Modules","created":"2014-03-26T10:01:04.428Z","content":"<div><pre><span>// 1. define the module and the other module dependencies (if any) angular.module('myModuleName', ['dependency1', 'dependency2']) </span>&#10;&#10;<span>// 2. set a constant </span>&#10;.constant(<span>'MODULE_VERSION'</span>, <span>'0.0.3'</span>)&#10;&#10; <span>// 3. maybe set some defaults </span>&#10;.value(<span>'defaults'</span>, { foo<span>:</span> <span>'bar'</span> }) &#10;&#10;<span>// 4. define a module component </span>&#10;.factory(<span>'factoryName'</span>, <span>function</span>() {&#10;<span>/* stuff here */</span>&#10;}); &#10;&#10;<span>// 5. define another module component </span>&#10;.directive(<span>'directiveName'</span>, <span>function</span>() {&#10;<span>/* stuff here */</span>&#10;}) ;&#10;<span>// and so on</span>&#10;&#10;<span>// Quelle: http://stackoverflow.com/questions/19109291/write-custom-module-for-angularjs</span>&#10;</pre></div>&#10;","visible":true,"desc":"Wiederverwendung komplexer Komponeneten","$$hashKey":"094"},{"id":6,"title":"Services, Factories","created":"2014-03-26T10:07:53.126Z","content":"<div><pre><span>//service style, probably the simplest one</span>&#10;tacApp.service(<span>'slideService'</span>, <span>function</span>() {&#10;&#9;<span>this</span>.getItems <span>=</span> <span>function</span>() {&#10;&#9;&#9;<span>return</span> {};&#10;        };&#10;});&#10;&#10;<span>//factory style, more involved but more sophisticated</span>&#10;tacApp.factory(<span>'slideServiceFactory'</span>, <span>function</span>() {&#10;     <span>return</span> {&#10;        getItems<span>:</span> <span>function</span>() {&#10;&#9;   <span>return</span> {};&#10;        };&#9;&#10;     };&#10;});&#10;</pre></div>&#10;","visible":true,"desc":"Auslagerung von Anwendungslogik in Service-Komponenten","$$hashKey":"0AT"},{"id":7,"title":"Routes","created":"2014-03-26T10:09:49.291Z","content":"<div><pre><span>var</span> defineRoutes <span>=</span> <span>function</span>($routeProvider) {&#10;       $routeProvider.&#10;            when(<span>'/list'</span>, {&#10;                templateUrl<span>:</span> <span>'partials/list.html'</span>,&#10;                controller<span>:</span> <span>'templateController'</span>&#10;            }).&#10;            when(<span>'/start/:startId'</span>, {&#10;                templateUrl<span>:</span> <span>'partials/praese.html'</span>,&#10;                controller<span>:</span> <span>'presenterController'</span>).&#10;            otherwise({&#10;                redirectTo<span>:</span> <span>'/list'</span>&#10;      });&#10;};&#10;</pre></div>","visible":true,"desc":"Routen und PageFlows","$$hashKey":"0CN"}];

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
