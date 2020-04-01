import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Details from "../tabs/details/details.jsx";
import Reviews from "../tabs/reviews/reviews.jsx";
import Overview from "../tabs/overview/overview.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import Footer from "../footer/footer.jsx";
import Tabs from "../tabs/tabs.jsx";
import {TabName} from "../../const/common";
import {getfilmsByGenre} from "../../utils/utils";
import {CardCount, ClassName} from "../../const/common";
import {getFilms} from "../../reducer/data/selector";
import {getGenre, getFilm} from "../../reducer/state/selector";
import {DataOperation} from "../../reducer/data/data";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import Header from "../header/header.jsx";
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons.jsx";
import Preloader from "../preloader/preloader.jsx";

class Film extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  component() {
    const activeItem = this.props.activeItem || TabName.OVERVIEW;
    const {poster, cover, title, genre, year, id, isFavorite} = this.props.film;
    this.props.onCommentsMount(id);
    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={poster} alt={title}/>
            </div>
            <h1 className="visually-hidden">WTW</h1>

            <Header className={ClassName.HEADER_MOVIE_CARD} />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{year}</span>
                </p>

                <MovieCardButtons filmId={id} isFavorite={isFavorite} />

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

                {activeItem === TabName.OVERVIEW && <Overview />}
                {activeItem === TabName.DETAILS && <Details />}
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

  render() {
    return this.props.film
      ? this.component()
      : <Preloader />;
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
  onCommentsMount: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  currentGenre: getGenre(state),
  film: getFilm(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCommentsMount(id) {
    dispatch(DataOperation.loadComments(id));
  },
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(withActiveItem(Film));
