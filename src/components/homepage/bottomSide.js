import React, { useState, useContext, useEffect } from "react"
import { withStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Collapse from "@material-ui/core/Collapse"
import ExpandLess from "@material-ui/icons/ExpandLess"
import HdrStrongIcon from "@material-ui/icons/HdrStrong"
import DashboardIcon from "@material-ui/icons/Dashboard"
import Button from "@material-ui/core/Button"
import GitHubIcon from "@material-ui/icons/GitHub"
import { ThemeContext } from "../contexts/themeContext"
import AboutMe from "./aboutme"
import InfoIcon from "@material-ui/icons/Info"
import styles from "../styles/bottomSideStyles"
import AboutProject from "./aboutProject"

function BottomSide(props) {
  const { classes } = props
  const { isDarkMode } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)
  const [aboutMeOpen, setaboutMeOpen] = useState(false)
  const [aboutProjectOpen, setaboutProjectOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const handleAbout_Me_Click = () => {
    setaboutMeOpen(!aboutMeOpen)
  }

  const shutDown_AboutMe = () => {
    setaboutMeOpen(false)
  }
  const handleAbout_Project_Click = () => {
    setaboutProjectOpen(true)
  }

  const shutDown_Project = reason => {
    if (reason === "clickaway") {
      return
    }

    setaboutProjectOpen(false)
  }
  useEffect(() => {
    if (aboutProjectOpen === true) {
      setTimeout(() => {
        setaboutProjectOpen(false)
      }, 2500)
    }
  }, [aboutProjectOpen])

  const buttonBorder = {
    borderRadius: !open && "5px",
    borderBottom: isDarkMode
      ? !open && "2px solid #6c6c6c"
      : !open && "2px solid #fcba03",
    borderTop: isDarkMode ? "2px solid #6c6c6c" : "2px solid #fcba03",
    borderLeft: isDarkMode
      ? !open && "2px solid #6c6c6c"
      : !open && "2px solid #fcba03",
    borderRight: isDarkMode
      ? !open && "2px solid #6c6c6c"
      : !open && "2px solid #fcba03",
  }
  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        style={{ border: isDarkMode && "2px solid #566465" }}
        startIcon={<GitHubIcon />}
      >
        Code
      </Button>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem
          button
          onClick={handleClick}
          className={classes.listButton}
          style={buttonBorder}
        >
          <ListItemText primary="About" />
          {open ? <ExpandLess /> : <InfoIcon />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            onClick={handleAbout_Project_Click}
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="This Project" />
            </ListItem>
          </List>
          <List component="div" disablePadding onClick={handleAbout_Me_Click}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <HdrStrongIcon />
              </ListItemIcon>
              <ListItemText primary="Myself" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <AboutMe open={aboutMeOpen} shutdown={shutDown_AboutMe} />
      <AboutProject open={aboutProjectOpen} shutdown={shutDown_Project} />
    </div>
  )
}
export default withStyles(styles)(BottomSide)
