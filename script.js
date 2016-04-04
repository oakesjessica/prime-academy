$(function() {
  var myMovieNum = 0;
  var searchMovieNum = 0;

  //  My Movies
  $.get("http://www.omdbapi.com/?t=atlantis+the+lost+empire&y=&plot=full&r=json").done(function(response) {
    var movie1 = response;
    displayMyMovies(movie1);
  }); //  Atlantis: The Lost Empire

  $.get("http://www.omdbapi.com/?t=brotherhood+of+war&y=&plot=short&r=json").done(function(response) {
    var movie2 = response;
    displayMyMovies(movie2);
  }); //  Brotherhood of War

  $.get("http://www.omdbapi.com/?t=fiddler+on+the+roof&y=&plot=short&r=json").done(function(response) {
    var movie3 = response;
    displayMyMovies(movie3);
  }); //  Fiddler on the Roof

  //  Search Button
  $("#search").on("click", function() {
    //  Initialize empty variables
    var movieTag = "";
    var movieYear = "";
    var movieType = "";

    //  Assign title, year, and type to variables
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

  //  Enter Button Search for title/year search fields
  $("#title, #year").keypress(function(event) {
    var movieTag = "";
    var movieYear = "";
    var movieType = "";
    var code = event.which;

    //  If enter key was pressed
    if (code === 13) {
      //  Assign title, year, and type to variables
      movieTag = $("#title").val().replace(/ /g, "+");
      movieYear = $("#year").val();
      movieType = $("#type").val().toLowerCase();

      //  Alert if title value is empty, otherwise get info from API
      if (movieTag === "") {
        alert("Please enter a title!");
      }
      else {
        getMovieInfo(movieTag, movieType, movieYear);
      }
    }
  }); //  Enter keypress event for title/year

  $("#hideMovies").on("click", function() {
    //  Toggle movies display and change button text
    if ($(this).text() === "Hide Movies") {
      $(this).text("Show Movies");
      $(".movies").slideToggle("show");
    }
    else {
      $(this).text("Hide Movies");
      $(".movies").slideToggle("show");
    }
  }); //  hideMovies button

  $("#clear").on("click", function() {
    //  Alert if movies have already been cleared, otherwise empty display and reset num back to zero
    if (($("#searchDisplay").children().length === 0)) {
      alert("Movies have been cleared");
    }
    else {
      $("#searchDisplay").empty();
      searchMovieNum = 0;
    }
  }); //  Clear Button

  $("#faqButton").on("click", function() {
    alert("Coming Soon ;)");
  }); //  FAQ Button

  //  Clear field when clicked again, only works if input field is not selected
  //  For now, only year field as user may want to edit title
  //  In case it's long, user does not have to re-type over again

  // $("#title").focus(
  //   function(){
  //     $(this).val("");
  // }); //  clear #title input

  $("#year").focus(
    function(){
      $(this).val("");
  }); //  clear #year input

  /*API search function*/
  function getMovieInfo(title, type, year) {
    $.get("http://www.omdbapi.com/", {
      t: title,
      type: type,
      y: year,
      plot: "full",
      r: "json"}).done(function(response) {
        displaySearchMovies(response);
    }).fail(function(response) {
      console.log("Failed");
    }); //  AJAX finished
  } //  getMovieInfo

  //  Listener event for slide button
  //  Toggle that button's content class sibling and change text
  $(document).on("click", ".slideButton", function() {
    if ($(this).text() === "Slide Down") {
      $(this).text("Slide Up");
      $(this).siblings(".content").slideToggle("show");
    }
    else {
      $(this).text("Slide Down");
      $(this).siblings(".content").slideToggle("show");
    }
  }); //  Slide button for content

  function displayMyMovies(movieObj) {
    //  Section for movie info, add image and title at top
    $("#myDisplay").append("<section id=\"myMovie-" + (myMovieNum) + "\" class=\"displayMovies\"></section>");
    $("#myMovie-" + (myMovieNum)).append("<img src=\"" + movieObj.Poster + "\">",
      "<h3>" + movieObj.Title + "</h3>");

    //  Add div and append rest of info
    $("#myMovie-" + (myMovieNum)).append("<div id=\"myContent-" + (myMovieNum) + "\" class=\"content\"></div>");
    $("#myContent-" + (myMovieNum)).append("<p><b> Directed by:</b> " + movieObj.Director + "</p>",
      "<p><b> Date Released:</b> " + movieObj.Released + "</p>",
      "<p><b> Run-Time:</b> " + movieObj.Runtime + "</p>",
      "<p><b> Genre:</b> " + movieObj.Genre + "</p>",
      "<p><b> IMDB Rating:</b> " + movieObj.Rated + "</p>",
      "<p><b> Story By:</b> " + movieObj.Writer + "</p>",
      "<p><b> Actors:</b> " + movieObj.Actors + "</p>",
      "<p><b> Language(s):</b> " + movieObj.Language + "</p>",
      "<p><b> Plot:</b> " + movieObj.Plot + "</p>");

    //  Hide content
    $(".content").hide();

    //  Append slide down button
    $("#myMovie-" + (myMovieNum)).append("<button class=\"slideButton\">" + "Slide Down" + "</button>");

    myMovieNum += 1;  //  Increment myMovieNum
  } //  displayMyMovies

  function displaySearchMovies(movieObj) {
    //  Section for movie info, add image and title at top
    $("#searchDisplay").append("<section id=\"Movie-" + (searchMovieNum) + "\" class=\"displayMovies\"></section>");
    $("#Movie-" + (searchMovieNum)).append("<img src=\"" + movieObj.Poster + "\">" + "<h3>" + movieObj.Title + "</h3>");

    //  Add div and append rest of info
    $("#Movie-" + (searchMovieNum)).append("<div id=\"searchContent-" + (searchMovieNum) + "\" class=\"content\"></div>");
    $("#searchContent-" + (searchMovieNum)).append("<p><b> Directed by:</b> " + movieObj.Director + "</p>",
      "<p><b> Date Released:</b> " + movieObj.Released + "</p>",
      "<p><b> Run-Time:</b> " + movieObj.Runtime + "</p>",
      "<p><b> Genre:</b> " + movieObj.Genre + "</p>",
      "<p><b> IMDB Rating:</b> " + movieObj.Rated + "</p>",
      "<p><b> Story By:</b> " + movieObj.Writer + "</p>",
      "<p><b> Actors:</b> " + movieObj.Actors + "</p>",
      "<p><b> Language(s):</b> " + movieObj.Language + "</p>",
      "<p><b> Plot:</b> " + movieObj.Plot + "</p>");

    //  Hide content
    $(".content").hide();

    //  Append slide down button
    $("#Movie-" + (searchMovieNum)).append("<button class=\"slideButton\">" + "Slide Down" + "</button>");

    searchMovieNum += 1;  //  Increment searchMovieNum
  } //  displaySearchMovies
}); //  Doc-ready function
