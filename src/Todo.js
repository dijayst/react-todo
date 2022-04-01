import React,{useState} from 'react';
//import Typography from '@material-ui/core'
//import {AccessAlarm} from '@material-ui/icons';
import BorderColor from '@material-ui/icons/BorderColor';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Delete from '@material-ui/icons/Delete';
import {AcUnitOutlined, Add} from '@material-ui/icons';
import Edit from "./Edit";

const Todo = () => {
const color={
    red:{ background:"#69EBD0"},
    blue:{ background:"#E0ACD5"},
    yellow:{ background:"yellow"},
    purple:{ background:"green"}
}
const [menured, setmenured] = useState(color.red)
const [menublue, setmenublue] = useState(color.blue)
const [menuyellow, setMenuyellow] = useState(color.yellow)
const [menupurple, setMenupurple] = useState(color.purple)
const [edit, setedit] = useState(false)

const handleedit=()=>{
    setedit(!edit)
}

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

 
    const change=(e)=>{
       setinput(e.target.value)
    console.log(input)}

 const handleselect=()=>{
    setselete(!selete)
    console.log(selete)
}

const handledelete=()=>{
    setdele(todo.pop())
    console.log(dele)
}
 //  const addtodo= [];
   
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
                
                <Add fontSize="large" onClick={handleedit}/>
                 


                  <h1>React Todo App</h1>
                <br/>
      {/*    <p className="jk">Add a new todo</p>*/}
          <br/>
         
                  <div><input type="text" className="search"placeholder="search"/></div>
             </div> 
             
<ul className="todooutput">
    
{todo.map((item)=>{
    return(
        <li key={item} className="li">
   <p>{item}</p>
   <button className="btn1" onClick={handleselect} style={{color:selete? "yellow":"blue"} }>select</button>
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

<br/>
<br/>
<section>
    {edit?<Edit name={input} data={handlesubmit} menu={menu} handlecolor={handlemenu} redcolor={menured} pup={menupurple} bluecolor={menublue} yellow={menuyellow} color={colorchange} submit={handlesubmit} change={change} handledelete={handledelete}/>:null}
</section>
 </div>
    )
}

export default Todo








