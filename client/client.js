var app = angular.module("todoApp", []);

app.controller("TaskController", ["$http", function($http) {
  var vm = this;

  vm.task = {};
  vm.tasksList = [];

  vm.submitTask = function() {
    vm.task.completed = false;
    $http.post("/tasks", vm.task).then(function(serverResponse) {
      vm.getTasks();
    });
    vm.task = "";
  };

  vm.getTasks = function() {
    $http.get("/tasks").then(function(serverResponse) {
      vm.tasksList = serverResponse.data;
    });
  };

  vm.getTasks();
}]);
