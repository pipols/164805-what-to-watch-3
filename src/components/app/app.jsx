import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Film from "../film/film.jsx";
import film from "../../mocks/film";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };
    this.onMovieClick = this.onMovieClick.bind(this);
  }

  onMovieClick(card) {
    this.setState({activeCard: card});
  }

  render() {
    const {promoMovieData, filmsData} = this.props;

    if (this.state.activeCard === null) {
      return (
        <Main
          promoMovieData={promoMovieData}
          filmsData={filmsData}
          onMovieClick={this.onMovieClick}
        />);
    }

    return (
      <Film
        film={film}
        filmsData={filmsData.slice(0, 4)}
        onMovieClick={this.onMovieClick}
      />);
  }
}

App.propTypes = {
  promoMovieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  filmsData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  })).isRequired,
  film: PropTypes.shape({
    poster: PropTypes.string.isRequired,
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
  })
};

export default App;
