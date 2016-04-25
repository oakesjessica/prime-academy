var app = angular.module("todoApp", []);

app.controller("TaskController", ["$http", function($http) {
  var vm = this;
  vm.task = {};
  vm.tasksList = [];
  vm.taskID = 0;
  vm.isDisabled = false;

  vm.submitTask = function() {
    vm.task.completed = false;
    $http.post("/tasks", vm.task).then(function(serverResponse) {
      vm.getTasks();
    });
    //  Clear input field
    vm.task = "";
  };

  vm.getTasks = function() {
    $http.get("/tasks").then(function(serverResponse) {
      vm.tasksList = serverResponse.data;
    });
  };

  vm.completeTask = function(taskItem) {
    vm.taskID = taskItem.id;
    $http.put("/tasks/" + vm.taskID, {id : vm.taskID}).then(function(serverResponse) {
      vm.getTasks();
    });
  };

  vm.deleteTask = function(taskItem) {
    vm.taskID = taskItem.id;
    $http.delete("/tasks/" + vm.taskID, {id : vm.taskID}).then(function(serverResponse) {
      vm.getTasks();
    });
  };




  vm.getTasks();
}]);
