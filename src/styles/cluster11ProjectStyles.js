import sizes from "./sizes"

const styles = {
  gridContainer: {
    WebkitBoxShadow:
      "0px 3px 3px -2px rgba(0,0,0,0.2), 1px 2px 0px 0px rgba(0,0,0,0.14), 0px 1px 6px 0px rgba(0,0,0,0.1)",
    MozBoxShadow:
      "0px 3px 3px -2px rgba(0,0,0,0.2), 1px 2px 0px 0px rgba(0,0,0,0.14), 0px 1px 6px 0px rgba(0,0,0,0.1)",
    boxShadow:
      "0px 3px 3px -2px rgba(0,0,0,0.2), 1px 2px 0px 0px rgba(0,0,0,0.14), 0px 1px 6px 0px rgba(0,0,0,0.1)",
    width: "80vw",
    marginBottom: "30vh",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: "3rem",
    paddingBottom: "3rem",
  },
  container: {
    justifyContent: "space-between",
  },
  codeButton: {
    boxShadow: "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)",
    marginLeft: ".75rem",
    paddingTop: ".4rem",
    paddingBottom: ".4rem",
    fontWeight: 500,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ".375rem",
    borderColor: "transparent",
    cursor: "pointer",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    float: "right",
    backgroundColor: "rgb(185, 199, 222)",
  },
  websiteButton: {
    boxShadow: "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)",
    marginLeft: ".75rem",
    paddingTop: ".4rem",
    paddingBottom: ".4rem",
    color: "#5850ec",
    fontWeight: 500,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ".375rem",
    borderColor: "transparent",
    backgroundColor: "#fff",
    cursor: "pointer",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    float: "right",
  },
  titleDes: {
    fontSize: "1rem",
    marginBottom: "0.8rem",
  },
  title: {
    fontSize: "1.6rem",
    fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
  },
  [sizes.down("md")]: {
    gridContainer: {
      width: "85vw",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
    websiteButton: {
      float: "none",
    },
    codeButton: {
      float: "none",
      marginLeft: 0,
    },
    btnContainer: {
      marginTop: "3vh",
    },
  },
}

export default styles
