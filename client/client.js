var app = angular.module("heroApp", []);

app.controller("HeroController", ["$http", function($http) {
  var vm = this;
  vm.profile = {};
  vm.profileList = [];

  //  List of powers to select from
  vm.powerList = ["Invisibility", "Flight", "Super Speed", "Heat Vision", "Super Strength", "Accelerated Healing", "Power Blast", "Animal Affinity"];

  /*********************************************
  Request profiles from database to display on DOM
  **********************************************/
  var getProfiles = function() {
    $http.get("/heroes").then(function(serverResponse) {
      vm.profileList = serverResponse.data;
    });
    vm.profile = {};
  };  //  getProfiles

  /*********************************************
  Post profile to "/heroes", save to MongoDB, and reflect on DOM
  **********************************************/
  vm.saveProfile = function() {
    $http.post("/heroes", vm.profile).then(function(serverResponse) {
      getProfiles();
    });
  };  //  saveProfile

  /*********************************************
  Send profile ID as part of URL, delete from database, and reflect on DOM
  **********************************************/
  vm.deleteProfile = function(profile) {
    var id = profile._id;
    $http.delete("/heroes/" + id).then(function(serverResponse) {
      getProfiles();
    });
  };

  //  Get profiles upon page loading
  getProfiles();
}]);
