import React, {useState} from "react";
import './TodoList.css'

const TodoList = ( { todo, setTodo } ) => {
    
    const [ edit, setEdit ] = useState(null)
    const [ value, setValue ] = useState('')
    

    const todoRemove = (id) => {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }
    const todoEdit = (id, title) => {
        setEdit(id) ;
        setValue(title);
    }
    
    const saveEdit = (id) => {
        let newTodo = [...todo].map( item => {
            if(item.id === id){
                item.title = value
            }
            return item
        });
        setTodo(newTodo);
        setEdit(null);
    }

   

    const style = {
        btn1: {'marginLeft' : 'auto'},
        btn2 : {'marginRight': '60px'}
    }
   

    return(
        <div style={{'marginLeft': ' 60px'}}>
            {
                todo.map(item => (
                <div style={{'marginBottom': '20px' , 'display' : 'flex'}} key={item.id}>
                    {
                        (edit === item.id) 
                            ?
                                <div>
                                    <input style={ {'color': '#000', 'maxWidth': '300px'} } onChange = { (e) => setValue(e.target.value) } value ={value}/>
                                    <button onClick={ () => saveEdit(item.id)} className = {'btn btn-secondary'}> Сохранить</button>
                                </div>
                             : 
                                <div>
                                    <input 
                                    style={{'marginRight' : '20px'}} 
                                    type="checkbox" id={item.id}/>
                                    <label htmlFor={item.id}>{item.title}</label>
                                </div> 
                    }
                    <button style={style.btn1} className = {'btn btn-success'} onClick={()=> todoRemove(item.id)}>удалить</button>
                    <button style={style.btn2} className = {'btn btn-primary'} onClick={()=> todoEdit(item.id , item.title)}>Редактировать</button>
                </div>
            ))}
    </div>
    )
}

export default TodoList