var defineRoutes = function($routeProvider) {
       $routeProvider.
            when('/list', {
                templateUrl: 'partials/list.html',
                controller: 'templateController'
            }). 
            otherwise({
                redirectTo: '/list'
      });
  };