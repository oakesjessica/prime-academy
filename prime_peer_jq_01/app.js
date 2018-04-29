//  Employee Information Form JS  //

function printList(anObj) {
  $("#display > ol").append("<li>" + "Name: " + anObj.firstname + " " + anObj.lastname +"</li>");

  var lastli = $("#display > ol").children().last();

  lastli.append("<span>" + "EmplID: " + anObj.emplID + "</span>");
  lastli.append("<span>" + "Title: " + anObj.jobtitle + "</span>");
  lastli.append("<span>" + "Review Score: " + determineColor(anObj.reviewscore) + "</span>");
  lastli.append(banannaSandwich + "<span>" + "Salary: $" + anObj.jobsalary + "</span>");

  var remove = $("<input type=\"button\" value=\"Remove\" class=\"removeButton\"/>");
  lastli.append(remove);

  lastli.css("padding-top", "10px");
  $("span").css("padding-left", "10px");
  remove.css("padding-left", "10px");
  console.log(anObj);
}

function determineColor(review) {
  var styleString = "color:red";

  switch(parseInt(review)) {
    case 1:
      styleString = "color:red";
      break;
    case 2:
      styleString = "color:pink";
      break;

    case 3:
      styleString = "color:orange";
      break;

    case 4:
      styleString = "color:blue";
      break;

    case 5:
      styleString = "color:green";
      break;
  }
  console.log(styleString);
  var divString = "<span><div style=\"" + styleString + "\">" + review + "</div></span>";
  return divString;

}

$(function() {

  $("#display").append("<ol></ol>");

  $("#myForm").on("submit", function(event) {
    event.preventDefault();

    var emplDataArray = [];
    var emplData = {};
    emplData.lastname = $("#lastname").val();
    emplData.firstname = $("#firstname").val();
    emplData.emplID = $("#emplID").val();
    emplData.jobtitle = $("#jobtitle").val();
    emplData.reviewscore = $("#reviewscore").val();
    emplData.jobsalary = $("#jobsalary").val();

    printList(emplData);
    emplDataArray.push(emplData);
  });

  $("body").on("click", ".removeButton", function(event) {
    // console.log(this);
    $(this).parent().remove();
  });

});
