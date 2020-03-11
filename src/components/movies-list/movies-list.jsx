import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {connect} from "react-redux";
import {mapGenresToFilter} from "../../const/genres";

const DELAY = 1000;
const DEFAULT_FILTER = `All genres`;

const getKeyToMap = (map, value) => [...map].find(([, val]) => val === value)[0];

const getFilmsByFilter = (films, filterValue) => {
  const genre = getKeyToMap(mapGenresToFilter, filterValue);
  if (filterValue === DEFAULT_FILTER) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.timerId = null;
    this.state = {hoverCard: null};
    this._onMovieHover = this._onMovieHover.bind(this);
  }

  render() {
    const {films, genre, onMovieClick} = this.props;
    const sortedFilms = getFilmsByFilter(films, genre);

    return (
      <div className="catalog__movies-list">

        {sortedFilms.map((movie, i) =>
          <SmallMovieCard
            movie={movie}
            key={movie.title + i}
            onMovieClick={onMovieClick}
            onMovieHover={this._onMovieHover}
            isPlay={this.state.hoverCard === movie}/>
        )}
      </div>
    );
  }

  _onMovieHover(card) {
    return card
      ? this._setTimeout(card)
      : this._clearTimeout();
  }

  _setTimeout(card) {
    this.timerId = setTimeout(() => this.setState({hoverCard: card}), DELAY);
  }

  _clearTimeout() {
    clearTimeout(this.timerId);
    this.setState({hoverCard: null});
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired})).isRequired,
  onMovieClick: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  genre: state.genre
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
