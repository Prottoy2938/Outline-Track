import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import styles from "../styles/aboutmeStyles"

function AboutMeDrawer(props) {
  const { classes } = props

  const fullList = () => (
    <div
      className={classes.fullList}
      role="presentation"
      onKeyDown={props.shutdown}
    >
      <h1 className={classes.description}>
        Hi! I am Prottay Rudra. I started doing Programming because I wanted to
        create. Now I am spending my time to create Web Applications
      </h1>
      <button className={classes.closeButton}>close</button>
    </div>
  )

  return (
    <div>
      <Drawer anchor="bottom" open={props.open} onClose={props.shutdown}>
        {fullList("bottom")}
      </Drawer>
    </div>
  )
}
export default withStyles(styles)(AboutMeDrawer)
