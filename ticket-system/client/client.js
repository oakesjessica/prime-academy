var app = angular.module("ticketApp", []);

app.controller("TicketController", ["$http", function($http) {
  var vm = this;
  vm.ticket = {};
  vm.tickets = [];

  //  Call all database entries and append to DOM
  var getTickets = function() {
    return $http.get("/tickets").then(function(response) {
      if (response.status !== 200) {
        throw new Error("Failed to retrieve tickets");
      }
      //  Clear input fields
      vm.ticket = {};
      vm.tickets = response.data;
      return response.data;
    }); //  return $http.get
  };  //  vm.getTickets

  //  Submit ticket to database, then call to database again
  vm.submitTicket = function() {
    //  submit ticket to database and get all tickets from database to display
    return $http.post("/tickets", vm.ticket).then(getTickets());
  };  //  vm.submitTicket

  //  Complete ticket, remove from database
  vm.completeTicket = function(completedTicket) {
    var id = completedTicket._id;
    $http.delete("/tickets/complete/" + id).then(getTickets());
  };  //  vm.completeTicket

  //  Click Edit Button
  vm.makeEdits = function(editedTicket) {
    // console.log("edit");
    vm.editTicket = editedTicket;
  };

  //  Save Edits
  vm.saveEdits = function() {
    // console.log("saving edits", vm.editTicket);

    $http.put("/tickets/update", vm.editTicket ).then(function(response) {
      // console.log("Edits updated");
      vm.editTicket = {};
      getTickets();
    }); //  $http.put
  };  //  vm.saveEdits










  //  Call to database to display any tickets on file and append to screen
  getTickets();
}]);
