import sizes from "./sizes"
export default {
  myDscContainer: {
    marginTop: "12vh",
    marginBottom: "15vh",
    width: "80vw",
    margin: "0 auto",
    paddingBottom: "5vh",
    height: "50vh",
    "&:hover": {
      WebkitBoxShadow: "-1px 6px 10px -2px rgba(0,0,0,0.32)",
      MozBoxShadow: "-1px 6px 10px -2px rgba(0,0,0,0.32)",
      boxShadow: "-1px 6px 10px -2px rgba(0,0,0,0.32)",
    },
    padding: "50px",
  },
  description: {
    fontSize: "2em",
    lineHeight: "50px",
    marginTop: "5vh",
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
      borderBottom: "10px solid black",
    },
  },
  myResume: {
    textAlign: "center",
    borderBottom: "2px solid #fcba03",
    paddingBottom: "3px",
    cursor: "pointer",
    "&:hover": {
      paddingBottom: "1px",
      borderBottom: "10px solid #fcba03",
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
      borderBottom: "10px solid #027de8",
    },
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
}
