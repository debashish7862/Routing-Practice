import { useState } from 'react';
import './App.css';
import Home from './Components/ContextAPI2/Home';
import myGlobalContext from './Components/ContextAPI2/Contextofall';
import Navbar from './Components/ContextAPI2/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import AboutUs from './Components/ContextAPI2/AboutUs';
import Contact from './Components/ContextAPI2/Contact'
import Login from './Components/ContextAPI2/Login'
import Technologies from './Components/ContextAPI2/Technologies';
import Html from './Components/ContextAPI2/Html';
import Css from './Components/ContextAPI2/Css';
import Js from './Components/ContextAPI2/Js';

import Reactapi from './Components/ContextAPI2/Reactapi';

function App() {
  const[userName,setUserName]=useState("Debashish")
  const[user2Name,setUser2Name]=useState("Jiban")
  const[user3Name,setUser3Name]=useState('smruti')
  return (
    <div>
      
       
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutUs' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        
        <Route path='/logIn' element={<Login/>}></Route>
        <Route path='/logIn' element={<Login/>}></Route>
        <Route path='/technologies' element={<Technologies/>}>
        <Route path='' element={<Navigate to ='css'/>}/>
        <Route path='html' element={<Html/>}/>
        <Route path='css' element={<Css/>}/>
        <Route path='js' element={<Js/>}/>
        <Route path='react' element={<Reactapi/>}/>
        </Route>
          
         
        
        </Routes>
      
  
     
    </div>
  );
}

export default App;
