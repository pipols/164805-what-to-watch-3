import React from "react";
import PropTypes from "prop-types";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {preview, poster} = this.props;

    return (
      <video src={preview} autoPlay poster={poster} muted width="280" height="175"/>
    );
  }
}

VideoPlayer.propTypes = {
  preview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default VideoPlayer;
