import sizes from "./sizes"
export default {
  searchContainer: {
    width: "100%",
    margin: 0,
    display: "inline",
    padding: "10px 0",
    [sizes.down("md")]: {
      borderRadius: "10px",
    },
  },
  input: {
    width: "80%",
    padding: ".7vh 0",
    fontSize: "1rem",

    fontFamily: "'Kulim Park', sans-serif",
    marginLeft: "3%",
    [sizes.down("md")]: {
      width: "100%",
    },
  },
  button: {
    marginTop: "6px",
    width: "12%",
    padding: "10px 0",
    border: "none",
    marginLeft: "5px",
    backgroundColor: "#21688f",
    cursor: "pointer",
    outline: "none",
    "&:hover": {
      backgroundColor: "#31789e",
    },
    [sizes.down("md")]: {
      display: "none",
    },
  },

  searchIcon: {
    display: "none",
    [sizes.down("md")]: {
      display: "inline",
    },
  },

  listContainerPaper: {
    marginLeft: "2em",
    marginTop: ".2rem",
    width: "80%",
    cursor: "default",
    [sizes.down("md")]: {
      marginLeft: "2em",
      width: "90%",
    },
    [sizes.down("sm")]: {
      marginLeft: "1em",
      width: "90%",
    },
  },

  suggestionContainer: {
    display: "flex",
  },
  listItem: {
    justifyContent: "center",
    height: "50px",
    textAlign: "center",
    cursor: "pointer",
  },
  suggestionImg: {
    width: "20px",
    height: "20px",
    marginBottom: "0",
    // position: "relative",
    margin: "0",

    marginLeft: "5px",
    marginTop: "1vh",
  },
  suggestionName: {
    marginLeft: "3%",
    marginTop: "0.8vh",
  },
}

// Don't delete this
// import sizes from "./sizes"
// export default {
//   searchContainer: {
//     width: "100%",
//     // border: "2px solid #013942",
//     margin: 0,
//     display: "inline",
//     padding: "10px 0",
//     [sizes.down("md")]: {
//       borderRadius: "10px",
//     },
//   },
//   input: {
//     width: "80%",
//     padding: ".7vh 0",
//     fontSize: "1rem",
//     fontFamily: "'Kulim Park', sans-serif",
//     marginLeft: "3%",
//   },
//   button: {
//     marginTop: "6px",
//     width: "12%",
//     padding: "10px 0",
//     border: "none",
//     marginLeft: "3px",
//     backgroundColor: "#21688f",
//     cursor: "pointer",
//     outline: "none",
//     "&:hover": {
//       backgroundColor: "#31789e",
//     },
//     [sizes.down("md")]: {
//       display: "none",
//     },
//   },

//   searchIcon: {
//     display: "none",
//     [sizes.down("md")]: {
//       display: "inline",
//     },
//   },

//   listContainerPaper: {
//     marginLeft: "2em",
//     marginTop: ".2rem",
//     width: "80%",
//     cursor: "default",
//     [sizes.down("md")]: {
//       marginLeft: "2em",
//       width: "90%",
//     },
//     [sizes.down("sm")]: {
//       marginLeft: "1em",
//       width: "90%",
//     },
//   },

//   suggestionContainer: {
//     display: "flex",
//   },
//   listItem: {
//     justifyContent: "center",
//     height: "50px",
//     textAlign: "center",
//     cursor: "pointer",
//   },
//   suggestionImg: {
//     width: "20px",
//     height: "20px",
//     marginBottom: "0",
//     // position: "relative",
//     margin: "0",

//     marginLeft: "5px",
//     marginTop: "1vh",
//   },
//   suggestionName: {
//     marginLeft: "3%",
//     marginTop: "0.8vh",
//   },
// }
