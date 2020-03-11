import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionType} from "../../reducer";
import {mapGenresToFilter} from "../../const/genres";

const MAX_GENRES = 9;
const DEFAULT_FILTER = `All genres`;
// уникальные жанры из фильмов
const getUniqueGenres = (films) => {
  const genresList = films.map((film) => film.genre);
  const uniqueGenres = new Set(genresList);
  return [...uniqueGenres].slice(0, MAX_GENRES);
};

const getFilters = (films) => getUniqueGenres(films).map((genre) => mapGenresToFilter.get(genre));

const GenresList = ({films, onFilterClick}) => {
  const filters = getFilters(films);
  filters.unshift(DEFAULT_FILTER);

  return (
    <ul className="catalog__genres-list">
      {filters.map((filter) =>
        <li key={filter} className="catalog__genres-item">
          <a
            onClick={(evt) => {
              evt.preventDefault();
              onFilterClick(filter);
            }}
            href="#"
            className="catalog__genres-link">{filter}
          </a>
        </li>
      )}
    </ul>
  );
};

GenresList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  })).isRequired,
  onFilterClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(filter) {
    dispatch({type: ActionType.SET_GENRE, payload: filter});
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
