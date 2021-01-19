import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


const Todo = (props) => {
  return (
      <div style={{textDecoration: props.todo.completed ? 'line-through' : ''}} className="todo">
        {props.todo.name}
        <button onClick={()=>{props.completaTodo(props.index)}}>Completa</button>
        <button onClick={()=>{props.rimuoviTodo(props.index)}}>X</button>
      </div>
  )
}
const Form = (props)=> {
  
const [value,setValue] = useState();

const handleSubmit = (e) =>{ 
    e.preventDefault();

    if(value.trim()==""){
      alert("compila il campo di testo!");
      return 
    }

    props.submit(value)
    setValue('');
  }

const onChangeText = (e) => {
    
    setValue(e.target.value);

    console.log(e.target.value);
  }

  return(
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" value={ value } placeholder="aggiungi todo" onChange={ onChangeText }/>
      </form>
  )
  
}

const App = () =>{

    const [todos, setTodos] = useState(
  
        [
        
            { name:"imparare react", completed:false },
            { name:"imparare gli state", completed:false },
            { name:"imparare i componentp", completed:true }
        
        ]

    );
  


  const addTodo = (todo) => {
    const newTodos = [...todos,{name: todo}]
    setTodos(newTodos);
  }

  const rimuoviTodo = (index)=>{

    if(todos[index].completed==true){
      alert("è già stato marcato come eseguito!");
      return
    }
    
    todos.splice(index,1);
    const newTodos = [...todos];
    setTodos(newTodos);
  }

  const completaTodo = (index) =>{
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  }

    return(
      <div className="app">
        <div className="todo-list">
          {todos.map((item,index)=>(
              <Todo key={ index } todo={ item } index={ index } completaTodo={completaTodo} rimuoviTodo={rimuoviTodo}/>
          ))}
          <Form submit={addTodo} />
        </div>
      </div>
    )
  
}

export default App;
 