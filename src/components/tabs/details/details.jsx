import React from "react";
import PropTypes from "prop-types";
// упростить: императивно || декларативно || "пох"
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

const writeActors = (actors) => actors.map((name) => <> {name} <br/> </>);

const Details = ({producer, actors, duration, genre, year}) => {
  const data = {producer, actors, duration, genre, year};
  return (
    <div className="movie-card__text movie-card__row">
      {structure(data).map((col) => (
        <div key={col} className="movie-card__text-col">
          {col.map((item) => (
            <p key={item} className="movie-card__details-item">
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
// //////////////////////////////////////////////////
// const Details = ({producer, actors, duration, genre, year}) => (
//   <div className="movie-card__text movie-card__row">
//     <div className="movie-card__text-col">
//       <p className="movie-card__details-item">
//         <strong className="movie-card__details-name">Director</strong>
//         <span className="movie-card__details-value">{producer}</span>
//       </p>
//       <p className="movie-card__details-item">
//         <strong className="movie-card__details-name">Starring</strong>
//         <span className="movie-card__details-value">
//           {actors.map((name) => <> {name} <br/> </>)}
//         </span>
//       </p>
//     </div>
//
//     <div className="movie-card__text-col">
//       <p className="movie-card__details-item">
//         <strong className="movie-card__details-name">Run Time</strong>
//         <span className="movie-card__details-value">{duration}</span>
//       </p>
//       <p className="movie-card__details-item">
//         <strong className="movie-card__details-name">Genre</strong>
//         <span className="movie-card__details-value">{genre}</span>
//       </p>
//       <p className="movie-card__details-item">
//         <strong className="movie-card__details-name">Released</strong>
//         <span className="movie-card__details-value">{year}</span>
//       </p>
//     </div>
//   </div>
// );

Details.propTypes = {
  producer: PropTypes.string.isRequired,
  actors: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default Details;
