import sizes from "./sizes"

const styles = {
  galleryContainer: {
    background: "#E0EAFC",
    background: "-webkit-linear-gradient(to right, #CFDEF3, #E0EAFC)",
    background: "linear-gradient(to right, #CFDEF3, #E0EAFC)",
    position: "fixed",
    left: "0",
    width: "50vw",
    height: "100vh",
    [sizes.down("lg")]: {
      position: "static",
      width: "100vw",
      height: "40vh",
    },
  },
  imgContainer: {},
  galleryImage: {
    margin: "40px 1px",
    userSelect: "none",
  },
}
export default styles
