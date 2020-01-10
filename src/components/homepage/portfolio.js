import React from "react"
import MediaCard from "./mediaCard"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import styles from "../styles/portfolioStyles"

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
          <MediaCard
            previewLink="https://prottoy2938.github.io/react-color-picker/"
            title="Color Picker"
            learnMoreLink="/react-color-picker/"
          />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <MediaCard
            previewLink="https://prottoy2938.github.io/yahtzee/"
            title="Yahtzee"
            learnMoreLink="/yahtzee/"
          />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <MediaCard
            title={"Food Recipe"}
            previewLink={null}
            learnMoreLink="/food-recipe/"
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default withStyles(styles)(Portfolio)
