import sizes from "./sizes"

const styles = theme => ({
  container: {
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    textAlign: "center",
    display: "inline-block",
    clipPath: "polygon(50% 0%, 100% 0, 100% 43%, 70% 100%, 0 100%, 0 0)",
    backgroundColor: "rgba(44, 142, 172, 0.76)",
    [sizes.down("md")]: {
      clipPath: "polygon(85% 0, 100% 16%, 100% 100%, 0 100%, 0 0)",
    },
  },
  form: {
    width: "60vw",
    position: "absolute",
    margin: "35vh auto",
    left: "0",
    right: "0",
    [sizes.down("lg")]: {
      width: "80vw",
    },
    [sizes.down("md")]: {
      width: "100vw",
    },
    [sizes.down("sm")]: {
      width: "100vw",
    },
  },
})
export default styles

// do media queres here
