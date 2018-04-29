var app = angular.module('app', []);

app.controller("MainController", ['$scope', '$http', function($scope, $http){
  $scope.nouns = [];
  $scope.adj = [];
  $scope.randomNames = [];
  $scope.randNouns = [];
  $scope.randAdjs = [];

  $scope.getNouns = function(){
    $http.get('/noun').then(function(response){
      $scope.nouns = response.data;
    });
  };  // $scope.getNouns

  $scope.getAdj = function(){
    $http.get('/adj').then(function(response){
      $scope.adj = response.data;
    });
  };  // $scope.getAdj

  var shuffle = function(array) {

    var currentIndex = array.length;
    var tempValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
    return array;
  };  //  $scope.shuffle

  $scope.randomize = function() {
    $scope.randNouns = shuffle($scope.nouns);
    $scope.randAdjs = shuffle($scope.adj);

    $scope.randomNames.push($scope.randAdjs[0] + $scope.randNouns[0]);


  };

  // Get nouns/adjectives, generate shuffled result
  $scope.getNouns();
  $scope.getAdj();
  //$scope.randomize();



}]);
