import React, { Component } from "react"
import PropTypes from "prop-types"
import { DragDropContext } from "react-beautiful-dnd"
export { default as List } from "./List"
export { default as Element } from "./Element"

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

class DraggableContainer extends Component {
  static propTypes = {
    meals: PropTypes.object.isRequired,
    resetMeal: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
      .isRequired,
  }
  onDragEnd = result => {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.props.meals[source.droppableId],
        source.index,
        destination.index
      )
      this.props.resetMeal({
        meal: source.droppableId,
        foods: items,
      })
    } else {
      const result = move(
        this.props.meals[source.droppableId],
        this.props.meals[destination.droppableId],
        source,
        destination
      )
      Object.entries(result).forEach(([meal, foods]) => {
        this.props.resetMeal({ meal, foods })
      })
    }
  }
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.props.children}
      </DragDropContext>
    )
  }
}

export default DraggableContainer
