import React from "react"
import Paper from "@material-ui/core/Paper"
import styles from "../styles/myDescriptionStyles"
import { withStyles } from "@material-ui/core/styles"

const MyDescription = ({ classes }) => {
  return (
    <Paper className={classes.myDscContainer}>
      <p>
        Hi! I am Prottay Rudra. I enjoy doing Programming. Right now I am
        focusing on Web Development.
      </p>

      <p>
        Learn more <span className={classes.aboutMe}>about me</span>, read my{" "}
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
            email
          </a>
        </span>
      </p>
    </Paper>
  )
}
export default withStyles(styles)(MyDescription)
