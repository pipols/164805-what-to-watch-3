import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const DELAY = 1000;

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {hoverCard: null};
    this._onMovieHover = this._onMovieHover.bind(this);
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) =>
          <SmallMovieCard
            film={film}
            key={film.title + i}
            onMovieHover={this._onMovieHover}
            isPlay={this.state.hoverCard === film}/>
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
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    ratingDescription: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      votes: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      reviewDate: PropTypes.string.isRequired
    }))
  }))
};

export default MoviesList;
