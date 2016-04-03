$(function() {
  var myMovieNum = 0;
  var searchMovieNum = 0;

  //  My Movies
  $.get("http://www.omdbapi.com/?t=atlantis+the+lost+empire&y=&plot=full&r=json").done(function(response) {
    var movie1 = response;
    console.log(movie1);
    displayMyMovies(movie1);
  }); //  Atlantis: The Lost Empire

  $.get("http://www.omdbapi.com/?t=coraline&y=&plot=full&r=json").done(function(response) {
    var movie2 = response;
    console.log(movie2);
    displayMyMovies(movie2);
  }); //  Coraline

  $.get("http://www.omdbapi.com/?t=lion+king&y=&plot=full&r=json").done(function(response) {
    var movie3 = response;
    console.log(movie3);
    displayMyMovies(movie3);
  }); //  Lion King

  //  Search Button
  $("#search").on("click", function() {
    var movieTag = "";
    var movieYear = "";
    var movieType = "";

    movieTag = $("#movieInput").val().replace(/ /g, "+");
    movieYear = $("#yearRel").val();
    movieType = $("#movieType").val().toLowerCase();
    if (movieTag === "") {
      alert("Please enter a title!");
    }
    else {
      console.log(movieTag, movieType, movieYear);
      getMovieInfo(movieTag, movieType, movieYear);
    }
  });

  // $("#movieInput").keypress(function(event) {
  //   var movieTag = "";
  //   var movieYear = "";
  //   var movieType = "";
  //   var code = event.which;
  //   if (code == 13) {
  //     movieTag = $("#movieInput").val().replace(/ /g, "+");
  //     movieYear = $("#yearRel").val();
  //
  //     if (movieTag === "") {
  //       alert("Please enter a title!");
  //     }
  //     else {
  //       console.log(movieTag, movieYear);
  //       getMovieInfo(movieTag, movieType, movieYear);
  //     }
  //   }
  // }); //  Movie Search Enter Key event

  $("#clear").on("click", function() {
    if (($("#display").children().length === 0)) {
      alert("Movies have been cleared");
    }
    else {
      $("#display").empty();
    }
  }); //  Clear Button

  $("#faq").on("click", function() {
    alert("Coming soon ;)");
  }); //  FAQ Button


  /*Function to get movie information by search*/
  function getMovieInfo(title, type, year) {
    $.get("http://www.omdbapi.com/", {
      t: title,
      type: type,
      y: year,
      plot: "full",
      r: "json"}).done(function(response) {
        // console.log(response);
        displaySearchMovies(response);
    }).fail(function(response) {
      console.log("Failed to get movie");
    }); //  AJAX finished
  }

  function displayMyMovies(movieObj) {
    // console.log(myMovieNum, searchMovieNum);
    $("#myMovies").append("<div id=\"myMovie-" + (myMovieNum) +"\" class=\"movies\"></div>");
    var myMovieSelector = "#myMovie-" + (myMovieNum);
    $(myMovieSelector).append("<img src=\"" + movieObj.Poster + "\">",
                              "<h3>" + movieObj.Title + "</h3>",
                              "<p> Directed by: " + movieObj.Director + "</p>",
                              "<p> Date Released: " + movieObj.Released + "</p>",
                              "<p> Run-Time: " + movieObj.Runtime + "</p>",
                              "<p> Genre: " + movieObj.Genre + "</p>",
                              "<p> IMDB Rating: " + movieObj.Rated + "</p>",
                              "<p> Story By: " + movieObj.Writer + "</p>",
                              "<p> Actors: " + movieObj.Actors + "</p>",
                              "<p> Language(s): " + movieObj.Language + "</p>",
                              "<p> Plot: " + movieObj.Plot + "</p>");

    $("#myMovie-" + myMovieNum).css({"margin" : "5px", "border" : "1px solid pink", "padding" : "5px"});

    myMovieNum += 1;
    // console.log(myMovieNum, searchMovieNum);
  } //  displayMyMovies

  function displaySearchMovies(movieObj) {
    // console.log(myMovieNum, searchMovieNum);
    $("#display").append("<div id=\"Movie-" + (searchMovieNum) +"\" class=\"movies\"></div>");
    var searchMovieSelector = "#Movie-" + (searchMovieNum);
    $(searchMovieSelector).append("<img src=\"" + movieObj.Poster + "\">",
                              "<h3>" + movieObj.Title + "</h3>",
                              "<p> Directed by: " + movieObj.Director + "</p>",
                              "<p> Date Released: " + movieObj.Released + "</p>",
                              "<p> Run-Time: " + movieObj.Runtime + "</p>",
                              "<p> Genre: " + movieObj.Genre + "</p>",
                              "<p> IMDB Rating: " + movieObj.Rated + "</p>",
                              "<p> Story By: " + movieObj.Writer + "</p>",
                              "<p> Actors: " + movieObj.Actors + "</p>",
                              "<p> Language(s): " + movieObj.Language + "</p>",
                              "<p> Plot: " + movieObj.Plot + "</p>");

    $("#Movie-" + searchMovieNum).css({"margin" : "5px", "border" : "1px solid pink", "padding" : "5px"});

    searchMovieNum += 1;
    // console.log(myMovieNum, searchMovieNum);
  } //  displaySearchMovies
}); //  Doc-ready function
