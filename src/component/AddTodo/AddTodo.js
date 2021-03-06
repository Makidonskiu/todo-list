import './AddTodo.css'
import { Input, Button } from 'antd';
import React, {useState, useEffect} from 'react';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
  
  const AddTodo = ( { todo, setTodo } ) => {

    const [ value, setValue ] = useState('')

    const style = {
      input : {
        width: 'calc(100% - 200px)',  
        'color': '#000',
        'height': '43px'
      }
    }
    
    const saveTodo = () => {
      if(value === '') { 
        return
      } else{
        setTodo([...todo, {
          id : Math.floor(Math.random() * 1000),
          title : value,
          status : true
        }]);
        setValue('')
      }
    }

    const heandleEnter = (e) => {
      if(e.key === 'Enter') saveTodo()
    }
    
    useEffect( () => {
      let raw = localStorage.getItem('save')
      raw = JSON.parse(raw)
      setTodo(raw)
    }, [setTodo])
    
    useEffect( () => {
      localStorage.setItem('save', JSON.stringify(todo))
    }, [todo])
    
      return(
        <div className="AddTodo">
            <Input.Group compact>
                <Input 
                style={style.input} 
                placeholder = {'Add a todo'} 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                onKeyPress = {heandleEnter} />
                <Button onClick={ saveTodo } type="primary" className={'btn btn-warning'}>Add Todo</Button>
            </Input.Group>
        
        </div>

      )
  }
      
 
  export default AddTodo