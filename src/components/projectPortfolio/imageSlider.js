import React, { useState, useContext } from "react"
import "../styles/imageSliderStyles"
import { withStyles } from "@material-ui/core/styles"
import { Gallery, GalleryImage } from "react-gesture-gallery"
import styles from "../styles/imageSliderStyles"
import { ThemeContext } from "../contexts/themeContext"

function ImageSlider(props) {
  const { classes, images } = props
  const [index, setIndex] = useState(0)
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div className={classes.galleryContainer}>
      <Gallery
        className={classes.imgContainer}
        index={index}
        onRequestChange={i => {
          setIndex(i)
        }}
      >
        {images.map(img => (
          <GalleryImage key={img} src={img} className={classes.galleryImage} />
        ))}
      </Gallery>
    </div>
  )
}
export default withStyles(styles)(ImageSlider)
