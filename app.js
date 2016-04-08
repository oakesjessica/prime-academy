var app = angular.module("giphyApp", []);

app.controller("GiphyController", function($scope, $http) {
  $scope.giphyPics = [];
  $scope.giphy = {};
  $scope.tagGiph = "";
  $scope.regGiph = "";
  //  Search for random/tag giph
  $scope.randomGiph = function() {
    // $scope.random = true;

    console.log("finding giph", $scope.tagGiph);

    //  random parameters
    var config = {
      params: {api_key: "dc6zaTOxFJmzC",
              tag: $scope.tagGiph
      }
    };  //  config

    $http.get("http://api.giphy.com/v1/gifs/random", config).then(function(response) {
      console.log(response);
      //  Clear array so display will clear
      $scope.giphyPics = [];
      //  Assign response to giph object and push to array
      $scope.giphy = response.data.data;
      $scope.giphyPics.push($scope.giphy.image_original_url);

      console.log($scope.giphys);
    }); //  $http.get
  };  //  $scope.randomGiph button

  $scope.searchGiph = function() {
    if ($scope.regGiph === "") {
      alert("Add a search!");
      $scope.giphyPics = [];
    }
    else {

      //  Clear array display
      $scope.giphyPics = [];

      //  search parameters
      var config = {
        params: {
          q: $scope.regGiph,
          api_key: "dc6zaTOxFJmzC"
        }
      };  //  config

      $http.get("http://api.giphy.com/v1/gifs/search", config).then(function(response) {
        console.log("response", response.data.data);

        for (var it = 0; it < response.data.data.length; it++) {
          $scope.giphy = response.data.data[it];
          $scope.giphyPics.push($scope.giphy.images.original.url);
        }
      }); //  $http.get
    } //  else
   };  //  $scope.searchGiph button
}); //  GiphyController
