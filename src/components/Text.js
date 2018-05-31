import React from "react"
import Typography from "@material-ui/core/Typography"

export const Title1 = props => (
  <Typography variant="display4" gutterBottom {...props} />
)
export const Title2 = props => (
  <Typography variant="display3" gutterBottom {...props} />
)
export const Title3 = props => (
  <Typography variant="display2" gutterBottom {...props} />
)
export const Title4 = props => (
  <Typography variant="display1" gutterBottom {...props} />
)
export const Headline = props => (
  <Typography variant="headline" gutterBottom {...props} />
)
export const Title = props => (
  <Typography variant="title" gutterBottom {...props} />
)
export const Subtitle = props => (
  <Typography variant="subheading" gutterBottom {...props} />
)
export const Body1 = props => (
  <Typography variant="body2" gutterBottom {...props} />
)
export const Body2 = props => (
  <Typography variant="body1" gutterBottom {...props} />
)
export const Caption = props => (
  <Typography variant="caption" gutterBottom {...props} />
)
export const Text = props => <Typography gutterBottom {...props} />
