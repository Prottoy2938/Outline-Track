import sizes from "./sizes"
export default {
  myDscContainer: {
    marginTop: "12vh",
    marginBottom: "20vh",
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
    [sizes.down("md")]: {
      paddingTop: 40,
    },
    [sizes.down("xs")]: {
      height: "70vh",
    },
    [sizes.down("ss")]: {
      height: "80vh",
    },
  },
  description: {
    fontSize: "2em",
    lineHeight: "70px",
    marginTop: "5vh",
    [sizes.down("lg")]: {
      fontSize: "1.7em",
      lineHeight: "50px",
    },
    [sizes.down("md")]: {
      marginTop: 0,
      fontSize: "1.6em",
    },
    [sizes.down("sm")]: {
      fontSize: "1.3em",
    },
    [sizes.down("xs")]: {
      fontSize: "18px",
    },
    [sizes.down("ss")]: {
      lineHeight: "43px",
      fontSize: "15px",
    },
  },
  aboutMe: {
    borderBottom: "2px solid black",
    paddingBottom: "3px",
    cursor: "pointer",
    "&:hover": {
      paddingBottom: "1px",
      borderBottom: "10px solid black",
      [sizes.down("md")]: {
        borderBottom: "5px solid black",
      },
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
      [sizes.down("md")]: {
        borderBottom: "5px solid #fcba03",
      },
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
      [sizes.down("md")]: {
        borderBottom: "5px solid #027de8",
      },
    },
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
}
