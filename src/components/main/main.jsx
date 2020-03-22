import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Logo from "../logo/logo.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import Footer from "../footer/footer.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import ButtonShowMore from "../button-show-more/button-show-more.jsx";
import {getfilmsByGenre} from "../../utils/utils";
import {ActionCreator} from "../../reducer";
import {getIsShowButtonSelector, getFilms, getGenre, getShownCardsStack} from "../../selectors";

// список genres циклом
const Main = ({promoMovieData, isShowButton, films, currentGenre, shownCardsStack, onPlayClick}) => {
  const {title, genre, year} = promoMovieData;
  return (<React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo />
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{year}</span>
            </p>

            <div className="movie-card__buttons">
              <button onClick={onPlayClick} className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList/>
        <MoviesList films={getfilmsByGenre(films, currentGenre).slice(0, shownCardsStack)} />
        {isShowButton && <ButtonShowMore/>}
      </section>
      <Footer />
    </div>
  </React.Fragment>);
};

Main.propTypes = {
  promoMovieData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired,
  isShowButton: PropTypes.bool.isRequired,
  currentGenre: PropTypes.string.isRequired,
  shownCardsStack: PropTypes.number.isRequired,
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
  })),
  onPlayClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isShowButton: getIsShowButtonSelector(state),
  films: getFilms(state),
  currentGenre: getGenre(state),
  shownCardsStack: getShownCardsStack(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPlayClick() {
    dispatch(ActionCreator.setActivePlayer(true));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
