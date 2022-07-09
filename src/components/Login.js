import React from 'react';
import './CSS/Login.css';
import users from './Users';
function Login({email,password}){
  let user=false;
  const handleSubmit = props => (
    user=users.find((d) => d.email == email && d.password==password)
   
    
  );
  return (
    <div >
      <h1 className="header">Please Enter your credentials to Login</h1>
      <div className="formcontainer">
        <form onSubmit={handleSubmit}>
          <div className="email">
          <label >
              Email:
              <input type="text" name="email" />
          </label>
          </div>
          <div className="password">
          <label >
              Password:
          <input type="password" name="password" />
          </label>
          </div>
          <input type="submit" value="Login" />
        </form>
        <a href="/signup">Not a user? Signup</a>
      </div>
    </div>
  );
}


    


export default Login;