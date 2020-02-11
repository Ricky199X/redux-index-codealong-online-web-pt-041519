import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

   // render Todos by using the presentational component 
   renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

   render() {
      return (
         <div>
            {/* then we call renderTodos in order to render the todo we submit thru the form */}
            {this.renderTodos()}
         </div>
      )
   }
}

// need to write a mapStateToProps function so that we can 
// get the state from redux
// after we write the function, we pass it into connect

const mapStateToProps = (state) => {
   return {
      todos: state.todos
   }
}

export default connect(mapStateToProps)(TodosContainer)