var peerArray = ["lisa", "max","Kyle", "suzanna","Chris. R", "Jessica", "Jennifer", "taylor", "Chris T", "erika", "sasha",
"amy","russell", "libby","courtney", "peter", "cari", "oliver","travis"];

var groupArray =["Group Banana (1)", "Group Bannana (2)", "Group Bannana (3)", "Group Plantain (4)", "Group Access Key (5)", "Group ContentEditable (6)", "Group Draggable (7)", "Group contextMenu (8)", "Group Dropzone (9)", "Group SpellCheck (10)"];

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
console.log(shuffle(peerArray));


var groupNum = 0;
$(function(){
 $("button").on("click", function() {
   var buttonId = $(this).parent().attr("id");

   if (buttonId == "generate") {

     // If number is not selected, alert user
     if (groupNum === 0) {
       alert("Pick a Number!");
     }
     else {
       var currentGroup;
       console.log('Create groups: ' + shuffle(peerArray));

       // Append # of group headers to groupNum, taking names from groupArray
       for(var it = 0; it<groupNum; it++){
         $("#displayheaders").append("<div id=\"G" + (it + 1) +"\" class=\"groupheadings\">" + " " + groupArray[it] + "</div>");
       }
       
       // Appending shuffled array names to groups
       for (var gr = 0; gr < peerArray.length; gr++) {
         currentGroup = gr % groupNum;
         console.log("groupNum" + groupNum + " currentGroup" + currentGroup);
         $("#G" + (currentGroup+1)).append("<p>" + peerArray[gr] + "</p>");
       }
     }
   }
   else {
     // Clear display
     $("#displayheaders").empty();

     // Make variable groupNum equal to # of groups selected (type num)
     groupNum = parseInt(buttonId);
   }
 });




});
