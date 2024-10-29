import "media-chrome";
import { Component } from "react";
import "./styles.module.css";

class MediaChrome extends Component {
  render() {
    return (
      <media-controller>
        <video
          slot="media"
          src="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4"
        ></video>
        <media-control-bar>
          <media-play-button></media-play-button>
          <media-seek-forward-button></media-seek-forward-button>
          <media-seek-backward-button></media-seek-backward-button>
          <media-mute-button></media-mute-button>
          <media-volume-range></media-volume-range>
          <media-time-range></media-time-range>
          <media-time-display></media-time-display>
          <media-captions-button></media-captions-button>
          <media-playback-rate-button></media-playback-rate-button>
          <media-pip-button></media-pip-button>
          <media-fullscreen-button></media-fullscreen-button>
        </media-control-bar>
      </media-controller>
    );
  }
}

export default function MediaChromePage() {
  return <MediaChrome />;
}
