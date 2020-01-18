import React, { createContext, useState } from "react"

export const ThemeContext = createContext()

export function ThemeProvider(props) {
  const [isDarkMode, setDarkMode] = useState(false)
  const [playVideo, setplayVideo] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }
  const toggleplayVideo = () => [setplayVideo(!playVideo)]
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
