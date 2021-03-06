import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer/state/state";
import {getGenreByFilter} from "../../utils/utils";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import {getFiltersSelector} from "../../reducer/state/selector";
// import {Link} from "react-router-dom";

const SELECTED_GENRE_CLASS = `catalog__genres-item--active`;
const DEFAULT_FILTER = `All genres`;

const GenresList = ({onFilterClick, filters, onItemClick, activeItem}) => {
  const activeFilter = activeItem || DEFAULT_FILTER;
  const handlerLinkClick = (evt, filter) => {
    evt.preventDefault();
    onFilterClick(filter);
    onItemClick(filter);
  };

  return (
    <ul className="catalog__genres-list">
      {filters.map((filter) =>
        <li key={filter} className={`catalog__genres-item ${activeFilter === filter ? SELECTED_GENRE_CLASS : ``}`}>
          <a
            onClick={(evt) => handlerLinkClick(evt, filter)}
            className="catalog__genres-link">{filter}
          </a>
        </li>
      )}
    </ul>
  );
};

GenresList.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onFilterClick: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string
};

const mapStateToProps = (state) => ({
  filters: getFiltersSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(filter) {
    dispatch(ActionCreator.setGenre(getGenreByFilter(filter)));
    dispatch(ActionCreator.resetStack());
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(withActiveItem(GenresList)));
