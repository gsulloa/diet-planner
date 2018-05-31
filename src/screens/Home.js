import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { devlog } from "../utils/log"
import { Paper, Grid } from "../components/Container"
import { Title2 } from "../components/Text"
import DraggableContainer, { List } from "../components/dnd"

import { resetMeal } from "../redux/modules/meals"

const mapStateToProps = state => ({
  meals: state.meals.data,
})

const mapDispatchToProps = dispatch => ({
  resetMeal: ({ meal, foods }) => dispatch(resetMeal({ meal, foods })),
})

class Home extends Component {
  static propTypes = {
    meals: PropTypes.object,

    resetMeal: PropTypes.func.isRequired,
  }

  static defaultProps = {
    meals: {},
  }

  render() {
    devlog("Home", this.props)
    const { meals, resetMeal } = this.props
    return (
      <Grid item>
        <Paper>
          <Title2>React Template</Title2>
          <DraggableContainer meals={meals} resetMeal={resetMeal}>
            {Object.entries(this.props.meals).map(([meal, foods]) => (
              <List
                key={meal}
                items={foods.map(m => ({
                  id: m,
                  content: <p>{m}</p>,
                }))}
                listId={meal}
              />
            ))}
          </DraggableContainer>
        </Paper>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
