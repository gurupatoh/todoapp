import React, { Component } from 'react'
import './App.css';
import Header from './components/layouts/Header';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';



export class App extends Component {
    state = {
        todo: [
            {    id :1,
                title:'Take out the trash',
                completed:false
            },
            {    id :2,
                title:'clean the house',
                completed:false
            },
            {    id :3,
                title:'finish react project',
                completed:false
            }
        ]
    }
    markComplete = (id) =>{
 this.setState({
 todo:this.state.todo.map(todo =>{
     if(todo.id === id)
{
    todo.completed = !todo.completed
} 
return todo
    })
   });  }
   // delete todo
   delTodo = (id) =>{
 this.setState({todo:[...this.state.todo.filter(todo =>todo.id !==id)
 ]});

}
//// Add Todo
AddTodo = (title) =>{
    const newTodo ={
        id:4,
        title,
        completed:false
    }
    this.setState({todo:[...this.state.todo,newTodo]})
}
    render() {
        return (
            <div className="App">
                <div className="container">
                <Header/>
                <AddTodo AddTodo={this.state.AddTodo}/>
                
                <Todo todo={this.state.todo } markComplete={this.markComplete}
                 delTodo={this.delTodo}/>
                </div>
             
            </div>
          );
        }
        
    }


export default App
