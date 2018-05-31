import React, { Component } from "react"
import { Route, Switch, withRouter } from "react-router-dom"
import ResponsiveDrawer from "./components/ResponsiveDrawer"

import withRoot from "./withRoot"
import Home from "./screens/Home"
import NotFound from "./screens/NotFound"

import routes from "./routes"

class Navigator extends Component {
  render() {
    const links = [
      {
        to: routes.homePath,
        text: "Home",
      },
    ]
    const content = (
      <Switch>
        <Route exact path={routes.homePath} component={Home} />
        <Route component={NotFound} title="Not found" />
      </Switch>
    )
    return <ResponsiveDrawer content={content} links={links} title="Drawer" />
  }
}

export default withRoot(withRouter(Navigator))
