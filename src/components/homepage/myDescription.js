import React, { useState, useContext } from "react"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"
import AboutMe from "./aboutme"
import styles from "../styles/myDescriptionStyles"

import { ThemeContext } from "../contexts/themeContext"

const MyDescription = ({ classes }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const [aboutMeOpen, setaboutMeOpen] = useState(false)

  const handleAbout_Me_Click = () => {
    setaboutMeOpen(!aboutMeOpen)
  }
  const shutDown_AboutMe = () => {
    setaboutMeOpen(false)
  }

  return (
    <Paper className={classes.myDscContainer}>
      <p className={classes.description}>
        Hi! I am Prottay. I started doing Programming because I wanted to
        create. And here I am. More{" "}
        <span className={classes.aboutMe} onClick={handleAbout_Me_Click}>
          about me
        </span>
        , read my{" "}
        <span className={classes.myResume}>
          <a
            href="http://bit.ly/3cxwITP"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </span>{" "}
        or send me an{" "}
        <span className={classes.myEmail}>
          <a href="mailto:prottoyrudra7777@gmail.com" target="_top">
            Email
          </a>
        </span>
      </p>
      <AboutMe open={aboutMeOpen} shutdown={shutDown_AboutMe} />
    </Paper>
  )
}
export default withStyles(styles)(MyDescription)
