var app = angular.module("todoApp", []);

app.controller("TaskController", ["$http", function($http) {
  var vm = this;
  vm.task = {};
  vm.taskID = 0;
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

  vm.completeTask = function(taskItem) {
    vm.taskID = taskItem.id;
    console.log("complete", vm.taskID);
    $http.put("/tasks/" + vm.taskID, {id : vm.taskID}).then(function(serverResponse) {
      console.log(serverResponse);
    });
  };

  vm.deleteTask = function(taskItem) {
    vm.taskID = taskItem.id;
    console.log("id", vm.taskID);
    $http.delete("/tasks/" + vm.taskID, {id : vm.taskID}).then(function(serverResponse) {
      vm.getTasks();
    });
  };

  vm.getTasks();
}]);
