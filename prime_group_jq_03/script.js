var peerArray = ["Lisa", "Max","Kyle", "Suzanna","Chris. R", "Jessica", "Jennifer", "Taylor", "Chris T", "Erika", "Sasha",
"Amy","Russell", "Libby","Courtney", "Peter", "Cari", "Oliver","Travis"];

var groupArray =["Tab Index", "Focus", "Title", "On Click", "Access Key", "ContentEditable", "Draggable", "contextMenu", "Dropzone", "SpellCheck"];

function shuffle(array){
   var currentIndex = array.length;
   var randomIndex = 0;
   var tempIndex;
   while (currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempIndex = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempIndex;
   }
   return array;
}

var groupNum = 0;
$(function(){
   $("button").on("click", function() {

   var buttonId = $(this).parent().attr("id");  // Grab parent ID

   if (buttonId == "generate") {
      $("#display").empty(); // Clear display

      // If number is not selected, alert user
      if (groupNum === 0) {
         alert("Pick a Number!");
      }
      else {
         var currentGroup;
         // Append # of group headers to groupNum, taking names from groupArray
         for(var it = 0; it<groupNum; it++){
            $("#display").append("<div id=\"G" + (it + 1) +"\" class=\"groups\"><h1>" + " " + groupArray[it] + "</h1></div>");
         }  // for loop, group names

         var shuffled = shuffle(peerArray);
         // Appending shuffled array names to groups
         for (var gr = 0; gr < shuffled.length; gr++) {
            currentGroup = gr % groupNum;

            var groupSelector = "#G" + (currentGroup+1);

            $(groupSelector).append("<p>" + shuffled[gr] + "</p>");

            //  console.log($(groupSelector + " p").last());

            $('#display').hide().fadeIn();
            $(groupSelector + " p").last().hide().delay(gr * 30).fadeIn();

            //  $(groupSelector + " p").last().show().delay(gr * 60);
         }  // for loop, shuffled array
      }  // else statement
   }  // if statement, generate button
   else {   // Group # button was clicked
     // Clear display
     $("#display").empty();

     // Make variable groupNum equal to # of groups selected (type num)
     groupNum = parseInt(buttonId);
   }
 });




});
