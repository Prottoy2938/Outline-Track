import sizes from "../styles/sizes"
const styles = {
  fullList: {
    width: "100%",
    height: "calc(100vh - 64px)",
    backgroundColor: "rgba(207, 241, 235, 0.5)",
    [sizes.down("ss")]: {
      height: "100vh",
    },
  },

  myImg: {
    marginTop: "10px",
    display: "block",
    margin: "0 auto",
    borderRadius: "50%",
    width: "200px",
    [sizes.down("xs")]: {
      width: "130px",
    },
  },
  title: {
    margin: "0 auto",
    marginTop: "20px",
    marginBottom: "30px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px",
    display: "table",
    paddingBottom: "3px",
    borderBottom: "2px solid rgb(48, 54, 66)",
    [sizes.down("xs")]: {
      fontSize: "16px",
      marginBottom: "10px",
      marginTop: "5px",
    },
  },
  description: {
    width: "70vw",
    justifyContent: "center",
    margin: "0 auto",
    padding: "20px",
    border: "2px dashed black",
    borderRadius: "1px 15px 225px 15px/15px 225px 15px 255px",
    [sizes.down("lg")]: {
      width: "80vw",
    },
    [sizes.down("md")]: {
      fontSize: ".98em",
      width: "86vw",
    },
    [sizes.down("sm")]: {
      width: "97vw",
      fontSize: "0.97em",
    },
  },
  linkContainer: {
    marginTop: "60px",
    justifyContent: "center",
    marginLeft: "20vw",
    [sizes.down("md")]: {
      marginLeft: "10vw",
    },
    [sizes.down("xs")]: {
      marginTop: "30px",
    },
    [sizes.down("ss")]: {
      marginTop: "14px",
    },
  },
  gitHubContainer: {
    marginBottom: "15px",
    display: "inline-flex",
    textDecoration: "none",
  },
  linkedInContainer: {
    display: "table-footer-group",
    textDecoration: "none",
  },
  gitHubButton: {
    width: "176px",
    boxShadow: "none",
    textTransform: "none",
    "&:hover": {
      boxShadow: "none",
    },
  },
  linkedInButton: {
    textTransform: "none",
    boxShadow: "none",
    "& svg": {
      color: "#2196f3",
      "&:first-child": {
        fontSize: "27px",
      },
    },
    "&:hover": {
      boxShadow: "none",
    },
  },
  closeButton: {
    padding: "5px 10px",
    position: "absolute",
    border: "1.5px solid rgb(48, 54, 66)",
    background: "rgba(207, 241, 235, 0.5)",
    cursor: "pointer",
    right: "20px",
    bottom: "20px",
    outline: "none",
    "&:hover": {
      backgroundColor: "rgb(48, 54, 66)",
      color: "white",
    },
    [sizes.down("md")]: {
      display: "none",
    },
  },
  closeIcon: {
    display: "none",
    [sizes.down("md")]: {
      display: "block",
      position: "absolute",
      right: "20px",
      bottom: "10px",
    },
    [sizes.down("xs")]: {
      right: "10px",
      bottom: "20px",
    },
    [sizes.down("ss")]: {
      right: "10px",
      bottom: "10px",
    },
  },
}
export default styles
