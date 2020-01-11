import React, { createContext, useState } from "react"

export const ThemeContext = createContext()

export function ThemeProvider(props) {
  const [isDarkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
