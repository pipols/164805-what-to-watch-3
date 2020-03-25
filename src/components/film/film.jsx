import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Details from "../tabs/details/details.jsx";
import Reviews from "../tabs/reviews/reviews.jsx";
import Overview from "../tabs/overview/overview.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import Logo from "../logo/logo.jsx";
import Footer from "../footer/footer.jsx";
import Tabs from "../tabs/tabs.jsx";
import {TabName} from "../../const/common";
import {getfilmsByGenre} from "../../utils/utils";
import {CardCount} from "../../const/common";
import {ActionCreator} from "../../reducer/state/state";
import {getFilms} from "../../reducer/data/selector";
import {getGenre} from "../../reducer/state/selector";
import {DataOperation} from "../../reducer/data/data";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

class Film extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _onTabClick(tab) {
    this.setState({activeTab: tab});
  }

  componentDidMount() {
    const id = this.props.film.id;
    this.props.onLoadComments(id);
  }

  componentDidUpdate(prevProps) {
    const newId = prevProps.film.id;
    const prevId = this.props.film.id;

    if (prevId !== newId) {
      this.props.onLoadComments(newId);
    }
  }

  render() {
    const {poster, cover, title, genre, year} = this.props.film;
    const activeItem = this.props.activeItem || TabName.OVERVIEW;

    return (<React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={poster} alt={title}/>
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
                <button onClick={this.props.onPlayClick} className="btn btn--play movie-card__button" type="button">
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
              <img src={cover} alt={title + `poster`} width={218} height={327}/>
            </div>
            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <Tabs onItemClick={this.props.onItemClick} activeItem={activeItem} />
              </nav>

              {activeItem === TabName.OVERVIEW && <Overview {...this.props.film} />}
              {activeItem === TabName.DETAILS && <Details film={this.props.film} />}
              {activeItem === TabName.REVIEWS && <Reviews />}

            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">
            More like this
          </h2>
          <MoviesList films={
            getfilmsByGenre(this.props.films, this.props.currentGenre)
            .slice(0, CardCount.SIMILAR)
          } />
        </section>
        <Footer />
      </div>
    </React.Fragment>);
  }
}

Film.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    duration: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    producer: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    duration: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })),
  currentGenre: PropTypes.string.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onLoadComments: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  currentGenre: getGenre(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlayClick() {
    dispatch(ActionCreator.setActivePlayer(true));
  },
  onLoadComments(id) {
    dispatch(DataOperation.loadComments(id));
  },
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(Film));
