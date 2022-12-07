import React from "react";
import validation from "./validation.js";


export default function Form(props){
    const {login} = props;
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    
    const [errors, setErrors]= React.useState({username:"", password:""});
    const handleInputChange = (e)=>{

        setUserData({
    ...userData, [e.target.name]: e.target.value
    })
    setErrors(
        validation({
           ...userData,
           [e.target.name]: e.target.value,
        })
     );
    
    }
    const handleSubmit = (e) => {
        e.preventDefault();
      login(userData);
    }
    return(
    <div>
        <label >Usuario:</label>
        <input name='username' type="text" value={userData.usename}
         onChange={handleInputChange} className={errors.username}/>
        <p>{errors.username}</p>
        <label >Contraseña</label>
        <input name="password" type="password" value={userData.password} 
        onChange={handleInputChange} className={errors.password}/>
        <p>{errors.password}</p>
        <button onClick={handleSubmit}>Validar</button>
    </div>
    )
}

