import './App.css'
import Header from './component/Header/Header';
import AddTodo from './component/AddTodo/AddTodo';
import TodoList from './component/TodoList/TodoList';
import React, {useState, useEffect} from 'react';



function App() {
  const [todo, setTodo] = useState([
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Написать TodoList',
    }
  ])

  const style = {
    'width' : '170',
    'margin': '0 auto'
  }

  useEffect( () => {
    let raw = localStorage.getItem('save')
    raw = JSON.parse(raw)
    setTodo(raw)
  }, [])
  
  useEffect( () => {
    localStorage.setItem('save', JSON.stringify(todo))
  }, [todo])

  return (
    <div className='container'>
      <Header todo={todo}/>
        <div style={style}>
          <AddTodo todo = { todo } setTodo = { setTodo }/>
          <TodoList todo = { todo } setTodo = { setTodo }/>
        </div>
      
    </div>
  )
}

export default App;
