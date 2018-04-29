$(function() {
  //  Check if js works
  console.log("Hooray");
  var min = 100;
  var max = 1000000;

  var balance = "";
  $("#balButton").on("click", function() {
    $.get("http://localhost:3000/balance").done(function(res) {
      balance = res;
      $("#display").append("<p>" + balance + "</p>");
    }).fail(function() {
      console.log("something's wrong");
    }); //  AJAX done
  }); //  balButton

  $("#clear").on("click", function() {
    $("#display").empty();
  });
});
