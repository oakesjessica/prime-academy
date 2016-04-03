$(function() {
  // console.log("Everything works!");

  $("#randomButton").on("click", function() {
    var giphyTag = "";
    /*  Assign tag input value to giphyTag, replacing any spaces if necessary (apparently some giphy tags have spaces)*/
    giphyTag = $("#tagInput").val().replace(/ /g, "+");

    getRandomGiphy(giphyTag);
  }); //  Random/Tag Giphy Button

  $("#searchButton").on("click", function() {
    var giphySearch = "";
    giphySearch = $("#regInput").val().replace(/ /g, "+");

    getSearchGiphy(giphySearch);
  }); //  Normal Search Button

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
    });
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
        $("#display").empty();
        // console.log(response);

        for (var it = 0; it < response.data.length; it++) {
          $("#display").append("<img src=\"" + response.data[it].images.fixed_height.url + "\" />");
        } //  for loop
      }).fail(function(response){
        console.log("search fail");
    });
  } //  getSearchGiphy
}); //  Doc-ready function
