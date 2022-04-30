import React,{useState} from 'react';
//import Typography from '@material-ui/core'
//import {AccessAlarm} from '@material-ui/icons';
import BorderColor from '@material-ui/icons/BorderColor';
import Delete from '@material-ui/icons/Delete';
import { Add, Search,CancelRounded} from '@material-ui/icons';
import Edit from "./Edit";
import { makeStyles } from '@material-ui/core';


const usestyles=makeStyles({
    add:{
        float:"left"
    }
})
const Todo = () => {
    const classes=usestyles()


    
const color={
    red:{ background:"#69EBD0"},
    blue:{ background:"#E0ACD5"},
    yellow:{ background:"yellow"},
    purple:{ background:"green"},
    green:{ background:"red"},
    lemon:{ background:"lemongreen"},
    gray:{ background:"gray"},
    pink:{ background:"pink"}
}
const [menured, setmenured] = useState(color.red)
const [menublue, setmenublue] = useState(color.blue)
const [menuyellow, setMenuyellow] = useState(color.yellow)
const [menupurple, setMenupurple] = useState(color.purple)
const [green, setgreen] = useState(color.green)
const [lemon, setlemon] = useState(color.lemon)
const [gray, setgray] = useState(color.gray)
const [menupink, setMenupink] = useState(color.pink)


const [edit, setedit] = useState(false)
const handleedit=()=>{
    setedit(!edit)
}

const colorchange=()=>{
    setmenured(color.blue);
    setgreen(color.red)
    console.log(menured)
}

const colorchnge=()=>{
    setMenuyellow(color.brown);
    setlemon(color.lemon)
    console.log(menuyellow)
}

const colorcange=()=>{
    setmenublue(color.rose);
    setMenupink(color.pink)
    console.log(menublue)
}

const colorhange=()=>{
    setMenupurple(color.black)
    setgray(color.gray)
}

const [input, setinput] = useState("")
    const [todo, settodo] = useState([]);
const [dele, setdele] = useState("");
const [selete, setselete] = useState(false)
const [menu, setmenu] = useState(false)
const [searc, setsearc] = useState("")
 const handlesearch=(e)=>{
     setsearc(e.target.value)
     console.log(searc)
 }


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

const handledelete=(e)=>{
setdele.splice(e,1);
//setdele(todo.splice(e,1))
//settodo(todo.splice(index,1))
  
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
    return (
        <div className="todo" >
            
            <div className="enterinput"  >
                
                <Add className={classes.add} fontSize="medium" onClick={handleedit}/>
                
                 


                  <h1>React Todo App</h1>
                <br/>
      {/*    <p className="jk">Add a new todo</p>*/}
          <br/>
         
                  <div>
                      <input type="text" className="search" value={searc} onChange={handlesearch} placeholder="search"/>
                      <Search fontSize="small"/>
                  </div>
             </div> 
             
<ul className="todooutput">
    
{todo.filter((val)=>{
    return(searc===""||val.toLowerCase().includes(searc.toLowerCase())
    ?val:null)}).map((item)=>{
    return(
        <li key={item} className="li"  >
            <div className="ite">
   <p>{item}</p>
   <BorderColor fontSize="small" onClick={handleselect}/>
      {item?
    <Delete fontSize="small" onClick={handledelete} /> 
    :null}
     </div>
      </li>
    
      

    )
})}

</ul>

{/*}
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
*/}

<br/>

<section>
    {edit?
    <Edit name={input} 
    colorhange={colorhange} 
    colorcange={colorcange}
     colorchnge={colorchnge}
      data={handlesubmit}
       menu={menu}
        handlecolor={handlemenu}
         redcolor={menured}
          setgren={green}
          pup={menupurple}
           bluecolor={menublue}
            yellow={menuyellow}
             color={colorchange}
              green={green}
               lemon={lemon} 
               gray={gray}
                menupink={menupink}
                 submit={handlesubmit} 
                 change={change}
                  handledelete={handledelete}/>:null}
                  
              <div>
              <nav className="navbar">
<ul className={menu ? 'nav-menu active' : 'nav-menu'}>
<div className="icon1">
   < CancelRounded fontSize="large" onClick={handlemenu}/></div>
    <li style={menured}  onClick={colorchange} className="nav-item active" >hello</li>
    <li style={menublue} onClick={colorchnge} className="nav-item active" ></li>
    <li style={menuyellow} onClick={colorcange} className="nav-item active"></li>
    <li style={menupink} onClick={colorhange} className="nav-item active"></li>
    

    
</ul>
                  </nav>
                
               { /*<div  className="icon"><Add/> < MoreHoriz  fontSize="large" onClick={handlemenu}/><Delete/></div>*/}
</div>
</section>
 </div>
    )
}

export default Todo








