import React from "react"
import AutoTyping from "./AutoTyping"
import SearchInput from "./searchInput"
import "../styles/homepagetreeStyles.css"

const HomepageTree = props => {
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <AutoTyping
          strings={[
            "Search for <span style='border-bottom: 2px solid #004ade'>Weather App</span>",
            "Search for TodoList with <span style='border-bottom: 2px solid #a32f08'>React</span>",
            "Search for <span style='border-bottom: 2px solid #000000'>LightsOut</strong>",
            "Search for <span  style='border-bottom: 2px solid #6b492f'>VendingMachine</>",
            "<span style='border-bottom: 2px solid #db0075'>Search for Small Webapps</>",
          ]}
        />

        <SearchInput />
      </form>
    </div>
  )
}
export default HomepageTree
