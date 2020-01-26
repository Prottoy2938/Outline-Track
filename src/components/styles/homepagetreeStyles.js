import sizes from "./sizes"
const styles = mode => {
  return {
    container: {
      width: "100%",
      height: "100vh",
      justifyContent: "center",
      textAlign: "center",
      display: "inline-block",
    },
    form: {
      width: "60vw",
      position: "absolute",
      margin: "35vh auto",
      left: "0",
      right: "0",
      [sizes.down("lg")]: {
        width: "80vw",
      },
      [sizes.down("md")]: {
        width: "100vw",
      },
      [sizes.down("sm")]: {
        width: "100vw",
      },
      [sizes.down("xs")]: {
        margin: "15vh auto",
        width: "100vw",
      },
    },
    formContainer: {
      width: "100%",
      height: "100%",
      clipPath: "polygon(50% 0%, 100% 0, 100% 43%, 70% 100%, 0 100%, 0 0)",
      backgroundColor: "rgba(44, 142, 172, 0.76)",

      [sizes.down("md")]: {
        clipPath:
          "polygon(50% 0%, 100% 0, 100% 77%, 80% 100%, 0 100%, 0% 60%, 0 0)",
      },
    },
  }
}

export default styles
