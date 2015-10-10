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

	$scope.sheepList = {
		'disa-1': {
			'name': 'Disa',
			'born': '2015-01-02',
			'info': 'Disa har tillsammans med Måna och Snövit varit med längst i flocken. Hon är lugnt och vill gärna kela när man kommer fram till henne',
			'sheerDate': '2015-06-29'
		}
	};

	$scope.find = function(id){
		if(id in $scope.sheepList){
			$scope.error = false;

			$scope.sheep = $scope.sheepList[id];
		}

		else{
			$scope.error = true;
		}
	}
}]);

