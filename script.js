/* When the page loads, have a button on the DOM that says 'generate'.
**Upon clicking on that button, append a new container onto the DOM.
**That container should have two buttons, one that reads 'delete', the other that reads 'change'.
**Additionally, there should be text that provides a number.
**The number should be the number of times the 'generate' button has been clicked.

**The delete button should delete JUST the container that the button is in.
**The change button should change the background-color of the container to red.
**The default or 'normal' state of the background-color should be yellow.
**Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc.
*/

var count = 0;

$(function() {
  $("#generate").on("click", function() {

    //  Count # of times Generate has been clicked and display on DOM
    count++;
    $("#count").html("<p> # of times Generate has been clicked: " + count + "</p>");

    //  Create container div and default yellow background
    var $container = $("<div id=\"container\">" + "</div>");
    $container.css("background", "yellow");

    //  Create delete and change buttons
    var $delete = $("<button id=\"delete\">Delete" + "</button>");
    var $change = $("<button id=\"change\">Change" + "</button>");

    //  Append container to the display
    $("#display").append($container);

    //  Append buttons to container
    $($container).append($delete);
    $($container).append($change);

  }); //  Generate button

  $(document).on("click", "#delete", function(){
    $(this).parent().remove();
  });  //  Delete button

  /*  I tried to use the method addClass/removeClass as below,
  **  but had some issues with creating a class with the specific css dynamically
  **  $("<style> .redDiv { background:red} </style>");
  */
  // $(document).on("click", "#change", function() {
  //   //  If parent container does not have redDiv class, change it to redDiv
  //   var redDiv = {"background": "red"};
  //   //  NOTE: Console log is displaying correct values but DOM is not reflecting change
  //   console.log($(this).parent().hasClass("redDiv"));
  //   if(!$(this).parent().hasClass("redDiv")) {
  //     $(this).parent().addClass("redDiv");
  //   }
  //   //  Otherwise, remove redDiv
  //   else {
  //     $(this).parent().removeClass("redDiv");
  //   }
  // });  //  Change button (addClass/removeClass method)


  //Syntax taken from https://www.html5andbeyond.com/jquery-toggle-click-function-simple-solution/
  $(document).on("click", "#change", function(){
    //  If the attribute "id" value=1, change value=0 and change container css back to yellow
    if($(this).parent().attr("id")== 1) {
      $(this).parent().attr("id", 0);
      $(this).parent().css("background-color", "yellow");
    }
    //  Else if the attribute "id" value=0, change value=1 and change container css to red
    else {
      $(this).parent().attr("id", 1);
      $(this).parent().css("background-color", "red");
    }
  }); //  Change button (attr method)
}); //  Doc ready function
