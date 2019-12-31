import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import styles from "./styles/homepagetreeStyles"
import "./styles/homepagetreeStyles.css"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
const HomepageTree = props => {
  const { classes } = props
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          id="search"
          label="Search"
          variant="filled"
          className="searchInput"
          autoFocus
        />
        <Button type="submit" variant="contained" className="button">
          <span className="find">Find</span>
        </Button>
      </form>
    </div>
  )
}
export default withStyles(styles)(HomepageTree)
