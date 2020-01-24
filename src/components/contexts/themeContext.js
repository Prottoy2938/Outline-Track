import React, { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()
export function ThemeProvider(props) {
  const [isDarkMode, setDarkMode] = useState(false)
  const [playVideo, setplayVideo] = useState(false)

  useEffect(() => {
    setDarkMode(JSON.parse(localStorage.getItem("darkMode")))
  }, [])
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
