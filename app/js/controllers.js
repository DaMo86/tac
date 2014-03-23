

var tacApp = angular.module('tacApp', []);

tacApp.config(function($routeProvider){
	$routeProvider.
		when('list', {
			controller: SlidesCtrl,
			templateUrl: 'app/partials/list.html'
		}).
		otherwise({
			controller: SlidesCtrl,
			templateUrl: 'partials/list.html'
	});
});

tacApp.controller('SlidesCtrl', function($scope){

	$scope.slides = [
		{"number": 1,
		 "title": "Introduction",
		 "content": "History of AngularJS",
		 "isEdited": true
		},
		{"number": 2,
		 "title": "Template",
		 "content": "Templates work great",
 		 "isEdited": false			
		}
	];

	$scope.currentSlide = $scope.slides[0];

	var setCurrentSlide = function(){
		console.log("I am here");
		foundit = false;
		for (var i = $scope.slides.length - 1; i >= 0; i--) {
			if ($scope.slides[i].isEdited == true){
				if (foundit) {
				$scope.slides[i].isEdited = false;
			} else {
				foundit=true;
				$scope.currentSlide = $scope.slides[i];
			}
			}
		};
		
	};

	$scope.$watch('slides', setCurrentSlide, true);

});



	//$scope.currentSlide=$scope.slides[0];

