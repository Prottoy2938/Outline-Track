import React, { useContext, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Brightness4Icon from "@material-ui/icons/Brightness4"
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh"
import { ThemeContext } from "./theme.context"
import { navigate } from "gatsby"
import styles from "../../styles/appbarLayoutStyles"

const CollapsibleAppBar = ({ classes, children }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)
  const [shouldShow, setShouldShow] = useState(null)

  let lastScroll = null

  const handleScroll = () => {
    const lastScrollWindow = window.scrollY

    if (lastScrollWindow === lastScroll) {
      return
    }

    const shouldShow1 =
      lastScroll !== null ? lastScrollWindow < lastScroll : null

    if (shouldShow1 !== shouldShow) {
      setShouldShow(shouldShow1)
    }

    lastScroll = lastScrollWindow
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const getScrollClassName = () => {
    if (shouldShow === null) {
      return ""
    }

    return shouldShow ? classes.show : classes.hide
  }

  //styles for dark mode
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
        className={`${classes.root} ${getScrollClassName()}`}
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
      {children}
    </>
  )
}

CollapsibleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any,
}

export default withStyles(styles)(CollapsibleAppBar)
