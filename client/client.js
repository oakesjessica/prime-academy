var app = angular.module("heroApp", []);

app.controller("HeroController", ["$http", function($http) {
  var vm = this;
  vm.profile = {};
  vm.profileList = [];

  vm.powerList = ["Invisibility", "Flight", "Super Speed", "Heat Vision", "Super Strength", "Accelerated Healing", "Power Blast", "Animal Affinity"];

  var getProfiles = function() {
    $http.get("/heroes").then(function(serverResponse) {
      vm.profileList = serverResponse.data;
    });
  };
  vm.saveProfile = function() {
    $http.post("/heroes", vm.profile).then(function(serverResponse) {
      console.log(serverResponse);
    });
    getProfiles();
  };

  vm.deleteProfile = function(profile) {
    var id = profile._id;
    $http.delete("/heroes/" + id).then(function(serverResponse) {
      console.log(serverResponse);
    });
    getProfiles();
  };

  getProfiles();
}]);
