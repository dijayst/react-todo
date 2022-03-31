import React,{useState} from 'react';
//import Typography from '@material-ui/core'
//import {AccessAlarm} from '@material-ui/icons';
import BorderColor from '@material-ui/icons/BorderColor';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Delete from '@material-ui/icons/Delete';
import {AcUnitOutlined} from '@material-ui/icons'

const Todo = () => {
const color={
    red:{ background:"red"},
    blue:{ background:"blue"},
    yellow:{ background:"yellow"},
    purple:{ background:"green"}
}
const [menured, setmenured] = useState(color.red)
const [menublue, setmenublue] = useState(color.blue)
const [menuyellow, setMenuyellow] = useState(color.yellow)
const [menupurple, setMenupurple] = useState(color.purple)

const colorchange=()=>{
    setmenured(color.blue);
    setMenuyellow(color.brown);
    setmenublue(color.rose)
    setMenupurple(color.black)
}

const [input, setinput] = useState("")
    const [todo, settodo] = useState([]);
const [dele, setdele] = useState("");
const [selete, setselete] = useState(false)
const [menu, setmenu] = useState(false)


 const handlemenu=()=>{
     setmenu(!menu)
     console.log(menu)
 }

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
        <div className="todo" >
            
            <div className="enterinput" style={menured} >
                  <nav className="navbar">
                  <div className="icon">< MoreHoriz fontSize="large" onClick={handlemenu}/></div>
<ul className={menu ? 'nav-menu active' : 'nav-menu'}>
    <li style={menured} onClick={colorchange} className="nav-item active" >hello</li>
    <li style={menupurple} className="nav-item active" ></li>
    <li style={menublue} className="nav-item active"></li>
    <li style={menuyellow} className="nav-item active"></li>


</ul>
                  </nav>
                  
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


<nav className="nav">
    <ul className="navul">  
      <li className="liicon">
        <AcUnitOutlined />
     </li>
    <li className="liicon">< MoreHoriz/></li>
    <li className="liicon"><BorderColor/></li>
    <li className="liicon"><Delete/></li>
 </ul>

</nav>

        </div>
    )
}

export default Todo








