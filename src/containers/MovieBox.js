import React, { Component } from "react";
import MovieList from "../components/MovieList";
import '../App.css';

class MovieBox extends Component {
  constructor(props){
    super(props);
    this.state =  {
      data: [{ id: 1, title: "Equity", showtime: "12:00, 15:15, 18:00 "},
    { id: 2, title: "Morgan", showtime: "10:00, 13:00, 21:00"}, { id: 3, title: "Sausage Party", showtime: "20:00, 22:30, 23:00"}, { id: 4, title: "Things to Come", showtime: "11:10, 15:00, 21:30"}, { id: 5, title: "Cafe Society", showtime: "10:15, 12:30, 23:05"}]
    };
  }
  render(){
    return (
      <div className="movie-box">
      <h2>Films & Showtimes</h2><br></br>

      <MovieList data={this.state.data} />
    </div>
  );
  }
}

export default MovieBox;
