import React, { createContext } from "react"
import formContext from "./formContext"

export const ThemeContext = createContext()

export function ThemeProvider(props) {
  const [isDarkMode, toggleDarkMode] = formContext(false)
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
