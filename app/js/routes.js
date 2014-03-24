var defineRoutes = function($routeProvider) {
       $routeProvider.
            when('/list', {
                templateUrl: 'partials/list.html',
                controller: 'templateController'
            }).
            when('/start/:startId', {
                templateUrl: 'partials/praese.html',
                controller: 'presenterController'
            }).
            when('/start', {
                templateUrl: 'partials/praese.html',
                controller: 'presenterController'
            }). 
            when('/add',{
            	templateUrl: 'partials/add_template.html',
            	controller: 'templateController'
            }).
            otherwise({
                redirectTo: '/list'
      });
  };
