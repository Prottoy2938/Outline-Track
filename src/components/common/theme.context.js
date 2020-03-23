import React, { createContext, useState, useEffect } from "react"
import PropTypes from "prop-types"
export const ThemeContext = createContext()
export function ThemeProvider(props) {
  const [isDarkMode, setDarkMode] = useState(true)
  useEffect(() => {
    setDarkMode(JSON.parse(localStorage.getItem("darkMode")))
  }, [])

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", !isDarkMode)
    setDarkMode(!isDarkMode)
  }

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
}
