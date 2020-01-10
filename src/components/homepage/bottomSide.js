import React, { useState, useContext } from "react"
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
import InfoIcon from "@material-ui/icons/Info"
import styles from "../styles/bottomSideStyles"

function BottomSide(props) {
  const { classes } = props
  const { isDarkMode } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  const buttonBorder = {
    borderRadius: !open && "5px",
    borderBottom: isDarkMode
      ? "2px solid #6c6c6c"
      : !open && "2px solid #fcba03",
    borderTop: isDarkMode ? "2px solid #6c6c6c" : "2px solid #fcba03",
    borderLeft: isDarkMode ? "2px solid #6c6c6c" : !open && "2px solid #fcba03",
    borderRight: isDarkMode
      ? "2px solid #6c6c6c"
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
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="This Project" />
            </ListItem>
          </List>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <HdrStrongIcon />
              </ListItemIcon>
              <ListItemText primary="Myself" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  )
}
export default withStyles(styles)(BottomSide)
