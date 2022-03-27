import React,{useState} from 'react';


const Todo = () => {
    const [input, setinput] = useState("")
    const [todo, settodo] = useState([]);
const [dele, setdele] = useState("");
const [selete, setselete] = useState(false)
const handleselect=()=>{
    setselete(!selete)
    console.log(selete)
}

const handledelete=()=>{

    setdele(todo.pop())
    console.log(dele)
}
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

    if(selete=== true)
    {
        console.log("jfjfj")
    console.log(handledelete)
    }
    return (
        <div className="todo">
            <div className="enterinput">
                    
<form onSubmit={handlesubmit}>         
           <h1>React Todo App</h1>
                <br/>
          <p className="jk">Add a new todo</p>
          <br/>
          <input type="text" className="input"  placeholder="write here..." value={input} onChange={change}/>
                
                <button className="btn" type="submit">Add Todo</button>
                </form>
             </div> 
             
<ul className="todooutput">
    
{todo.map((item)=>{
    return(
        <li key={item} className="li">
   <p>{item}</p>
   <button className="btn1" onClick={handleselect} style={{color:selete? "yellow":"blue"} }>select</button>
   <button className="btn2" onClick={handledelete}>delete</button>
   </li>

    )
})}

</ul>
        </div>
    )
}

export default Todo
