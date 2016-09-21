var app = angular.module('myApp', []); 
		app.controller('openDataCtrl', function($scope, $http, $interval) {
			$scope.url = "https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json";
			$scope.url2 = "https://datatank.stad.gent/4/mobiliteit/bezettingparkeergaragesnmbs.json"
			$scope.ToggleButtonDetailsGent = false;
			$scope.getData = function() {
			$http.get($scope.url).then(
					function (response) {
						$scope.items = response.data; 
					}); 
					$http.get($scope.url2).then(
					function (response) {
						$scope.items2 = response.data; 
					});
			}; 
			
		
			$scope.secondsToWait = 10;
	$scope.timeCounter = $scope.secondsToWait;		
$interval(function () {
	if ($scope.timeCounter == 0) {
		$scope.timeCounter = $scope.secondsToWait;
$scope.getData();
	}
$scope.timeCounter -=1;
}, ($scope.secondsToWait * 100 + 1)); 
//als secondsToWait op 0 staat, zal bovenstaande lus blijkbaar slechts 1 keer worden uitgevoerd, vandaar +1

			
			$scope.getTrColor = function (value) {
if (value == 0) {
return 'red'; 
}
else if (value < 100) {
return 'orange'; 
	  }
	  else if (value < 200) {
return '#9932CC'; 
	  }
else {
	return '#7FFF00'; 
}
}; 
		}); 