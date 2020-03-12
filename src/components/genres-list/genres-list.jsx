import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionType} from "../../reducer";
import {getFilters} from "../../utils/utils";

const DEFAULT_FILTER = `All genres`;

const GenresList = ({onFilterClick, filters}) => {
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
  filters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onFilterClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  filters: getFilters(state.films)
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(filter) {
    dispatch({type: ActionType.SET_GENRES_FILTER, payload: filter});
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
