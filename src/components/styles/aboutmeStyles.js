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
    // display: "table",
  },
  description: {
    marginBottom: "20px",
    marginTop: "12px",
  },
  email: {
    letterSpacing: "0.05em",
    borderBottom: "1px solid blue",
    display: "table",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#d5dedd",
    },
  },
  linkContainer: {
    marginTop: "20px",
  },
  github: {
    marginRight: "20px",
    position: "relative",
    letterSpacing: "0.05em",
    "&:after": {
      left: "0",
      right: "0",
      content: '""',
      position: "absolute",
      height: "2px",
      background: "#403b3b",
      bottom: "-4px",
      transform: "scale(0,1)",
      transformOrigin: "100% 50%",
      transition: "transform .5s ease",
    },
    "&:hover::after": {
      transform: "scale(1,1)",
      transformOrigin: "0% 50%",
    },
  },
  linkedin: {
    marginRight: "20px",
    position: "relative",
    letterSpacing: "0.05em",
    "&:after": {
      left: "0",
      right: "0",
      content: '""',
      position: "absolute",
      height: "2px",
      background: "#16d7de",
      bottom: "-4px",
      transform: "scale(0,1)",
      transformOrigin: "100% 50%",
      transition: "transform .5s ease",
    },
    "&:hover::after": {
      transform: "scale(1,1)",
      transformOrigin: "0% 50%",
    },
  },
  stackoverflow: {
    marginRight: "20px",
    position: "relative",
    letterSpacing: "0.05em",
    "&:after": {
      left: "0",
      right: "0",
      content: '""',
      position: "absolute",
      height: "2px",
      background: "#ab8209",
      bottom: "-4px",
      transform: "scale(0,1)",
      transformOrigin: "100% 50%",
      transition: "transform .5s ease",
    },
    "&:hover::after": {
      transform: "scale(1,1)",
      transformOrigin: "0% 50%",
    },
  },
}
export default styles
