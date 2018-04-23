import React, { Component } from "react";
import Movie from "./Movie";

class MovieList extends Component {
  render(){
    const movieNodes = this.props.data.map(movie => {
      return (
        <Movie title={movie.title} key={movie.id}>
          {movie.showtime}
        </Movie>
      );
    });
    return <div className="movieList">{movieNodes}</div>;
  }
}

export default MovieList;
