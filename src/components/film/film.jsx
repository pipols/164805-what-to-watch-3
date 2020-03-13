import React from "react";
import PropTypes from "prop-types";
import Details from "../tabs/details/details.jsx";
import Reviews from "../tabs/reviews/reviews.jsx";
import Overview from "../tabs/overview/overview.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import Logo from "../logo/logo.jsx";
import Footer from "../footer/footer.jsx";
import Tabs from "../tabs/tabs.jsx";
import {TabName} from "../../const/common";

const PREFIX = `img/`;
// убрать state табов
class Film extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeTab: TabName.OVERVIEW};
    this._onTabClick = this._onTabClick.bind(this);
  }

  _onTabClick(tab) {
    this.setState({activeTab: tab});
  }

  render() {
    const {
      poster,
      cover,
      title,
      genre,
      year
    } = this.props.film;

    return (<React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={PREFIX + poster} alt={title}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <Logo />
            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width={63} height={63}/>
              </div>
            </div>
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={PREFIX + cover} alt={title + `poster`} width={218} height={327}/>
            </div>
            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <Tabs onTabClick={this._onTabClick} activeTab={this.state.activeTab} />
              </nav>

              {this.state.activeTab === TabName.OVERVIEW && <Overview {...this.props.film} />}
              {this.state.activeTab === TabName.DETAILS && <Details {...this.props.film} />}
              {this.state.activeTab === TabName.REVIEWS && <Reviews {...this.props.film} />}

            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">
            More like this
          </h2>
          <MoviesList />
        </section>
        <Footer />
      </div>
    </React.Fragment>);
  }
}

Film.propTypes = {
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

export default Film;
