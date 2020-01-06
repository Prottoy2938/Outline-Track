import React, { useState } from "react"
import Autosuggest from "react-autosuggest"
import ProjectList from "./projectList"
import "../styles/AutoComplete.css"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
const AutoComplete = props => {
  const [country, setCountry] = useState("")
  const [suggestions, setSuggestions] = useState([])
  console.log(suggestions)

  return (
    <div className="search-container">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={({ value }) => {
          if (!value) {
            return setSuggestions([])
          }

          try {
            //getting the most relevent match for the inputed value
            const regex = new RegExp(`^${value}`, "i")

            const suggestionList = ProjectList.filter(v => regex.test(v.name))
            const response = suggestionList

            setSuggestions(
              response.map(project => ({
                name: project.name,
                icon: project.icon,
              }))
            )
          } catch (e) {
            setSuggestions([])
          }
        }}
        onSuggestionsClearRequested={() => {
          setSuggestions([])
        }}
        getSuggestionValue={suggestion => suggestion.name}
        renderSuggestion={suggestion => <span>Hello</span>}
        onSuggestionSelected={(event, { suggestion, method }) => {
          if (method === "enter") {
            event.preventDefault()
          }
          setCountry(suggestion.name)
          // setFieldValue("country", suggestion.name)
        }}
        inputProps={{
          placeholder: "Search for your country",
          autoComplete: "abcd",
          value: country,
          name: "country",
          onChange: (_event, { newValue }) => {
            setCountry(newValue)
          },
        }}
      />
      <IconButton type="submit" aria-label="search" className="search-icon">
        <SearchIcon />
      </IconButton>
    </div>
  )
}
export default AutoComplete
