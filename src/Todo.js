import React,{useState} from 'react'

const Todo = () => {
    const [todo, settodo] = useState([]);
  //  const addtodo= [];

    const change=(e)=>{
        let inpute={...todo}
        inpute=e.target.value
settodo(inpute);
console.log(todo)
    }

    const handlesubmit=(e)=>{
    e.preventDefault()
    
        console.log({...todo})
    
    }

    return (
        <div className="todo">
            <div className="enterinput">
                    
<form onSubmit={handlesubmit}>         
           <h1>React Todo App</h1>
                <br/>
          <p >Add a new todo</p>
          <br/>
          <input type="text" className="input"  placeholder="write here..." value={todo} onChange={change}/>
                
                <button className="btn" type="submit">Add Todo</button>
                </form>
             </div> 
<div className="todooutput">
{todo}
</div>
        </div>
    )
}

export default Todo
