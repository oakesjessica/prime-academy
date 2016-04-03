$(function() {
  //  Event listener for clicking on generate button
  console.log("Everything works");

  $(".generator").on("click", function() {
    //  Clear display
    $("#display").empty();
    //  Create variables for tags/searches
    var giphyTag = "";
    var searchTag = "";

    giphyTag = $("#giphyTag").val();
    searchTag = $("#RegSearch").val();

    //  Get giphy
    $.get("http://api.giphy.com/v1/gifs/random",
      {api_key: "dc6zaTOxFJmzC",
      tag: giphyTag}).done(function(response) {
      var randomPic = response;

      appendRandomPicture(randomPic);
    }); //  AJAX done
  }); //  Random and Tag Search

  function appendRandomPicture(picture) {
    console.log(picture);
    $("#display").append("<img src=" + picture.data.image_url + ">");
  } //  appendPicture

}); //  Doc-ready
