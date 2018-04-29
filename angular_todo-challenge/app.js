var app = angular.module("myApp", []);

app.controller("MainController", function($scope) {
  $scope.taskList = [];
  $scope.task = "";

  $scope.addTask = function() {
    $scope.taskList.push($scope.task);
    console.log($scope.taskList);
  };

  $scope.removeTask = function(index) {
    $scope.taskList.splice(index, 1);
  };

  $scope.enter = function() {
    if(event.keyCode == 13 && $scope.task) {
      $scope.taskList.push($scope.task);
      $scope.task = "";
    }
  };
  // $scope.addTodo = function() {
  //     if(event.keyCode == 13 && $scope.taskList){
  //         $scope.todos.push({text:$scope.todoText, done:false});
  //         $scope.todoText = '';
  //     }
  // };
});
