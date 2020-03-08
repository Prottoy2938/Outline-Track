import sizes from "../styles/sizes"
const styles = {
  fullList: {
    width: "100%",
    height: "calc(100vh - 64px)",
    backgroundColor: "rgba(207, 241, 235, 0.5)",
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
  },
  myImg: {
    marginTop: "10px",
    display: "block",
    margin: "0 auto",
    borderRadius: "50%",
    width: "200px",
  },
  description: {
    width: "70vw",
    justifyContent: "center",
    margin: "0 auto",
    padding: "20px",
    border: "2px dashed black",
    borderRadius: "1px 15px 225px 15px/15px 225px 15px 255px",
  },
  linkContainer: {
    marginTop: "60px",
    justifyContent: "center",
    marginLeft: "20vw",
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
    "&:hover": {
      backgroundColor: "rgb(48, 54, 66)",
      color: "white",
    },
  },
}
export default styles
