const styles = {
  root: {
    flexGrow: 1,
  },
  show: {
    transform: "translate(0, 0)",
    transition: "transform .5s",
  },
  hide: {
    transform: "translate(0, -70px)",
    transition: "transform .5s",
  },
  title: {
    position: "fixed",
    left: "20px",
    fontSize: "1em",
    color: "black",
    "&:hover": {
      cursor: "pointer",
      borderBottom: "2px solid black",
    },
  },
  iconButton: {
    position: "fixed",
    right: "20px",
  },
  nomusicIcon: {
    border: "double 2px transparent",
    borderRadius: 80,
    backgroundImage:
      "linear-gradient(rgba(44, 142, 172, 0.76), rgba(44, 142, 172, 0.76)), radial-gradient(circle at top left, #f00,#3020ff)",
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
  },
  musicButton: {
    position: "fixed",
    right: "100px",
  },
}

export default styles
