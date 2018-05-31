import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { LinkPadded } from "../components/Link"
import { Paper, Grid } from "../components/Container"
import { goBack } from "../redux/modules/router"

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  goBack,
}

const NotFound = ({ goBack }) => (
  <Grid>
    <Paper>
      <h1>404</h1>
      <h3>Uh.. parece que te perdiste</h3>
      <LinkPadded onClick={goBack}>Volver a página anterior</LinkPadded>
      <LinkPadded to="/">Ir a página de inicio</LinkPadded>
    </Paper>
  </Grid>
)

NotFound.propTypes = {
  goBack: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)
