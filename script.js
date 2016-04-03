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

    movieTag = $("#title").val().replace(/ /g, "+");
    movieYear = $("#year").val();
    movieType = $("#type").val().toLowerCase();
    if (movieTag === "") {
      alert("Please enter a title!");
    }
    else {
      getMovieInfo(movieTag, movieType, movieYear);
    }
  });

  //  Search Enter Button for title/year inputs
  $("#title, #year").keypress(function(event) {
    var movieTag = "";
    var movieYear = "";
    var movieType = "";
    var code = event.which;
    if (code === 13) {
      movieTag = $("#title").val().replace(/ /g, "+");
      movieYear = $("#year").val();
      movieType = $("#type").val().toLowerCase();
      if (movieTag === "") {
        alert("Please enter a title!");
      }
      else {
        getMovieInfo(movieTag, movieType, movieYear);
      }
    }
  }); //  Movie Search Enter Key event

  $("#hideMovies").on("click", function() {
    if ($(this).text() === "Hide Movies") {
      $(this).text("Show Movies");
      $(".movies").slideToggle("show");
    }
    else {
      $(this).text("Hide Movies");
      $(".movies").slideToggle("show");
    }
  }); //  showMyMovies button

  $("#clear").on("click", function() {
    if (($("#searchDisplay").children().length === 0)) {
      alert("Movies have been cleared");
    }
    else {
      $("#searchDisplay").empty();
    }
  }); //  Clear Button

  $("#faqButton").on("click", function() {
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
    $("#myDisplay").append("<div id=\"myMovie-" + (myMovieNum) +"\" class=\"movies\"></div>");
    $("#myMovie-" + (myMovieNum)).append("<img src=\"" + movieObj.Poster + "\">",
                              "<h3>" + movieObj.Title + "</h3>",
                              "<p><b> Directed by:</b> " + movieObj.Director + "</p>",
                              "<p><b> Date Released:</b> " + movieObj.Released + "</p>",
                              "<p><b> Run-Time:</b> " + movieObj.Runtime + "</p>",
                              "<p><b> Genre:</b> " + movieObj.Genre + "</p>",
                              "<p><b> IMDB Rating:</b> " + movieObj.Rated + "</p>",
                              "<p><b> Story By:</b> " + movieObj.Writer + "</p>",
                              "<p><b> Actors:</b> " + movieObj.Actors + "</p>",
                              "<p><b> Language(s):</b> " + movieObj.Language + "</p>",
                              "<p><b> Plot:</b> " + movieObj.Plot + "</p>");

    $("#myMovie-" + myMovieNum).css({"margin" : "5px", "border" : "1px solid pink", "padding" : "5px"});

    myMovieNum += 1;
    // console.log(myMovieNum, searchMovieNum);
  } //  displayMyMovies

  function displaySearchMovies(movieObj) {
    // console.log(myMovieNum, searchMovieNum);
    $("#searchDisplay").append("<div id=\"Movie-" + (searchMovieNum) +"\" class=\"movies\"></div>");
    $("#Movie-" + (searchMovieNum)).append("<img src=\"" + movieObj.Poster + "\">",
                              "<h3>" + movieObj.Title + "</h3>",
                              "<p><b> Directed by:</b> " + movieObj.Director + "</p>",
                              "<p><b> Date Released:</b> " + movieObj.Released + "</p>",
                              "<p><b> Run-Time:</b> " + movieObj.Runtime + "</p>",
                              "<p><b> Genre:</b> " + movieObj.Genre + "</p>",
                              "<p><b> IMDB Rating:</b> " + movieObj.Rated + "</p>",
                              "<p><b> Story By:</b> " + movieObj.Writer + "</p>",
                              "<p><b> Actors:</b> " + movieObj.Actors + "</p>",
                              "<p><b> Language(s):</b> " + movieObj.Language + "</p>",
                              "<p><b> Plot:</b> " + movieObj.Plot + "</p>");

    $("#Movie-" + searchMovieNum).css({"margin" : "5px", "border" : "1px solid pink", "padding" : "5px"});

    searchMovieNum += 1;
    // console.log(myMovieNum, searchMovieNum);
  } //  displaySearchMovies
}); //  Doc-ready function
