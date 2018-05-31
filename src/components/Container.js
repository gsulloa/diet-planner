import React from "react"
import PaperMUI from "@material-ui/core/Paper"
import CardMUI from "@material-ui/core/Card"
import { withStyles } from "@material-ui/core/styles"

export { default as Grid } from "@material-ui/core/Grid"

export const Paper = withStyles(theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))(({ classes, ...props }) => (
  <PaperMUI className={classes.paper} {...props} />
))

export const Card = withStyles(() => ({
  card: {
    minWidth: 275,
  },
}))(({ classes, ...props }) => <CardMUI className={classes.paper} {...props} />)

export { default as CardContent } from "@material-ui/core/CardContent"
