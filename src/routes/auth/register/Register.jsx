import { useEffect, useState, useContext } from "react";
import Button from "../../../utils";
import "./Register.scss";
import axios from "../../../api";
import { toast } from "react-toastify";
import AppContext from "../../../context/store";

const Register = () => {
  const [state, dispatch] = useContext(AppContext);
  const [passwordErrors, setPasswordErrors] = useState({
    uppercase: true,
    lowercase: true,
    length: true
  })

    const [usernameErrors, setUsernameErrors] = useState({
      length: true,
      capitalLetter: true
    })


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  
  useEffect(() => {
      setPasswordErrors({
        lowercase: !(/[a-z]/g.test(password)),
        uppercase: !(/[A-Z]/g.test(password)),
        length: password.length >= 8 ? false : true
      })
    
  }, [password])

  useEffect(() => {
    setUsernameErrors({
      capitalLetter: !(/^[A-Z]/.test(username)),
      length: username.trim().length >= 0 ? false : true
    })
  }, [username]);

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    try{
      if(Object.values(passwordErrors).every(check => check === false) && Object.values(usernameErrors).every(check => check === false)){
        dispatch({type: "LOADING", loading: true})
        const response = await axios.post("/users/", {
          email,
          password,
          name: username,
          avatar: url 
        });

        delete response.data.password
  
        dispatch({type: "REGISTER_USER", user: response.data})
        toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!")
      }
      else{
        throw new Error("Nimadir noto'g'ri kiritdingiz!")
      }
    }
    catch(error) {
      if(error.response){
        toast.error(error.response.data.message[0])
      }
      else{
        toast.error(error.message)
      }
    }
    finally{
      dispatch({type: "LOADING", loading: false})
    }
  }


  return (
    <div className="form__wrapper">
        <h1>Register</h1>
         <form className="auth-form" onSubmit={handleRegisterUser}>
            <input type="text" placeholder="Username" value={username}  onChange={(e) => setUsername(e.target.value)} />
            <ul>
              {usernameErrors.capitalLetter &&  <li>First character should be Uppercase letter</li>}
              {usernameErrors.length && <li>At least 2 characters</li>}
            </ul>
            <input type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
            <ul>
              {
                passwordErrors.uppercase && <li>At least one Uppercase letter</li>
              }
              {
                passwordErrors.lowercase && <li>At least one Lowercase letter</li>
              }
              {
                passwordErrors.length && <li>At least 8 characters</li>
              }
            </ul>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  required/>
            <input type="url" placeholder="Avatar URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
            <Button btnType="submit" loading={state.loading}>Register</Button>
         </form>
    </div>
  )
}

export default Register