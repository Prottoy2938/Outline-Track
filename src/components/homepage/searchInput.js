import React from "react"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import "../styles/searchInput.css"

export default function CustomizedInputBase() {
  return (
    <div className="search-container">
      <InputBase
        placeholder="search"
        inputProps={{ "aria-label": "search google maps" }}
        autoFocus
        className="input"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  )
}
