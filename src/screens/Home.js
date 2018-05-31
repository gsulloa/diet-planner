import React, { Component } from "react"
import { connect } from "react-redux"

import { devlog } from "../utils/log"
import { Paper, Grid } from "../components/Container"

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

class Home extends Component {
  render() {
    devlog("Home", this.props)
    return (
      <Grid xs="6">
        <Paper>
          <h1>React Template</h1>
        </Paper>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
