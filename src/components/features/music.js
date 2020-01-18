import React, { Component } from "react"
import ReactPlayer from "react-player"
import { findDOMNode } from "react-dom"
import screenfull from "screenfull"
import { ThemeContext } from "../contexts/themeContext"

class VideoPlayer extends Component {
  static contextType = ThemeContext

  render() {
    const { playVideo } = this.context

    if (playVideo) {
      screenfull.request(findDOMNode(this.refs.player))
    } else {
      screenfull.exit(findDOMNode(this.refs.player))
    }

    return (
      <>
        {playVideo ? (
          <ReactPlayer
            style={{ marginTop: "20vh" }}
            ref="player"
            url="https://www.youtube.com/embed/RHQC4fAhcbU"
            playing={true}
            controls={true}
            width="90vw"
            height="70vh"
          />
        ) : (
          <ReactPlayer ref="player" width="1vw" height="1vh" />
        )}
      </>
    )
  }
}

export default VideoPlayer
