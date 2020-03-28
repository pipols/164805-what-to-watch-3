import React from "react";
import PropTypes from "prop-types";

const structure = (data) => [[
  {
    name: `Director`,
    value: data.producer
  },
  {
    name: `Starring`,
    value: data.actors
  }
],
[
  {
    name: `Run time`,
    value: data.duration
  },
  {
    name: `Genre`,
    value: data.genre
  },
  {
    name: `Released`,
    value: data.year
  }
]];

const writeActors = (actors) => actors.map((name) => <React.Fragment key={name}> {name} <br/> </ React.Fragment>);

const Details = ({film}) => {
  return (
    <div className="movie-card__text movie-card__row">
      {structure(film).map((col, i) => (
        <div key={`col` + i} className="movie-card__text-col">
          {col.map((item) => (
            <p key={item.name} className="movie-card__details-item">
              <strong className="movie-card__details-name">{item.name}</strong>
              <span className="movie-card__details-value">
                {item.name === `Starring` ? writeActors(item.value) : item.value}
              </span>
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

Details.propTypes = {
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
};

export default React.memo(Details);
