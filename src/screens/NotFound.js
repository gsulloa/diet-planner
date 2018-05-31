import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { RaisedButton } from "../components/Button"
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
      <RaisedButton onClick={goBack} color="primary">
        Volver a página anterior
      </RaisedButton>
      <RaisedButton to="/" color="secondary">
        Ir a página de inicio
      </RaisedButton>
    </Paper>
  </Grid>
)

NotFound.propTypes = {
  goBack: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)
