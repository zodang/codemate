function Movie(title, date, star) {
    this.title = title;
    this.date = date;
    this.star = star;
}

var sen = new Movie("센과 치히로의 행방불명", "2002.06.28", 9.58);
var titanic = new Movie("타이타닉", "1998.02.20", 9.88);
var opera = new Movie("오페라의 유령", "2004.12.08", 8.85);

function button_click(movie) {
    document.getElementById("title").innerHTML = movie.title;
    document.getElementById("date").innerHTML = "개봉: " + movie.date;
    document.getElementById("star").innerHTML = "평점: " + movie.star;
}



