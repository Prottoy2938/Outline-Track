import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Brightness4Icon from "@material-ui/icons/Brightness4"
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh"
import { ThemeContext } from "../contexts/themeContext"
import { navigate } from "gatsby"

const styles = {
  root: {
    flexGrow: 1,
  },
  show: {
    transform: "translate(0, 0)",
    transition: "transform .5s",
  },
  hide: {
    transform: "translate(0, -70px)",
    transition: "transform .5s",
  },
  title: {
    position: "fixed",
    left: "20px",
    fontSize: "1em",
    color: "black",
    "&:hover": {
      cursor: "pointer",
      borderBottom: "2px solid black",
    },
  },
  iconButton: {
    position: "fixed",
    right: "20px",
  },
}

class CollapsibleAppBar extends React.PureComponent {
  static contextType = ThemeContext

  constructor(props) {
    super(props)

    this.state = {
      shouldShow: null,
    }

    this.lastScroll = null

    this.handleScroll = this.handleScroll.bind(this)
    // Alternatively, you can throttle scroll events to avoid
    // updating the state too often. Here using lodash.
    // this.handleScroll = _.throttle(this.handleScroll.bind(this), 100);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const lastScroll = window.scrollY

    if (lastScroll === this.state.lastScroll) {
      return
    }

    const shouldShow =
      this.lastScroll !== null ? lastScroll < this.lastScroll : null

    if (shouldShow !== this.state.shouldShow) {
      this.setState(prevState => ({
        ...prevState,
        shouldShow,
      }))
    }

    this.lastScroll = lastScroll
  }

  getScrollClassName() {
    if (this.state.shouldShow === null) {
      return ""
    }

    return this.state.shouldShow
      ? this.props.classes.show
      : this.props.classes.hide
  }

  render() {
    const { isDarkMode, toggleDarkMode } = this.context
    const { classes } = this.props
    const appBarBackground = {
      backgroundColor: isDarkMode
        ? "rgb(48, 54, 66)"
        : "rgba(44, 142, 172, 0.76)",
      boxShadow: isDarkMode && "none",
    }
    const titleColor = {
      color: isDarkMode && "#8d9096",
    }
    return (
      <>
        <AppBar
          position="fixed"
          style={appBarBackground}
          className={`${classes.root} ${this.getScrollClassName()}`}
        >
          <Toolbar>
            <Typography
              className={classes.title}
              style={titleColor}
              onClick={() => navigate("/")}
            >
              OUTLINE
            </Typography>
            <IconButton
              aria-label="Brightness"
              className={classes.iconButton}
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Brightness4Icon /> : <BrightnessHighIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        {this.props.children}
      </>
    )
  }
}

CollapsibleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CollapsibleAppBar)
