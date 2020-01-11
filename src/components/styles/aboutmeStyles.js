import sizes from "../styles/sizes"
const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  card: {
    width: "75vw",
    [sizes.down("lg")]: {
      width: "80vw",
    },
    [sizes.down("md")]: {
      width: "100vw",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    borderBottom: "3px solid black",
    width: "fit-content",
  },
  description: {
    marginBottom: "20px",
    marginTop: "12px",
  },
  email: {
    borderBottom: "1px solid blue",
    width: "fit-content",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#d5dedd",
    },
  },
}
export default styles
