import React from "react"
import { navigate } from "gatsby"
import uuid from "uuid/v4"
import Button from "@material-ui/core/Button"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import GitHubIcon from "@material-ui/icons/GitHub"
import VisibilityIcon from "@material-ui/icons/Visibility"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { withStyles } from "@material-ui/core/styles"
import styles from "../../styles/projectFeatureStyles"
import IconButton from "@material-ui/core/IconButton"
import PropTypes from "prop-types"

const ProjectFeature = props => {
  const { classes, github, description, page, title, facts } = props
  return (
    <div className={classes.ProjectFeatureContainer}>
      <div className={classes.detailsContainer}>
        <IconButton
          aria-label="Back"
          className={classes.iconButton}
          onClick={() => navigate("/")}
        >
          <ArrowBackIcon />
        </IconButton>

        <h1 className={classes.title}>{title}</h1>

        <h3 className={classes.description}>{description}</h3>
        <RadioGroup
          value="checked"
          aria-label="facts"
          name="facts"
          className={classes.factsContainer}
        >
          {facts.map(fact => (
            <FormControlLabel
              key={uuid()}
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

ProjectFeature.propTypes = {
  classes: PropTypes.object.isRequired,
  github: PropTypes.string,
  description: PropTypes.string,
  page: PropTypes.string,
  title: PropTypes.string,
  facts: PropTypes.array,
}

export default withStyles(styles)(ProjectFeature)
