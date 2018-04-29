var app = angular.module("angularApp", []);

app.controller("AngularApp", function($http) {
  var vm = this;

  vm.previous = false;
  vm.empty = false;
  vm.message = "";
  vm.currentMessage = [];
  vm.previousMessages = [];
  console.log(vm.currentMessage);

  vm.submitMessage = function() {
    //  If message input is empty
    if (vm.message === "") {
      //  Display "please enter a message" text
      vm.empty = true;
    } else {
      //  Hide "please enter a message" text
      vm.empty = false;
      //  If currentMessage array is empty, then this is the first message
      if (vm.currentMessage.length === 0) {
        vm.currentMessage.push(vm.message);
        vm.message = "";
      } else {
        //  Show Previous Messages div
        vm.previous = true;
        //  shift currentMessage to previousMessage array
        vm.previousMessages.push(vm.currentMessage.shift());

        //  push message to currentMessage
        vm.currentMessage.push(vm.message);

        //  clear input field
        vm.message = "";
      } //  else if there is already a current message
    } //  else if input field is not empty
  };  //  vm.submitMessage
}); //  app.controller
