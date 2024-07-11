import Button from "../../../utils";
import axios from "../../../api";
import AppContext from "../../../context/store";
import { useContext } from "react";
import "./Login.scss";
import { useState } from "react";

const Login = () => {
  const [state, dispatch] = useContext(AppContext);
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })
  const handleUserLogin = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post(`/auth/login`, {
          email: userData.email, password: userData.password
      });


      if(response.status === 201){
        dispatch({type: "LOGIN_USER", tokens: response.data})
      }
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className="form__wrapper">
        <h1>Login</h1>
         <form className="auth-form" onSubmit={handleUserLogin}>
            <input type="email" placeholder="Email" value={userData.email}  onChange={(e) => setUserData({...userData, email: e.target.value})} />
            <input type="password" placeholder="Password" value={userData.password}  onChange={(e) => setUserData({...userData, password: e.target.value})} />
            <Button btnType="submit">Login</Button>
         </form>
    </div>
  )
}

export default Login;