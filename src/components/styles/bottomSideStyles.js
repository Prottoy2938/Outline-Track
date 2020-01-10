import sizes from "./sizes"
const styles = {
  container: {
    marginTop: "50vh",
    paddingBottom: "30vh",
  },
  button: {
    width: "300px",
    position: "absolute",
    left: "10vw",
    border: "2px solid #09aded",
    backgroundColor: "white",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "white",
    },
    [sizes.down("md")]: {
      position: "static",
      marginLeft: "32%",
      margin: "0 auto",
    },
    [sizes.down("sm")]: {
      position: "static",
      marginLeft: "30%",
      justifyContent: "center",
    },
    [sizes.down("xs")]: {
      position: "static",
      marginLeft: "20vw",
      justifyContent: "center",
    },
  },
  root: {
    width: "300px",
    marginTop: "-20px",
    position: "absolute",
    right: "15vw",
    [sizes.down("md")]: {
      position: "static",
      marginTop: "30px",
      margin: "0 auto",
    },
    [sizes.down("sm")]: {
      position: "static",
      marginTop: "30px",
      margin: "0 auto",
    },
  },
  listButton: {
    padding: "5px",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  nested: {
    paddingLeft: "15px",
  },
}
export default styles
