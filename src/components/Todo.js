import React, { Component } from 'react'
import TodoItem from './TodoItem';
import propTypes from 'prop-types';


export class Todo extends Component {

   
  render(){
   return this.props.todo.map((todo ) => (
           <div className="Todo">
    <TodoItem key ={todo.id} todo={todo}
    markComplete={this.props.markComplete}delTodo={this.props.delTodo}/>
     </div>
   ) );
            
  } 
}
   
 Todo.propTypes ={
   todo:propTypes.array.isRequired
 }

export default Todo
