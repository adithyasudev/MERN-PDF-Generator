import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({userName:"", email: "", password: "",roles:""});
  const [error, setError] = useState();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister =async()=>{
   try {
         await axios
        .post("https://evalution3-3.onrender.com/users/register", user)
        .then((res) => {
            if(res){
                console.log(res);
                navigate('/login');
                setError("");
            }
        });     
   } catch (error) {
    setError("error while registering new user")
    console.log(error.message);
   }
  }


  return (
    <div style={{backgroundColor:'red' , borderRadius:'12px' , padding:"50px"}}>
       <div>
            Register 
        </div>
    <div className="form"> 
        

        <input
        type="text"
        placeholder="enter userName"
        name="userName"
        onChange={onChangeHandler}
      />{" "}
      <br />  
      <input
        type="email"
        placeholder="enter your email"
        name="email"
        onChange={onChangeHandler}
      />{" "}
      <br />
      <input
        type="text"
        name="password"
        placeholder="enter your password"
        onChange={onChangeHandler}
      />{" "}
      <br />
       <input
        type="text"
        name="role"
        placeholder="enter your role"
        onChange={onChangeHandler}
      />{" "} 
      <br />
      <br />
      <button
        onClick={handleRegister}
      >
        {" "}
        Register
      </button>

      {error && <p>{error}</p>}

    </div>
    </div>
  );
};