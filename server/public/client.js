var app = angular.module("candidateApp", []);

app.controller("PoliticsController", function($scope, $http) {
	$scope.listCandidates = false;
	$scope.showWinner = false;
	$scope.allCandidates = [];
	$scope.winner = "";

  //  Initialize arrays
  $scope.democrats = [];
  $scope.republicans = [];

  //  Button to show candidates
  $scope.showCandidates = function() {
		//	Show listCandidates div
		$scope.listCandidates = true;

    $http.get("/democrats").then(function(response) {
      $scope.democrats = response.data;

			//	Merge data to allCandidates arrays
			for (var it = 0; it < response.data.length; it++) {
				$scope.allCandidates.push(response.data[it]);
			}
    }); //  $http.get("/democrats")

    $http.get("/republicans").then(function(response) {
      $scope.republicans = response.data;
      // console.log("republicans", $scope.republicans);

			//	Merge data to allCandidates arrays
			for (var it = 0; it < response.data.length; it++) {
				$scope.allCandidates.push(response.data[it]);
			}
    }); //  $http.get("/republicans")
  };  //  showCandidates Button

	$scope.chooseCandidate = function() {
		$scope.showWinner = true;
		$scope.num = Math.floor(Math.random() * ($scope.allCandidates.length-1));
		$scope.winnerObj = $scope.allCandidates[$scope.num];
		$scope.winner = $scope.winnerObj.name;
	}
}); //  PoliticsController
