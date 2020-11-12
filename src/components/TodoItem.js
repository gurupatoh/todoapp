import React, { Component } from 'react'
import propTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () =>{
        return {
            background:'grey',
            padding:'10px',
            borderBottom:'1px #CCC dotted',
            textDecoration:this.props.todo.completed?
            'line-through':'none'
        }
    }
    
 render() {
        const { id, title  } = this.props.todo;

        return ( 
            <div style={this.getStyle()}>
                    <h1>
                    <input type="checkbox"onChange={this.props.markComplete.bind(this,id)}/>{''}
                        {title}
                        <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                        </h1>

            </div>
        )
    }
}
TodoItem.propTypes ={
    todo:propTypes.object.isRequired
  }
  const btnStyle = {
    background:'red',
    color:'white',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right',
  }
export default TodoItem
