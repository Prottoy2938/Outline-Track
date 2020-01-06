import React from "react"
import AutoTyping from "../AutoTyping"
import SearchInput from "./searchInput"
import AutoComplete from "./AutoComplete"
import "../styles/homepagetreeStyles.css"
import { withStyles } from "@material-ui/core/styles"
import styles from "../styles/homepagetreeStyles"
const HomepageTree = props => {
  const { classes } = props
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <AutoTyping
          strings={[
            "<span>Search for <span style='border-bottom: 2px solid #004ade'>Weather App</span></span>",
            "<span>Search for <span style='border-bottom: 2px solid #000000'>LightsOut</span></span>",
            "<span>Search for <span style='border-bottom: 2px solid #a32f08'>TodoList</span></span>",
            "<span>Search for <span  style='border-bottom: 2px solid #6b492f'>VendingMachine</></span>",
            "<span><span style='border-bottom: 2px solid #db0075'>Search for Small Webapps</></span>",
          ]}
        />

        <SearchInput />
      </form>
    </div>
  )
}
export default withStyles(styles)(HomepageTree)
