import React from 'react'
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import { Card, CardContent, TextField } from '@material-ui/core';
import {Add,Cancel} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';


const useStyles=makeStyles({
   card:{
      height:"100%",
      width:"70%",
     margin:"0% 0% 0% 15%"
   }
})
const Edit = (props) => {
const classes =useStyles()

//const [input, setinput] = useState("")
   // const [todo, settodo] = useState([]);
   // const [menu, setmenu] = useState(false)

    
 //const handlemenu=()=>{
   //setmenu(!menu)
   //console.log(menu)}

 //  const addtodo= [];
 //const change=(e)=>{
   //setinput(e.target.value)}

  //  const change=(e)=>{
   //    setinput(e.target.value)}
 
 //   const handlesubmit=(e)=>{
   // e.preventDefault()
    //settodo(todo=>[...todo,input])
    //setinput("")
    //console.log(input)
    //console.log(todo)}


    return (
        <div >
              <div>
              <nav className="navbar">
<ul className={props.menu ? 'nav-menu active' : 'nav-menu'}>
<div className="icon1">< MoreHoriz fontSize="large" onClick={props.handlecolor}/></div>
    <li style={props.redcolor} onClick={props.color} className="nav-item active" >hello</li>
    <li style={props.pup} className="nav-item active" ></li>
    <li style={props.bluecolor} className="nav-item active"></li>
    <li style={props.yellow} className="nav-item active"></li>
    

    
</ul>
<Delete onClick={props.handledelete} />
                  </nav>
                
               { /*<div  className="icon"><Add/> < MoreHoriz  fontSize="large" onClick={handlemenu}/><Delete/></div>*/}
</div>
                  <Card className={classes.card} style={props.redcolor}>
               <div className="carddiv">  <Add fontSize="large" /> < MoreHoriz  fontSize="large" onClick={props.handlecolor}/><Cancel fontSize="large" onClick={props.submit}/></div>
                     <CardContent>
                        <TextField placeholder="add a todo" multiline value={props.name} id="todo" onChange={props.change}/>
                    
                     </CardContent>
                  </Card>
             </div> 
             
    )
}

export default Edit



/* <form onSubmit={props.data}>         
           <h1>React Todo App</h1>
                <br/>
         <p className="jk">Add a new todo</p>
          <br/>
          
          <input type="text" className="input"  placeholder="write here..." value={props.name} onChange={props.change}/>
                
          <input type="submit" onClick={props.data} className="input"  placeholder="write here..." value="search"/>
          
                <button className="btn" type="submit">Add Todo</button>
                </form>*/