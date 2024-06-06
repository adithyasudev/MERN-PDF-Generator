import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post( 
        "https://evalution3-3.onrender.com/users/login",
        user
      );

      const token = res.data.token;
    //   localStorage.setItem("token", token); 
    localStorage.setItem("token", JSON.stringify(token));

    navigate("/home"); 
      setError("");
    } catch (error) {
      setError("User credentials are incorrect or user not registered"); 
      console.log(error.message);
    }
  };

  const navigateToRegister = () => {
    navigate("/register"); 
  };

  return (
    <div style={{backgroundColor:'red' , borderRadius:'12px' , padding:"50px"}}>
      <div>Login</div>
      <div>
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        onChange={onChangeHandler}
      />
      <br />
      <input
        type="password" 
        name="password"
        placeholder="Enter your password"
        onChange={onChangeHandler}
      />
      </div>
      <br />
      <br />
      <div style={{display:'flex',gap:'20px'}}>
      <button onClick={handleLogin}>Login</button>
      <button onClick={navigateToRegister}>Register</button>
      </div>

      {error && <p>{error}</p>} 
    </div>
  );
};