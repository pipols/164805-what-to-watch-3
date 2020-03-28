import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player.jsx";
import {getFilm} from "../../reducer/state/selector";

const VideoPlayer = (props) => {
  const {id, onFilmIdSet, isPlay, onTimeUpdate, setDuration, onExitClick, progress, duration, onPlayClick, onFullscreenClick, forwardedRef} = props;
  const {title, videoLink} = props.film;
  onFilmIdSet(id);

  return (
    <div className="player">
      <video
        ref={forwardedRef}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={setDuration}
        src={videoLink}
        className="player__video"
        poster="img/player-poster.jpg">
      </video>

      <button onClick={onExitClick} type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{duration}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={onPlayClick} type="button" className="player__play">
            {isPlay || <><svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
              <span>Play</span></>}

            {isPlay && <><svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref="#pause"></use>
            </svg>
              <span>Pause</span></>}
          </button>
          <div className="player__name">{title}</div>
          <button onClick={onFullscreenClick} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  isPlay: PropTypes.bool.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  setDuration: PropTypes.func.isRequired,
  onExitClick: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onFullscreenClick: PropTypes.func.isRequired,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any})
  ]),
  progress: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
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
  onFilmIdSet: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  film: getFilm(state)
});

const mapDispatchToProps = (dispatch) => ({
  onExitClick() {
    dispatch(ActionCreator.setActivePlayer(false));
  },
  onFilmIdSet(id) {
    dispatch(ActionCreator.setId(parseInt(id, 10)));
  }
});

const VideoPlayerWrap = React.forwardRef((props, ref) => <VideoPlayer {...props} forwardedRef={ref} />);

export {VideoPlayer};
export default connect(mapStateToProps, mapDispatchToProps)(withVideoPlayer(React.memo(VideoPlayerWrap)));
