import React from "react";
// import PropTypes from "prop-types";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      isPlay: props.isPlay
    };
  }

  render() {
    const {preview, poster} = this.props;

    return (
      <video ref={this.videoRef} src={preview} autoPlay poster={poster} muted width="280" height="175"/>
    );
  }
}

export default VideoPlayer;
