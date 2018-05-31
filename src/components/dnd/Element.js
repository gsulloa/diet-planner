import React from "react"
import PropTypes from "prop-types"
import { Draggable } from "react-beautiful-dnd"
import { Card, CardContent } from "../Container"

const grid = 8
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
})

const Element = ({ id, index, content }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <Card>
            <CardContent>{content}</CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  )
}
Element.propTypes = {
  id: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  content: PropTypes.element.isRequired,
}

export default Element
