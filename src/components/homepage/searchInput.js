import React, { useState, useContext } from "react"
import { navigate } from "gatsby"
import ProjectList from "./projectList"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { withStyles } from "@material-ui/core/styles"
import styles from "../styles/searchInputStyles"
import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from "@material-ui/icons/Search"
import IconButton from "@material-ui/core/IconButton"
import { ThemeContext } from "../contexts/themeContext"
function FreeSolo(props) {
  const { isDarkMode } = useContext(ThemeContext)
  const [value, setvalue] = useState("")
  const [url, seturl] = useState("")
  const { classes } = props

  const handleChange = e => {
    const input = e.target.value
    setvalue(input)
    const anlowerValue = input.toString().toLowerCase()
    const pageURL1 = anlowerValue.replace(/\s/g, "-")
    seturl(pageURL1)
  }

  const handleSubmit = e => {
    setvalue(e)
    const lowerCaseValue = e.toString().toLowerCase()
    const pageURL = lowerCaseValue.replace(/\s/g, "-")
    seturl(pageURL)
    navigate(`/${pageURL}`)
  }
  const handleIconClick = () => {
    navigate(`/${url}`)
  }
  const buttonColor = {
    backgroundColor: isDarkMode && "rgb(81, 89, 105)",
  }
  console.log("Favicon from icons8")

  return (
    <div className={classes.searchContainer}>
      <Autocomplete
        className={classes.input}
        freeSolo
        clearOnEscape={true}
        selectOnFocus={false}
        inputValue={value}
        onChange={(event, value) => handleSubmit(value)}
        onInputChange={handleChange}
        id="free-solo-1-demo"
        autoComplete={true}
        disableClearable
        options={ProjectList.map(option => option.name)}
        renderInput={params => (
          <TextField
            {...params}
            label="Find..."
            variant="standard"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
      <Autocomplete
        className={classes.mobileInput}
        freeSolo
        inputValue={value}
        onChange={(event, value) => handleSubmit(value)}
        onInputChange={handleChange}
        id="free-solo-2-demo"
        autoComplete={true}
        disableClearable
        // disableOpenOnFocus={true}

        options={ProjectList.map(option => option.name)}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleIconClick}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      <button
        className={classes.button}
        style={buttonColor}
        onClick={handleIconClick}
      >
        Search
      </button>
    </div>
  )
}
export default withStyles(styles)(FreeSolo)
