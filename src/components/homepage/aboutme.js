import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import styles from "../styles/aboutmeStyles"

function AboutMeDrawer(props) {
  const { classes } = props

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onKeyDown={props.shutdown}
    >
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            Prottay Rudra
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            className={classes.description}
          ></Typography>
          <Typography
            variant="subtitle2"
            component="h2"
            className={classes.email}
          >
            <a
              href="mailto:prottoyrudra7777@gmail.com"
              target="_top"
              style={{ textDecoration: "none", color: "black" }}
            >
              prottoyrudra7777@gmail.com
            </a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div>
      <Drawer anchor="bottom" open={props.open} onClose={props.shutdown}>
        {fullList("bottom")}
      </Drawer>
    </div>
  )
}
export default withStyles(styles)(AboutMeDrawer)
