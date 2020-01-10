// import React, { useState, useEffect } from "react"
// import uuid from "uuid/v4"
// import InputBase from "@material-ui/core/InputBase"
// import IconButton from "@material-ui/core/IconButton"
// import ProjectList from "./projectList"
// import SearchIcon from "@material-ui/icons/Search"
// import Paper from "@material-ui/core/Paper"
// import Divider from "@material-ui/core/Divider"
// import ListItemText from "@material-ui/core/ListItemText"
// import { withStyles } from "@material-ui/core/styles"
// import styles from "../styles/searchInputStyles"
// import { createRedirect } from "gatsby-plugin-client-side-redirect"
// import { navigate } from "gatsby"
// function SearchInput(props) {
//   const { classes } = props
//   const [value, setvalue] = useState("")
//   const [test, settest] = useState("") //remove dependiencies from value
//   const [suggestions, setSuggestions] = useState([])

//   useEffect(() => {
//     if (!value) {
//       return setSuggestions([])
//     }

//     try {
//       //getting the most relevent match for the inputed value
//       //I have et suggestions to be empty array, but it doesn't stay empty because of the useeffet which runs on value
//       //problem is here, value is changed when  called the handlesuggestionclick, so it runs again a and find the matched one.
//       const regex = new RegExp(`^${value}`, "i")

//       const suggestionList = ProjectList.filter(v => regex.test(v.name))
//       const response = suggestionList

//       setSuggestions(
//         response.map(project => ({
//           name: project.name,
//           icon: project.icon,
//         }))
//       )
//     } catch (e) {
//       setSuggestions([])
//     }
//   }, [test])

//   const handleChange = e => {
//     setvalue(e.target.value)
//     settest(e.target.value)
//   }

//   const handleFormSubmit = e => {
//     e.preventDefault()
//     const lowerCaseValue = value.toLocaleLowerCase()
//     const pageURL = lowerCaseValue.replace(/\s/g, "-")
//     console.log(pageURL)

//     navigate(`/${pageURL}`)
//   }

//   const handleSuggestionClick = value => {
//     const lowerCaseValue = value.toLocaleLowerCase()
//     const pageURL = lowerCaseValue.replace(/\s/g, "-")
//     setvalue(value)
//     setSuggestions([])
//     navigate(`/${pageURL}`)
//   }

//   const projectShower = () => {
//     return suggestions.map(s => (
//       <React.Fragment key={uuid()}>
//         <ListItemText
//           key={uuid()}
//           onClick={() => handleSuggestionClick(s.name)}
//           className={classes.listItem}
//         >
//           <div
//             style={{ paddingTop: "10px" }}
//             className={classes.suggestionContainer}
//           >
//             <span className={classes.suggestionImg}>
//               <img src={s.icon} alt={s.icon} />
//             </span>
//             <span className={classes.suggestionName}>{s.name}</span>
//           </div>
//         </ListItemText>
//         <Divider key={uuid()} />
//       </React.Fragment>
//     ))
//   }

//   return (
//     <>
//       <form className={classes.searchContainer} onSubmit={handleFormSubmit}>
//         <InputBase
//           type="text"
//           value={value}
//           onChange={handleChange}
//           placeholder="search"
//           inputProps={{ "aria-label": "search google maps" }}
//           className={classes.input}
//         />
//         <IconButton
//           type="submit"
//           aria-label="search"
//           className={classes.searchIcon}
//         >
//           <SearchIcon />
//         </IconButton>
//       </form>

//       <button className={classes.button}>Search</button>

//       <Paper className={classes.listContainerPaper}>{projectShower()}</Paper>
//     </>
//   )
// }

// export default withStyles(styles)(SearchInput)

/* eslint-disable no-use-before-define */
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

  const ms = window.matchMedia("(max-width: 991.98px)")

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

  //styles for changing theme
  const buttonColor = {
    backgroundColor: isDarkMode && "rgb(81, 89, 105)",
  }

  return (
    <div className={classes.searchContainer}>
      <Autocomplete
        className={classes.input}
        freeSolo
        inputValue={value}
        onChange={(event, value) => handleSubmit(value)}
        onInputChange={handleChange}
        id="free-solo-2-demo"
        autoComplete={true}
        disableClearable
        options={ProjectList.map(option => option.name)}
        renderInput={params => (
          <TextField
            {...params}
            label={!ms.matches && "Find..."}
            variant={ms.matches ? "outlined" : "standard"}
            InputProps={
              ms.matches
                ? {
                    ...params.InputProps,
                    type: "search",
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleIconClick}>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : {
                    ...params.InputProps,
                    type: "search",
                  }
            }
            // margin="normal"
            // fullWidth
          />
        )}
      />
      <button className={classes.button} style={buttonColor}>
        Search
      </button>
    </div>
  )
}
export default withStyles(styles)(FreeSolo)
