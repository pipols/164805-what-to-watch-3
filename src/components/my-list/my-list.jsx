import React from "react";
import PropTypes from "prop-types";
import {ClassName} from "../../const/common";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import {connect} from "react-redux";
import {getFavoriteFilms} from "../../reducer/data/selector";
import Preloader from "../preloader/preloader.jsx";

const MyList = ({films}) => {
  return films
    ? <div className="user-page">
      <Header className={ClassName.HEADER_USER_PAGE} />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList films={films} />
      </section>

      <Footer />
    </div>
    : <Preloader />;
};

MyList.propTypes = {
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
  onLoadFavoriteFilms: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: getFavoriteFilms(state)
});

export {MyList};
export default connect(mapStateToProps)(React.memo(MyList));
