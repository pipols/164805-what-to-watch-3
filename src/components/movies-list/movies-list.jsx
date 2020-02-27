import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const DELAY = 1000;

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.hoverCard = null;
    this.timerId = null;
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
            onMovieHover={this._onMovieHover}
            isPlay={this.state.hoverCard === movie}/>
        )}
      </div>
    );
  }

  _onMovieHover(card) {
    this.hoverCard = card;
    return card
      ? this._setTimeout()
      : this._clearTimeout();
  }

  _setTimeout() {
    this.timerId = setTimeout(() => this.setState({hoverCard: this.hoverCard}), DELAY);
  }

  _clearTimeout() {
    clearTimeout(this.timerId);
    this.setState({hoverCard: null});
  }
}

MoviesList.propTypes = {
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired})).isRequired,
  onMovieClick: PropTypes.func.isRequired
};

export default MoviesList;
