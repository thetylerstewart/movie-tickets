function Ticket() {
  this.movies = {};
  this.ticketPrice = 0;
}


Ticket.prototype.moviePrice = function (movie) {
  movie.price = this.assignPrice(movie)
}

Ticket.prototype.assignPrice = function (movie) {
  if (movie.movieName == "ace") {
    this.moviePrice = 10
  } else if (movie.movieName == "dumb") {
    this.moviePrice = 12
  } else if (movie.movieName == "rambo") {
    this.moviePrice = 14
  }
  return this.moviePrice
}

function Movie(movieName, movieTime, userAge) {
  this.movieName = movieName
  this.movieTime = movieTime
  this.userAge = userAge
}

//user interface
let ticket = new Ticket()

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    const inputtedMovie = $('#movie-select').val()
    const inputtedTime = $('#time-select').val()
    const inputtedAge = $('#age-select').val()
    console.log(inputtedMovie, inputtedTime, inputtedAge)
    $('#movie-cost').show();

    let newMovie = new Movie(inputtedMovie, inputtedTime, inputtedAge)
    ticket.moviePrice(newMovie)
    $(".price").html(newMovie.price)
    $(".price").show()

  })
})