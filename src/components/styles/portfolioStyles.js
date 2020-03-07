import sizes from "./sizes"
const styles = {
  MdContainer: {
    marginTop: "16px",
    marginBottom: "30vh",
    [sizes.down("md")]: {
      marginBottom: "15vh",
    },
  },
  projectHeader: {
    [sizes.down("md")]: {
      textAlign: "center",
    },
  },
  portfolioTitle: {
    display: "inline-flex",
    borderBottom: "4px solid",
    borderImage: "linear-gradient(to right, #f5da42, #f54287)",
    borderImageSlice: "1",
    margin: "6vh auto",
    [sizes.down("xl")]: {
      marginLeft: "2%",
    },
    [sizes.down("lg")]: {
      marginLeft: "5%",
    },
    [sizes.down("sm")]: {
      marginLeft: "0",
      fontSize: "0.77em",
    },
    [sizes.down("xs")]: {
      marginLeft: "auto",
      fontSize: "0.6em",
    },
  },
  appForMobile: {
    display: "none",
    [sizes.down("md")]: {
      display: "block",
    },
  },
  appForDesktop: {
    [sizes.down("md")]: {
      display: "none",
    },
  },
}
export default styles
