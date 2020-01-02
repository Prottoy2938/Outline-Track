import React from "react"
import MediaCard from "./mediaCard"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import sizes from "../styles/sizes"

const styles = theme => ({
  MdContainer: {
    marginTop: theme.spacing(2),
  },
  portfolioTitle: {
    width: "fit-content",
    borderBottom: "4px solid",
    borderImage: "linear-gradient(to right, #f5da42, #f54287)",
    borderImageSlice: "1",
    margin: "6vh auto",
    [sizes.down("xl")]: {
      marginLeft: "2%",
    },
    [sizes.down("lg")]: {
      marginLeft: "5%",
    },
    [sizes.down("md")]: {
      marginLeft: "20%",
    },
    [sizes.down("sm")]: {
      marginLeft: "5%",
      fontSize: "0.77em",
    },
  },
})

function Portfolio(props) {
  const { classes } = props
  return (
    <Container className={classes.MdContainer}>
      <Typography component="div" variant="h4">
        <Box textAlign="justify" m={1} className={classes.portfolioTitle}>
          Projects that took time to build
        </Box>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4} md={6}>
          <MediaCard link="http://sm-nodejs-weatherapp.herokuapp.com/" />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <MediaCard link="#" />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <MediaCard link="#" />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <MediaCard link="#" />
        </Grid>
      </Grid>
    </Container>
  )
}

export default withStyles(styles)(Portfolio)
