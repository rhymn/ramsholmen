var ramsholmen = angular.module('ramsholmen', [
	'ngRoute',
]);

ramsholmen.config(['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider', '$provide', 	
	function($routeProvider, $locationProvider, $httpProvider, $compileProvider, $provide){
		// $compileProvider.debugInfoEnabled(false);
	}
])


.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
	$rootScope.$on('$routeChangeSuccess', function(event, currentRoute, previousRoute){
		// Set Title
		// $rootScope.title = currentRoute.title;

		// Scroll to top
		$window.scrollTo(0,0);

		// Track to GA
		// ga('send', 'pageview', $location.path());
	});
}])


.controller('SheepFinderCtrl', ['$scope', function($scope){

	$scope.sheep = {
		'disa': {
			'name': 'Disa',
			'born': '2015-01-02',
			'info': 'Disa har tillsammans med Måna och Snövit varit med längst i flocken. Hon är lugn och vill gärna kela när man kommer fram till henne',
			'image': 'disa.jpg'
		}
	};

	$scope.list = {
		'disa-1': {
			'sheep': $scope.sheep.disa,
			'sheerDate': '2015-06-29',
			'version': 1
		}
	};

	$scope.find = function(id){
		if(id in $scope.list){
			$scope.error = false;

			$scope.cut = $scope.list[id];

			// Swap background image
			if($scope.list[id].sheep.image){
				$('#still-alive-section').css({
					'background-image': 'url(../img/sheep/'+$scope.list[id].sheep.image+')'
				});
			}
		}

		else{
			$scope.error = true;
		}
	}
}]);

