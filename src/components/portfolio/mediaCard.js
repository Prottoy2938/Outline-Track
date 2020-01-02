import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  learnMorebtn: {
    borderBottom: "4px solid",
    borderImage:
      "linear-gradient(to right, rgb(0, 210, 255), rgb(58, 123, 213))",
    borderImageSlice: "1",
    marginBottom: "1vh",
  },
  previewButton: {
    backgroundColor: "rgb(2, 213, 250)",
    "&:hover": {
      backgroundColor: "rgb(2, 250, 250)",
    },
  },
})

export default function MediaCard(props) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/2822949/pexels-photo-2822949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-between" }}>
        <Button
          size="small"
          variant="contained"
          className={classes.previewButton}
        >
          <a
            target="_blank"
            href={props.link}
            style={{ textDecoration: "none", color: "#020f24" }}
          >
            Preview
          </a>
        </Button>
        <Button size="small" color="primary" className={classes.learnMorebtn}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
