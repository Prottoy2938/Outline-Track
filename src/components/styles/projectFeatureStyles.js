import sizes from "./sizes"

const styles = {
  ProjectFeatureContainer: {
    position: "fixed",
    right: "0",
    width: "49vw",
    justifyContent: "center",
    textAlign: "center",
    [sizes.down("lg")]: {
      position: "static",
      width: "100vw",
    },
  },
  detailsContainer: {
    [sizes.down("lg")]: {
      marginTop: "30px",
    },
  },
  title: {
    marginTop: "10px",
    borderBottom: "4px solid",

    borderImage: "linear-gradient(to right, #a84832, #3246a8)",
    borderImageSlice: 1,
    width: "fit-content",

    margin: "0 auto",
  },
  factsContainer: {
    marginLeft: "13%",
    [sizes.down("lg")]: {
      //   marginLeft: "15%",
    },
    [sizes.down("sm")]: {
      marginLeft: "5%",
    },
  },
  fact: {
    [sizes.down("lg")]: {
      margin: "5px 0",
    },
    [sizes.down("md")]: {
      "& span:nth-of-type(even)": {
        fontSize: ".99em",
      },
    },
    [sizes.down("sm")]: {
      "& span:nth-of-type(even)": {
        fontSize: ".9em",
      },
    },
    [sizes.down("xs")]: {
      "& span:nth-of-type(even)": {
        fontSize: ".82em",
        letterSpacing: "0",
      },
    },
  },
  description: {
    marginTop: "7vh",
    marginBottom: "5vh",

    [sizes.down("sm")]: {
      marginRight: "2%",
      marginTop: "5vh",
      marginBottom: "3vh",
    },
  },
  previewButton: {
    position: "absolute",
    left: "0",
    marginTop: "13vh",
    border: "2px solid #03a1fc",
    borderRadius: "20px",
    backgroundColor: "white",
    width: "10vw",
    [sizes.down("lg")]: {
      marginTop: "10vh",
      left: "14%",
      width: "auto",
      marginBottom: "10vh",
    },
    [sizes.down("md")]: {
      marginTop: "5vh",
    },
    [sizes.down("sm")]: {
      left: "5vw",
      marginTop: "5vh",
      marginBottom: "10vh",
    },
    "&:hover": {
      border: "2px solid #03a1fc",
      backgroundColor: "#03a1fc",
    },
  },
  codeButton: {
    position: "absolute",
    right: "1vw",
    marginTop: "13vh",
    border: "2px solid #081821",
    borderRadius: "20px",
    backgroundColor: "white",
    width: "10vw",

    [sizes.down("lg")]: {
      marginTop: "10vh",
      right: "20vw",
      width: "12vw",
      marginBottom: "10vh",
    },
    [sizes.down("md")]: {
      marginTop: "5vh",
      width: "15vw",
    },
    [sizes.down("sm")]: {
      width: "auto",
      right: "5vw",
      marginTop: "5vh",
      marginBottom: "10vh",
    },
    "&:hover": {
      backgroundColor: "white",
    },
  },
}
export default styles
