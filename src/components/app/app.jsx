import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Film from "../film/film.jsx";
// import film from "../../mocks/film";
import {connect} from "react-redux";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.activeFilm === null
        ? <Main promoMovieData={this.props.promoMovieData} />
        // : <Film film={film} />
        : <Film film={this.props.activeFilm} />
    );
  }
}

App.propTypes = {
  promoMovieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    movieGenre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  activeFilm: PropTypes.shape({
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
  })
};

const mapStateToProps = (state) => ({
  activeFilm: state.activeFilm
});

export {App};
export default connect(mapStateToProps)(App);
