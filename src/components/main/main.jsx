import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MoviesList from "../movies-list/movies-list.jsx";
import Footer from "../footer/footer.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import ButtonShowMore from "../button-show-more/button-show-more.jsx";
import {ActionCreator} from "../../reducer/state/state";
import {getIsShowButtonSelector, getShownFilmsSelector} from "../../reducer/state/selector";
import {getPromoMovie} from "../../reducer/data/selector";
import Header from "../header/header.jsx";
import {ClassName} from "../../const/common";
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons.jsx";

const Main = ({promoMovieData, isShowButton, films, onFilmIdSet}) => {
  const {title, genre, year, backgroundImage, posterImage, id, isFavorite} = promoMovieData;
  onFilmIdSet(id);

  return (<React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header className={ClassName.HEADER_MOVIE_CARD} />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={title} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{year}</span>
            </p>

            <MovieCardButtons isMainPage filmId={id} isFavorite={isFavorite} />

          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList/>

        <MoviesList films={films} />
        {isShowButton && <ButtonShowMore/>}
      </section>

      <Footer />

    </div>
  </React.Fragment>);
};

Main.propTypes = {
  promoMovieData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }),
  isShowButton: PropTypes.bool.isRequired,
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
  onFilmIdSet: PropTypes.func.isRequired,
  // setActiveFilm: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isShowButton: getIsShowButtonSelector(state),
  films: getShownFilmsSelector(state),
  promoMovieData: getPromoMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilmIdSet(id) {
    dispatch(ActionCreator.setId(parseInt(id, 10)));
  }
  // setActiveFilm(film) {
  //   dispatch(ActionCreator.setActiveFilm(film));
  // },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Main));
