import React, { useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import { Gallery, GalleryImage } from "react-gesture-gallery"
import styles from "../../styles/imageSliderStyles"
import PropTypes from "prop-types"

function ImageSlider(props) {
  const { classes, images } = props
  const [index, setIndex] = useState(0)

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

ImageSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  images: PropTypes.node,
}
export default withStyles(styles)(ImageSlider)
