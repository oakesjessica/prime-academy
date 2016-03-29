$(function() {

  $("#myForm").on("submit", function(event) {
    event.preventDefault();
  });

  var emplDataArray = [];
  $("#submit").on("click", function(event) {
    var emplData = {};
    emplData.lastname = $("#lastname").val();
    emplData.firstname = $("#firstname").val();
    emplData.emplID = $("#emplID").val();
    emplData.jobtitle = $("#jobtitle").val();
    emplData.reviewscore = $("#reviewscore").val();
    emplData.jobsalary = $("#jobsalary").val();

    emplDataArray.push(emplData);
  });

});
