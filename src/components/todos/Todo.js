import React from 'react'

// presentational component to display todo items in an li

const Todo = (props) => {
   return (
      <li>
         {props.text}
      </li>
   )
}

export default Todo