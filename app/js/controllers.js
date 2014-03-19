

var tacApp = angular.module('tacApp', []);

tacApp.controller('SlidesCtrl', function($scope){

	$scope.slides = [
		{"number": 1,
		 "title": "Introduction",
		 "content": "History of AngularJS",
		 "isEdited": false
		},
		{"number": 2,
		 "title": "Template",
		 "content": "Templates work great",
 		 "isEdited": false			
		}
	];

	var resetOtherEditFlags = function(){
		for (slide in slides){
			if 	(slide == currentSlide)
				slide.isEdited = true;
			else {
				slide.isEdited = false,
			}
		}
		
	};

	$scope.currentSlide=slides[0];
});