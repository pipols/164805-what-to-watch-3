import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {connect} from "react-redux";
import {getfilmsByGenre} from "../../utils/utils";
import {CardCount} from "../../const/common";

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
        {films.map((movie, i) =>
          <SmallMovieCard
            movie={movie}
            key={movie.title + i}
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
    preview: PropTypes.string.isRequired})
  ).isRequired
};

const mapStateToProps = (state) => ({
  films: state.activeFilm
    ? getfilmsByGenre(state.films, state.genre)
      .slice(0, CardCount.SIMILAR)
    : getfilmsByGenre(state.films, state.genre)
      .slice(0, state.shownCardsStack)
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
