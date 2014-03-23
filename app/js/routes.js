var defineRoutes = function($routeProvider) {
       $routeProvider.
            when('/list', {
                templateUrl: 'partials/list.html',
                controller: 'templateController'
            }). 
            when('/add',{
            	templateUrl: 'partials/add_template.html',
            	controller: 'templateController'
            }).
            otherwise({
                redirectTo: '/list'
      });
  };