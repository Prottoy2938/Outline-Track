import React from "react"
import sizes from "../styles/sizes"
import { motion } from "framer-motion"
import { withStyles } from "@material-ui/core/styles"

const styles = {
  container: {
    width: 100,
    height: 3,
    position: "absolute",
    right: 80,
    bottom: 100,
    [sizes.down("lg")]: {
      display: "none",
    },
  },
}
const Example = ({ isDarkMode, classes }) => {
  const visibility = {
    background: isDarkMode ? "rgb(81, 89, 105)" : "rgb(44, 142, 172)",
  }
  return (
    <motion.div
      style={visibility}
      className={classes.container}
      initial={{ scale: 1 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        yoyo: 1,
        duration: 2,
        stiffness: 260,
        damping: 20,
      }}
    />
  )
}
export default withStyles(styles)(Example)
