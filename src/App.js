//import logo from './logo.svg';
import './Todo.css';
import Todo from './Todo';
import Edit from './Edit';
import {BrowserRouter, Route ,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
       </div>
  );
}

export default App;
