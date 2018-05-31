import React from "react"
import PropTypes from "prop-types"
import { Droppable } from "react-beautiful-dnd"

import Element from "./Element"

const grid = 8
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
})

const List = ({ items, listId }) => {
  return (
    <div>
      <Droppable droppableId={listId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {items.map((item, index) => (
              <Element
                key={item.id}
                id={item.id}
                index={index}
                content={item.content}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}
List.propTypes = {
  items: PropTypes.array.isRequired,
  listId: PropTypes.string.isRequired,
}

export default List
