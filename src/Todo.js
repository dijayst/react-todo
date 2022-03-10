import React,{useState} from 'react'

const Todo = () => {
    const [todo, settodo] = useState([]);
  //  const addtodo= [];

    const change=(e)=>{
settodo(e.target.value);
console.log(todo)
    }

    const handlesubmit=(e)=>{
    e.preventDefault()
    console.log(todo)
    }

    return (
        <div>
            <div>
                    

 <p>hhhhhhhhhhhhhhhhhhbbbbbbb</p>
 <p>hhhhhhhhhhhhhhhhhhbbbbbbb</p>

 <p>hhhhhhhhhhhhhhhhhhbbbbbbb</p>
 <p>hhhhhhhhhhhhhhhhhhbbbbbbb</p>
<form onSubmit={handlesubmit}>         
           <h1>React Todo App</h1>
                <br/>
                <input placeholder="write here..." value={todo} onChange={change}/>
                <br/>
          <p >Add a new todo</p>
          <br/>
                <button type="submit">Add Todo</button>
                </form>

             </div>   
<div>
    <ul>
    {todo.map((item)=>{
        return(
            <li key={item}>{item[]}</li>
        )
    })}
</ul>
</div>
        </div>
    )
}

export default Todo
