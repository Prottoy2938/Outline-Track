import React from "react"
import Button from "@material-ui/core/Button"
import GitHubIcon from "@material-ui/icons/GitHub"
import VisibilityIcon from "@material-ui/icons/Visibility"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { withStyles } from "@material-ui/core/styles"
import styles from "../styles/projectFeatureStyles"

const ProjectFeature = props => {
  const mq = window.matchMedia("(max-width: 570px)")

  const { classes, github, description, page, title, facts } = props
  return (
    <div className={classes.ProjectFeatureContainer}>
      <div className={classes.detailsContainer}>
        {!mq.matches && <h1 className={classes.title}>{title}</h1>}

        <h3 className={classes.description}>{description}</h3>
        <RadioGroup
          value="checked"
          aria-label="facts"
          name="facts"
          className={classes.factsContainer}
        >
          {facts.map(fact => (
            <FormControlLabel
              value="checked"
              control={<Radio color="default" />}
              label={fact}
              className={classes.fact}
            />
          ))}
        </RadioGroup>

        <Button
          href={page}
          variant="contained"
          className={classes.previewButton}
          startIcon={<VisibilityIcon fontSize="large" />}
        >
          Preview
        </Button>
        <Button
          href={github}
          variant="contained"
          className={classes.codeButton}
          startIcon={
            <GitHubIcon fontSize="large" className={classes.githubIcon} />
          }
        >
          Code
        </Button>
      </div>
    </div>
  )
}

export default withStyles(styles)(ProjectFeature)
