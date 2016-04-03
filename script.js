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

  $("#tagInput").keypress(function(event) {
    var giphyTag = "";
    var code = event.which;
    if (code == 13) {
      giphyTag = $("#tagInput").val().replace(/ /g, "+");
      console.log(giphyTag);
      getRandomGiphy(giphyTag);
    }
  }); //  Random/Tag Search Enter Key event

  $("#regInput").keypress(function(event) {
    var giphySearch = "";
    var code = event.which;
    if (code == 13) {
      giphySearch = $("#regInput").val().replace(/ /g, "+");
      console.log(giphySearch);
      getSearchGiphy(giphySearch);
    }
  }); //  Normal Search Enter Key event

  $("#regInput").focus(
    function(){
      $(this).val("");
  }); //  Clear field when clicked again, only works if input field is not selected

  $("#tagInput").focus(
    function(){
      $(this).val("");
  }); //  Clear field when clicked again, only works if input field is not selected

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
