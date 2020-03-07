import sizes from "./sizes"
export default {
  myDscContainer: {
    marginTop: "17vh",
    marginBottom: "10vh",
    width: "80vw",
    margin: "0 auto",
    paddingBottom: "5vh",
    height: "50vh",
  },
  description: {
    fontSize: "2.5em",
    lineHeight: "normal",

    [sizes.down("md")]: {
      fontSize: "2em",
    },
  },
  aboutMe: {
    borderBottom: "2px solid black",
    paddingBottom: "3px",
    cursor: "pointer",
    "&:hover": {
      paddingBottom: "1px",
      borderBottom: "4px solid black",
    },
  },
  myResume: {
    textAlign: "center",
    borderBottom: "2px solid #fcba03",
    paddingBottom: "3px",
    cursor: "pointer",
    "&:hover": {
      paddingBottom: "1px",
      borderBottom: "4px solid #fcba03",
    },
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  myEmail: {
    borderBottom: "2px solid #027de8",
    paddingBottom: "3px",
    cursor: "pointer",
    "&:hover": {
      paddingBottom: "1px",
      borderBottom: "4px solid #027de8",
    },
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
}
