import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import {connect} from "react-redux";
import {getFilm} from "../../reducer/state/selector";
import {Link} from "react-router-dom";
import Preloader from "../preloader/preloader.jsx";
import {DataOperation} from "../../reducer/data/data";
import {getReviewFormStatus} from "../../reducer/state/selector";
import {ActionCreator} from "../../reducer/state/state";
import withReviewForm from "../../hocs/with-review-form/with-review-form.jsx";

const NUMBER_STARS = 5;

class AddReview extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onReviewSubmit(
        this.props.film.id,
        {
          rating: this.props.rating,
          comment: this.props.reviewText
        }
    );
  }

  component() {
    const {title, poster, cover, id} = this.props.film;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={poster} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/film/${id}`} className="breadcrumbs__link">{title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
          </Header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={cover} alt={title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#"
            onSubmit={this.handleSubmit}
            className="add-review__form" >
            <div className="rating">
              <div className="rating__stars">

                {new Array(NUMBER_STARS).fill(``).map((_, i) => {
                  const index = i + 1;
                  return (
                    <React.Fragment key={index}>
                      <input
                        className="rating__input"
                        id={`star-${index}`}
                        type="radio" name="rating"
                        defaultValue={index}
                        defaultChecked={!i}
                        onChange={this.props.onFieldChange}
                      />
                      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="reviewText"
                id="review-text"
                placeholder="Review text"
                minLength={50}
                maxLength={400}
                required
                disabled={false}
                onChange={this.props.onFieldChange} >

              </textarea>
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled={this.props.isFormDisabled } >Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }

  render() {
    return this.props.film
      ? this.component()
      : <Preloader />;
  }
}

AddReview.propTypes = {
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
  onReviewSubmit: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  isFormDisabled: PropTypes.bool.isRequired,
  isTextareaValid: PropTypes.bool.isRequired,
  rating: PropTypes.string.isRequired,
  reviewText: PropTypes.string,
};

const mapStateToProps = (state) => ({
  film: getFilm(state),
  isFormDisabled: getReviewFormStatus(state)
});

const mapDispatchoProps = (dispatch) => ({
  onReviewSubmit(id, comment) {
    dispatch(DataOperation.postComments(id, comment));
    dispatch(ActionCreator.setFormDisabledStatus(true));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchoProps)(withReviewForm(AddReview));
