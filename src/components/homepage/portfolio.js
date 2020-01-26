import React, { useContext } from "react"
import MediaCard from "./mediaCard"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import styles from "../styles/portfolioStyles"
import colorPickerImg from "../../images/colorPicker/colorPicker.png"
import yahtzeeImg from "../../images/yahtzee/yahtzee.png"
import workingInProgress from "../../images/foodRecipe/workingInProgress.jpg"
import todoReactImg from "../../images/todoReact/todoReact1.png"
import lightsOutImg from "../../images/lightsOut/lightsOut (1).png"
import weatherAppImg from "../../images/weather/weather.png"
import { ThemeContext } from "../contexts/themeContext"

function Portfolio(props) {
  const { classes } = props
  const { isDarkMode } = useContext(ThemeContext)

  const portfolioTitleStyles = {
    borderBottom: isDarkMode && "4px solid",
    borderImage: isDarkMode && "linear-gradient(to right, #f5da42, #6066d8)",
    borderImageSlice: isDarkMode && "1",
  }
  return (
    <Container className={classes.MdContainer}>
      <Typography component="div" variant="h4">
        <Box
          textAlign="justify"
          m={1}
          className={classes.portfolioTitle}
          style={portfolioTitleStyles}
        >
          Projects that took time to build
        </Box>
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={4} md={6}>
          <MediaCard
            previewLink="https://prottoy2938.github.io/react-color-picker/"
            img={colorPickerImg}
            title="Color Picker"
            learnMoreLink="/react-color-picker-page/"
            description="A webapp which allows user to create their own color pallete and copy color code"
          />
        </Grid>
        <Grid item xs={12} lg={4} md={6} className={classes.appForDesktop}>
          <MediaCard
            previewLink="https://prottoy2938.github.io/yahtzee/"
            img={yahtzeeImg}
            title="Yahtzee"
            learnMoreLink="/yahtzee-page/"
            description="Webapp version of Yahtzee game, has all the logic
            "
          />
        </Grid>
        <Grid item xs={12} lg={4} md={6} className={classes.appForMobile}>
          <MediaCard
            title={"Task Manager"}
            img={todoReactImg}
            previewLink="https://prottoy2938.github.io/task-manager-react/"
            learnMoreLink="/task-manager"
            description="A Task Manager App"
          />
        </Grid>
        <Grid item xs={12} lg={4} md={6} className={classes.appForMobile}>
          <MediaCard
            title={"Lights Out"}
            img={lightsOutImg}
            previewLink="https://prottoy2938.github.io/lights-out/"
            learnMoreLink="/lights-out/"
            description="Lights Out Game"
          />
        </Grid>
        <Grid item xs={12} lg={4} md={6} className={classes.appForMobile}>
          <MediaCard
            title={"Weather App"}
            img={weatherAppImg}
            previewLink="http://sm-nodejs-weatherapp.herokuapp.com/"
            learnMoreLink="/weather-app/"
            description="A web application for getting weather data"
          />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <MediaCard
            title={"Food Recipe"}
            img={workingInProgress}
            previewLink={null}
            learnMoreLink="/food-recipe/"
            description="A web application based on getting recipe for cooking foods"
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default withStyles(styles)(Portfolio)
