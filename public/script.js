$(function() {
  // console.log("Everything works!");

  $("#randomButton").on("click", function() {
    var giphyTag = "";
    /*  Assign tag input value to giphyTag, replacing any spaces if necessary (apparently some giphy tags have spaces as seen on http://giphy.com/search/tags)*/
    giphyTag = $("#tagInput").val().replace(/ /g, "+");
    getRandomGiphy(giphyTag);
  }); //  Random/Tag Giphy Button

  $("#searchButton").on("click", function() {
    var giphySearch = "";
    giphySearch = $("#regInput").val().replace(/ /g, "+");

    getSearchGiphy(giphySearch);
  }); //  Normal Search Button

  //  Clear display upon click
  $("#clear").on("click", function() {
    //  Send alert if display is not empty, otherwise empty it out
    if ($("#display").children().length === 0) {
      alert("Giph's have been cleared!");
    }
    else {
      $("#display").empty();
    }
  }); //  Clear Display Button

  $("#faq").on("click", function() {
    alert("Coming soon :)");
  }); //  FAQ Button

  $("#tagInput").keypress(function(event) {
    var giphyTag = "";
    var code = event.which;
    if (code == 13) {
      giphyTag = $("#tagInput").val().replace(/ /g, "+");
      getRandomGiphy(giphyTag);
    }
  }); //  Random/Tag Search Enter Key event

  $("#regInput").keypress(function(event) {
    var giphySearch = "";
    var code = event.which;
    if (code == 13) {
      giphySearch = $("#regInput").val().replace(/ /g, "+");
      getSearchGiphy(giphySearch);
    }
  }); //  Normal Search Enter Key event

 //  Clear field when clicked again, only works if input field is not selected
  $("#tagInput").focus(
   function(){
     $(this).val("");
  }); //  clear #tagInput

  $("#regInput").focus(
    function(){
      $(this).val("");
  }); //  clear #regInput

  /*  Random/Tag Giphy Search function
  **  Empty the display, append picture received from random API
  **  Console.log/Append to DOM error message
  */
  function getRandomGiphy(tagSearch) {
    $.get("http://api.giphy.com/v1/gifs/random",
      {api_key: "dc6zaTOxFJmzC",
      tag: tagSearch}).done(function(response) {
      $("#display").empty();  //  Clear display
      $("#display").append("<img src=" + response.data.image_url + ">"); //  Append pic to display
      }).fail(function(response) {
        console.log("fail");
    }); //  AJAX
  } //  getRandomGiphy

  /*  Normal Giphy Search function
  **  Empty the display, append all pictures received from normal search API
  **  Console.log/Append to DOM error message
  */
  function getSearchGiphy(normalSearch) {
    if (normalSearch === "") {
      alert("Please input a search or click \"Random Giph\" to randomly generate one. Thank you :D");
    }
    $.get("http://api.giphy.com/v1/gifs/search", {
      q: normalSearch,
      api_key: "dc6zaTOxFJmzC"}).done(function(response) {
        $("#display").empty();  //  Clear display
        // console.log(response);

        for (var it = 0; it < response.data.length; it++) {
          $("#display").append("<img src=\"" + response.data[it].images.original.url + "\" />");
        } //  for loop, append all images to display
      }).fail(function(response){
        console.log("search fail");
    }); //  AJAX
  } //  getSearchGiphy
}); //  Doc-ready function
