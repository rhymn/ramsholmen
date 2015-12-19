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
			'born': '2013-04-21',
			'info': 'Disa har tillsammans med Måna och Snövit varit med längst i flocken. Hon är lugn och vill gärna kela när man kommer fram till henne',
			'image': 'http://www.ramshol.men/img/sheep/disa.jpg',
			'parents': {
				'm': 'Tålyckas Blåmålla',
				'f': 'Rutger'
			}
		},

		'måna': {
			'name': 'Måna',
			'born': '2013-04-23',
			'info': 'Måna har tillsammans med Disa och Snövit varit med längst i flocken. Hon är precis som Disa väldigt kelig och sällskaplig. Hon är dotter till vår äldsta tacka Snövit',
			'image': 'http://www.ramshol.men/img/sheep/mona.jpg',
			'parents': {
				'm': 'Snövit',
				'f': 'Rutger'
			}
		},

		'snövit': {
			'name': 'Snövit',
			'born': '2011-04-12',
			'info': 'Vit som snö och äldst i flocken, hon är också den som bestämmer. Hon är lugn och lite skygg och håller sig gärna lite i bakgrunden',
			'image': 'http://www.ramshol.men/img/sheep/snövit.jpg',
			'parents': {
				'm': 'Tålyckas Svartfot',
				'f': 'Kamelen'
			}
		},


		'clara': {
			'name': 'Clara',
			'born': '2013-04-05',
			'info': 'Clara är född på Orust, trots sitt namn är hon nästan helt svart',
			'image': 'http://www.ramshol.men/img/sheep/clara.jpg',
			'parents': {
				'm': 'Tålyckans Månviol',
				'f': 'Julius'
			}
		},


		'cornelia': {
			'name': 'Cornelia',
			'born': '2013-04-05',
			'info': 'Cornelia är född på Orust',
			'image': 'http://www.ramshol.men/img/sheep/cornelia.jpg',
		},


		'cecilia': {
			'name': 'Cecilia',
			'born': '2013-04-05',
			'info': 'Cecilia är född på Orust',
			'image': 'http://www.ramshol.men/img/sheep/cecilia.jpg',
		},


		'camilla': {
			'name': 'Camilla',
			'born': '2013-04-05',
			'info': 'Camilla är född på Orust',
			'image': 'http://www.ramshol.men/img/sheep/camilla.jpg',
		}


	};

	$scope.list = {
		'disa2015': {
			'sheep': $scope.sheep.disa,
			'sheerDate': '2015-05-31',
			'version': 1
		},

		'måna2015': {
			'sheep': $scope.sheep['måna'],
			'sheerDate': '2015-05-29',
			'version': 1
		},

		'snövit2015': {
			'sheep': $scope.sheep['snövit'],
			'sheerDate': '2015-05-31',
			'version': 1
		},

		'cornelia2015': {
			'sheep': $scope.sheep['cornelia'],
			'sheerDate': '2015-05-28',
			'version': 1
		},

		'cecilia2015': {
			'sheep': $scope.sheep['cecilia'],
			'sheerDate': '2015-05-28',
			'version': 1
		},

		'clara2015': {
			'sheep': $scope.sheep['cecilia'],
			'sheerDate': '2015-05-28',
			'feltDate': '2015-12-19',
			'version': 1
		}
	};

	$scope.loadImage = function(obj){
		if(obj.image){

			var img = new Image();

			img.onload = function(){
				$('#still-alive-section').css({
					'background-position': 'center center',
					'background-image': 'url('+obj.image+')'
				});
			}

			img.src = obj.image;
		}

	}

	$scope.find = function(id){

		id = angular.lowercase(id);

		// If searching for a Still Alive
		if(id in $scope.list){
			$scope.error = false;

			$scope.cut = $scope.list[id];

			// Swap background image
			$scope.loadImage($scope.list[id].sheep);
		}

		// If searching for a sheep
		else if(id in $scope.sheep){
			$scope.error = false;

			$scope.cut = {}
			$scope.cut.sheep = $scope.sheep[id];

			// Swap background image
			$scope.loadImage($scope.sheep[id]);
		}

		else{
			$scope.error = true;
			$scope.cut = false;
		}
	}
}]);

