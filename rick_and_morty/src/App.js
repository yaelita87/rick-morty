import './App.css'
import style from "../src/style/App.module.css"
import Cards from './components/Cards.jsx'
import Form from './components/Form';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Favorites from './components/favorites/Favorites';


function App () {
   
  const onSearch= (character)=>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
         window.alert('No hay personajes con ese ID');
       }
      });
      };
  
  
      const location = useLocation();   
  const [characters,setCharacters] = useState([]);

 
 
  let onClose =(e)=> {
   let filtrados= characters.filter((char)=> char.name !== e);
   setCharacters(filtrados);
 };

 const navigate = useNavigate();
const [access, setAccess] = useState(false);

const username = 'mailfalso123@gmail.com';
const password = 'ContraseñaFalsa123';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}
useEffect(() => {
  !access && navigate('/');
}, [access,navigate]);

 return (
   <div className='App'>
      <div>
     {(location.pathname !== "/") && <Nav onSearch={onSearch}/>}
     </div>
     <div className={style.protag}></div>
     <Routes>
       <Route path='/home' element={
         <Cards
         characters={characters} onClose={onClose}
         />}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      
        <Route path='/about' element={<About/>}/>
         <Route path='/' element={<Form login={login}/>}/>
         <Route path='/favorites' element={<Favorites characters={characters}/>}/>
      </Routes>
      
      
    </div>
  )
}

export default App
        
    
      
     
      

