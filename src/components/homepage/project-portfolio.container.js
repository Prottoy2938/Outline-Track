import React, { useContext } from "react"
import MediaCard from "./project-card"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import styles from "../../styles/portfolioStyles"
import colorPickerImg from "../../images/colorPicker/colorPicker.png"
import yahtzeeImg from "../../images/yahtzee/yahtzee.png"
import todoReactImg from "../../images/todoReact/todoReact1.png"
import lightsOutImg from "../../images/lightsOut/lightsOut (1).png"
import weatherAppImg from "../../images/weather/weather.png"
import { ThemeContext } from "../common/theme.context"
import ingredientImg from "../../images/ingredient/ingredient.png"
import PropTypes from "prop-types"

function Portfolio({ classes }) {
  const { isDarkMode } = useContext(ThemeContext)

  const portfolioTitleStyles = {
    borderBottom: isDarkMode && "4px solid",
    borderImage: isDarkMode && "linear-gradient(to right, #f5da42, #6066d8)",
    borderImageSlice: isDarkMode && "1",
  }
  return (
    <Container className={classes.MdContainer}>
      <Typography
        component="div"
        variant="h4"
        className={classes.projectHeader}
      >
        <Box
          textAlign="justify"
          m={1}
          className={classes.portfolioTitle}
          style={portfolioTitleStyles}
        >
          Some of My Project
        </Box>
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={4} md={6} sm={6}>
          <MediaCard
            title={"Ingredient"}
            img={ingredientImg}
            previewLink="https://ingredient.now.sh/"
            learnMoreLink="/ingredient-page/"
            description="A web application to get food recipe"
          />
        </Grid>
        <Grid item xs={12} lg={4} md={6} sm={6}>
          <MediaCard
            toolTip="There seems to be a bug on styling in the production field for this application, I am working on it."
            previewLink="https://prottoy2938.github.io/react-color-picker/"
            img={colorPickerImg}
            title="Color Picker"
            learnMoreLink="/react-color-picker-page/"
            description="A webapp which allows user to create their own color pallete and copy color code"
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          md={6}
          className={classes.appForDesktop}
          sm={6}
        >
          <MediaCard
            previewLink="https://prottoy2938.github.io/yahtzee/"
            img={yahtzeeImg}
            title="Yahtzee"
            learnMoreLink="/yahtzee-page/"
            description="Webapp version of Yahtzee game, has all the logic
            "
          />
        </Grid>

        <Grid
          item
          xs={12}
          lg={4}
          md={6}
          className={classes.appForMobile}
          sm={6}
        >
          <MediaCard
            title={"Task Manager"}
            img={todoReactImg}
            previewLink="https://prottoy2938.github.io/task-manager-react/"
            learnMoreLink="/task-manager"
            description="A Task Manager App"
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          md={6}
          className={classes.appForMobile}
          sm={6}
        >
          <MediaCard
            title={"Lights Out"}
            img={lightsOutImg}
            previewLink="https://prottoy2938.github.io/lights-out/"
            learnMoreLink="/lights-out/"
            description="Lights Out Game"
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          md={6}
          className={classes.appForMobile}
          sm={6}
        >
          <MediaCard
            title={"Weather App"}
            img={weatherAppImg}
            previewLink="http://sm-nodejs-weatherapp.herokuapp.com/"
            learnMoreLink="/weather-app/"
            description="A web application to get food recipe"
          />
        </Grid>
      </Grid>
    </Container>
  )
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Portfolio)
