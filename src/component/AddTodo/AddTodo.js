import './AddTodo.css'
import { Input, Button } from 'antd';
import React, {useState} from 'react';
  
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
    
   
    
      return(
        <div className="AddTodo">
            <Input.Group compact>
                <Input style={style.input} placeholder = {'Add a todo'} value={value} onChange={(e) => setValue(e.target.value)} />
                <Button onClick={ saveTodo } type="primary" className={'btn btn-warning'}>Add Todo</Button>
            </Input.Group>
        
        </div>

      )
  }
      
 
  export default AddTodo