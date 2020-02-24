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
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
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

  _renderApp() {
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
      <Film film={film}/>
    );
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
