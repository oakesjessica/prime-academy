var app = angular.module("angularApp", []);

app.controller("AngularApp", function($http) {
  var vm = this;

  vm.previous = false;
  vm.message = "";
  vm.currentMessage = [];
  vm.previousMessages = [];
  console.log(vm.currentMessage);

  vm.submitMessage = function() {
    //  If vm.currentMessage is an empty array, first click
    if (vm.message !== "") {
      if (vm.currentMessage.length === 0) {
        vm.currentMessage.push(vm.message);
        vm.message = "";
        console.log(vm.currentMessage);
      } else {
        //  Show Previous Messages div
        vm.previous = true;
        //  push currentMessage to previousMessages
        vm.previousMessages.push(vm.currentMessage.shift());

        //  push message to current message
        vm.currentMessage.push(vm.message);

        // //  shift last message off
        // vm.currentMessage.shift();
        console.log("curr", vm.currentMessage);

        //  clear input field
        vm.message = "";
        console.log("prev", vm.previousMessages);
      }
    }
  };
});
