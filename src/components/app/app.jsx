import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main.jsx";
import Film from "../Film/Film.jsx";
import film from "../../mocks/film";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };
    this.onMovieClick = this.onMovieClick.bind(this);
  }

  render() {
    const {promoMovieData, filmsData} = this.props;
    // const film = this.state.activeCard;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              promoMovieData={promoMovieData}
              filmsData={filmsData}
              onMovieClick={this.onMovieClick}
            />
          </Route>
          <Route exact path="/movie-page">
            <Film film={film}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  onMovieClick(card) {
    this.setState({activeCard: card});
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
    poster: PropTypes.string.isRequired
  })).isRequired,
  film: PropTypes.object
};

export default App;
