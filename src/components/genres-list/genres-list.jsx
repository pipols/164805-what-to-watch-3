import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer";
import {getFilters, getGenreByFilter} from "../../utils/utils";

const GenresList = ({onFilterClick, filters}) => {
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
  filters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onFilterClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  filters: getFilters(state.films)
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(filter) {
    dispatch(ActionCreator.setGenre(getGenreByFilter(filter)));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
