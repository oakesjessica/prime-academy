var app = angular.module("ticketApp", []);

app.controller("TicketController", ["$http", function($http) {
  var vm = this;
  vm.ticket = {};
  vm.tickets = [];

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

  vm.submitTicket = function() {
    //  submit ticket to database and get all tickets from database to display
    return $http.post("/tickets", vm.ticket).then(getTickets());
  };  //  vm.submitTicket






  //  Call to database to display any tickets on file and append to screen
  getTickets();
}]);
