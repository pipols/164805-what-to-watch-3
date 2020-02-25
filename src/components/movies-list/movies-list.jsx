import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {hoverCard: null};
    this._onMovieHover = this._onMovieHover.bind(this);
  }

  render() {
    const {filmsData, onMovieClick} = this.props;
    return (
      <div className="catalog__movies-list">

        {filmsData.map((movie, i) =>
          <SmallMovieCard
            movie={movie}
            key={movie.title + i}
            onMovieClick={onMovieClick}
            onMovieHover={this._onMovieHover}/>
        )}
      </div>
    );
  }

  _onMovieHover(film) {
    this.setState({hoverCard: film});
  }
}

MoviesList.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired})).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

export default MoviesList;
