import React,{useState} from 'react'

const Todo = () => {
    const [input, setinput] = useState("")
    const [todo, settodo] = useState([]);
    
  //  const addtodo= [];

    const change=(e)=>{
       setinput(e.target.value)
    }

    const handlesubmit=(e)=>{
    e.preventDefault()
    settodo(todo=>[...todo,input])
    setinput("")
    console.log(input)
    console.log(todo)
    
    }

    return (
        <div className="todo">
            <div className="enterinput">
                    
<form onSubmit={handlesubmit}>         
           <h1>React Todo App</h1>
                <br/>
          <p >Add a new todo</p>
          <br/>
          <input type="text" className="input"  placeholder="write here..." value={input} onChange={change}/>
                
                <button className="btn" type="submit">Add Todo</button>
                </form>
             </div> 
<div className="todooutput">
{todo.map((item)=>{
    return(
        <div key={item}>
   <p>{item}</p>
        </div>
    )
})}

</div>
        </div>
    )
}

export default Todo
