import React from "react"
import PaperMUI from "@material-ui/core/Paper"
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
