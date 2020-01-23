import React, { createContext, useState, useEffect } from "react"
export const ThemeContext = createContext()
export function ThemeProvider(props) {
  let checkDarkMode = () => {
    const getDarkMode =
      typeof window !== "undefined" && localStorage.getItem("darkMode")
    if (getDarkMode) {
      return getDarkMode
    } else {
      return false
    }
  }
  const [isDarkMode, setDarkMode] = useState(checkDarkMode())
  const [playVideo, setplayVideo] = useState(false)

  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", !isDarkMode)
    setDarkMode(!isDarkMode)
  }
  const toggleplayVideo = () => {
    setplayVideo(!playVideo)
  }
  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        playVideo,
        setplayVideo,
        toggleplayVideo,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}
