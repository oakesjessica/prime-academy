$(function() {
  console.log("Everything works!");

  $("#randomButton").on("click", function() {
    var giphyTag = "";
    /*  Assign tag input value to giphyTag, replacing any spaces if necessary (apparently some giphy tags have spaces)*/
    giphyTag = $("#tagInput").val().replace(/ /g, "+");
    console.log(giphyTag);

    getRandomGiphy(giphyTag);
  }); //  Random/Tag Giphy Button

  $("#searchButton").on("click", function() {
    var giphySearch = "";
    giphySearch = $("#regInput").val().replace(/ /g, "+");
    console.log(giphySearch);

    getSearchGiphy(giphySearch.toString());
  }); //  Normal Search Button

  function getRandomGiphy(tagSearch) {
    $.get("http://api.giphy.com/v1/gifs/random",
      {api_key: "dc6zaTOxFJmzC",
      tag: tagSearch}).done(function(response) {
      var randomPic = response;
      // console.log(randomPic);
      appendRandomPic(randomPic);
      }).fail(function(response) {
        console.log("fail");
    });
  } //  getRandomGiphy

  function getSearchGiphy(normalSearch) {
    $.get("http://api.giphy.com/v1/gifs/search", {
      q: normalSearch,
      api_key: "dc6zaTOxFJmzC"}).done(function(response) {
        $("#display").empty();
        console.log(response.data.length);
        for (var it = 0; it < response.data.length; it++) {
          $("#display").append("<img src=\"" + response.data[it].images.fixed_height.url + "\" />");
        } //  for loop
      }).fail(function(response){
        console.log("search fail");
    });
  } //  getSearchGiphy

  function appendRandomPic(picture) {
    $("#display").empty();  //  Clear display
    $("#display").append("<img src=" + picture.data.image_url + ">"); //  Append pic to display
  } //  appendRandomPic
}); //  Doc-ready function
