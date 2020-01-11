// import React from "react"
// import { withStyles } from "@material-ui/core/styles"
// import Drawer from "@material-ui/core/Drawer"
// import Card from "@material-ui/core/Card"
// import CardContent from "@material-ui/core/CardContent"
// import Typography from "@material-ui/core/Typography"
// import Paper from "@material-ui/core/Paper"
// import sizes from "../styles/sizes"
// import Divider from "@material-ui/core/Divider"
// const styles = {
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: "auto",
//   },
//   card: {
//     width: "100vw",
//     [sizes.down("lg")]: {
//       width: "80vw",
//     },
//     [sizes.down("md")]: {
//       width: "100vw",
//     },
//   },
//   title: {
//     border: "2px solid black",
//     padding: "4px 10px",
//     marginBottom: "5vh",
//     borderRadius: "5px",
//     width: "fit-content",
//   },
//   description: {
//     marginLeft: "15px",
//   },
//   home: {
//     borderBottom: "2px solid black",
//   },
//   code: {
//     marginLeft: "20px",
//   },
//   wannaKnow: {
//     marginBottom: "3vh",
//     marginTop: "2vh",
//   },
// }

// function AboutProjectDrawer(props) {
//   const { classes } = props
//   // ;"h1" |
//   //   "h2" |
//   //   "h3" |
//   //   "h4" |
//   //   "h5" |
//   //   "h6" |
//   //   "subtitle1" |
//   //   "subtitle2" |
//   //   "body1" |
//   //   "body2" |
//   //   "caption" |
//   //   "button" |
//   //   "overline" |
//   //   "srOnly" |
//   //   "inherit"

//   const fullList = side => (
//     <div
//       className={classes.fullList}
//       role="Project Detailsl"
//       onKeyDown={props.shutdown}
//     >
//       <Card className={classes.card}>
//         <CardContent>
//           <Typography variant="inherit">what is this -</Typography>
//           <Typography
//             variant="h6"
//             component="h2"
//             className={classes.description}
//           >
//             This website is a <span className={classes.home}>Home</span> for all
//             the projects and small webapps that I did.
//           </Typography>
//           <div className={classes.wannaKnow}>
//             <Typography variant="inherit">You might wanna know ...</Typography>
//           </div>

//           <Typography variant="body1" component="h2">
//             -I have created this webapps with help from my multiple web
//             development course.
//           </Typography>
//           <Typography variant="body1" component="h2">
//             - All of the code for this project are open to everyone and they are
//             hosted on Github.
//           </Typography>
//           <Typography variant="body1" component="h2">
//             - The website hasn't finished yet. I will be adding more
//             functionality and styles to it.
//           </Typography>
//           <Typography variant="body1" component="h2">
//             - If you have any opinion about this webpage, I would love to hear.
//           </Typography>
//           <Divider />
//         </CardContent>
//       </Card>
//     </div>
//   )

//   return (
//     <div>
//       <Drawer anchor="bottom" open={props.open} onClose={props.shutdown}>
//         <Paper>{fullList("bottom")}</Paper>
//       </Drawer>
//     </div>
//   )
// }
// export default withStyles(styles)(AboutProjectDrawer)

import React from "react"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"

export default function SimpleSnackbar(props) {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={props.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Project page is getting ready"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={props.shutdown}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  )
}
