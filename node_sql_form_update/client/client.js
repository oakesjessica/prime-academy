var app = angular.module('app', []);


app.controller('PersonController', ['$http', function($http){
  var controller = this;
  controller.name = '';
  controller.address = '';
  controller.city='';
  controller.state='';
  controller.zip_code='';
  controller.people=[];

var getPeople=function(){
  return $http.get("/people").then(function(response){
    controller.people=response.data;
    console.log(response.data);
    return response.data;
  });
}

  controller.sendData = function() {
    $http.post('/people', {name: controller.name, address: controller.address, city: controller.city, state: controller.state, zip_code: controller.zip_code})
      .then(function(serverResponse){
        console.log(serverResponse);
      });
  };
  getPeople();
}]);
