// import React from "react"
// import ReactHowler from "ReactHowler"
// import Button from "../components/Button"

// class NoPreload extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       preload: false,
//       loaded: false,
//       playing: false,
//     }
//     this.handleLoad = this.handleLoad.bind(this)
//     this.handlePlay = this.handlePlay.bind(this)
//     this.handlePause = this.handlePause.bind(this)
//   }

//   // This isn't required but you can use it if you want to
//   // If you don't call load(), the audio will be automatically
//   // loaded when you set the playing prop to true
//   handleLoad() {
//     this.setState({
//       preload: true,
//     })
//   }

//   handlePlay() {
//     this.setState({
//       playing: true,
//     })
//   }

//   handlePause() {
//     this.setState({
//       playing: false,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <ReactHowler
//           src={["sound2.ogg", "sound2.mp3"]}
//           preload={this.state.preload}
//           playing={this.state.playing}
//           onLoad={() => this.setState({ loaded: true })}
//         />
//         {!this.state.loaded && (
//           <Button className="full" onClick={this.handleLoad}>
//             Load (Optional)
//           </Button>
//         )}
//         <br />
//         <Button onClick={this.handlePlay}>Play</Button>
//         <Button onClick={this.handlePause}>Pause</Button>
//       </div>
//     )
//   }
// }

// export default NoPreload

import React, { Component } from "react"
import ReactPlayer from "react-player"
import { findDOMNode } from "react-dom"
import screenfull from "screenfull"
import { ThemeContext } from "../contexts/themeContext"

class VideoPlayer extends Component {
  static contextType = ThemeContext

  // onClickFullscreen = () => {
  //   screenfull.request(findDOMNode(this.refs.player))
  // }
  // onClickExitscreen = () => {
  //   screenfull.exit(findDOMNode(this.refs.player))
  // }
  render() {
    const { playVideo } = this.context

    if (playVideo) {
      screenfull.request(findDOMNode(this.refs.player))
    }
    //  else {
    //   screenfull.exit(findDOMNode(this.refs.player))
    // }

    return (
      <div>
        {playVideo ? (
          <ReactPlayer
            ref="player"
            url="https://www.youtube.com/embed/RHQC4fAhcbU"
            playing={false}
            controls={true}
          />
        ) : (
          <ReactPlayer
            ref="player"
            // url="https://www.youtube.com/embed/RHQC4fAhcbU"
            // playing={false}
            // controls={true}
          />
        )}
      </div>
    )
  }
}

export default VideoPlayer
