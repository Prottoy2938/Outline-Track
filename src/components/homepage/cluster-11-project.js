import React from "react"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import styles from "../../styles/cluster11ProjectStyles"
import Grid from "@material-ui/core/Grid"

const Cluster11Project = props => {
  const { classes } = props

  return (
    <Paper className={classes.gridContainer} elevation={3}>
      <Grid container className={classes.container}>
        <Grid item xs={12} lg={6} md={6} sm={12}>
          <p className={classes.titleDes}>{"Currently I'm working on"}</p>
          <h1 className={classes.title}>Cluster 11</h1>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          md={6}
          sm={12}
          className={classes.btnContainer}
        >
          <a
            href="https://github.com/cluster-11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.codeButton}>View code</button>
          </a>
          <a
            href="https://cluster-11.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.websiteButton}>Visit website</button>
          </a>
        </Grid>
      </Grid>
    </Paper>
  )
}

Cluster11Project.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Cluster11Project)
