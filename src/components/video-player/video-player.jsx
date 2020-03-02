import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({preview, poster}) => <video src={preview} autoPlay poster={poster} muted width="280" height="175"/>;

VideoPlayer.propTypes = {
  preview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default VideoPlayer;
