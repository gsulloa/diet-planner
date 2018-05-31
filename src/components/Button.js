import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

export const FlatButton = withStyles(styles)(
  ({ classes, to, ...props }) =>
    to ? (
      <Button
        {...props}
        variant="flat"
        className={classes.button}
        component={Link}
        to={to}
      />
    ) : (
      <Button {...props} variant="flat" className={classes.button} />
    )
)
FlatButton.propTypes = {
  classes: PropTypes.object.isRequired,
}

export const OutlinedButton = withStyles(styles)(
  ({ classes, to, ...props }) =>
    to ? (
      <Button
        {...props}
        variant="outlined"
        className={classes.button}
        component={Link}
        to={to}
      />
    ) : (
      <Button {...props} variant="outlined" className={classes.button} />
    )
)
OutlinedButton.propTypes = {
  classes: PropTypes.object.isRequired,
}

export const RaisedButton = withStyles(styles)(
  ({ classes, to, ...props }) =>
    to ? (
      <Button
        {...props}
        variant="raised"
        className={classes.button}
        component={Link}
        to={to}
      />
    ) : (
      <Button {...props} variant="raised" className={classes.button} />
    )
)
RaisedButton.propTypes = {
  classes: PropTypes.object.isRequired,
}
