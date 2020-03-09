import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import styles from "../styles/aboutmeStyles"
import myImg from "../../images/my image -b.jpg"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import Button from "@material-ui/core/Button"
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation"
import IconButton from "@material-ui/core/IconButton"

const AboutMeDrawer = ({ classes, shutdown, open }) => {
  const fullList = () => (
    <div className={classes.fullList} role="presentation" onKeyDown={shutdown}>
      <img src={myImg} alt="Prottay Rudra" className={classes.myImg} />
      <p className={classes.title}>Web Developer</p>

      <p className={classes.description}>
        Hi! I am Prottay Rudra. I started doing programming because I wanted to
        spend my time on something that will have an impact on everyone. Right
        now I am spending most of my time on JavaScript and web development
        frameworks. Besides programming, I have also interest in artificial
        intelligence and outer space.
      </p>
      <div className={classes.linkContainer}>
        <a
          className={classes.gitHubContainer}
          href="https://github.com/Prottoy2938"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <Button
            variant="contained"
            className={classes.gitHubButton}
            startIcon={<GitHubIcon />}
          >
            I'm on GitHub
          </Button>
        </a>

        <a
          className={classes.linkedInContainer}
          href="https://www.linkedin.com/in/prottay-rudra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="contained"
            className={classes.linkedInButton}
            startIcon={<LinkedInIcon color="primary" />}
          >
            {" "}
            I'm on LinkedIn
          </Button>
        </a>
      </div>

      <button className={classes.closeButton} onClick={shutdown}>
        way out
      </button>
      <IconButton
        aria-label="way out"
        className={classes.closeIcon}
        onClick={shutdown}
      >
        <CancelPresentationIcon />
      </IconButton>
    </div>
  )

  return (
    <div>
      <Drawer anchor="bottom" open={open} onClose={shutdown}>
        {fullList("bottom")}
      </Drawer>
    </div>
  )
}
export default withStyles(styles)(AboutMeDrawer)
