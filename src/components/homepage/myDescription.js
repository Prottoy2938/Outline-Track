import React, { useState } from "react"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"
import AboutMe from "./aboutme"
import styles from "../styles/myDescriptionStyles"

const MyDescription = ({ classes }) => {
  const [aboutMeOpen, setAboutMeOpen] = useState(false)
  const handleAbout_Me_Click = () => {
    setAboutMeOpen(!aboutMeOpen)
  }
  const shutDown_AboutMe = () => {
    setAboutMeOpen(false)
  }

  return (
    <Paper className={classes.myDscContainer}>
      <p className={classes.description}>
        Hi! I am Prottay. I started doing Programming because I wanted to
        create. And here I am. Learn more{" "}
        <span className={classes.aboutMe} onClick={handleAbout_Me_Click}>
          about me
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
