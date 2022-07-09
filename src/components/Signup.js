import React from 'react'
import "./CSS/Signup.css"
function Signup() {
    const handleSubmit = props => (
       console.log('')
        
      );
  return (
    <div >
      <h1 className="header">Please Enter your Details to Signup</h1>
      <div className="formcontainer">
        <form onSubmit={handleSubmit}>
          <div className="username">
          <label >
              Username:
              <input type="text" name="username" />
          </label>
          </div>
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
          <input type="submit" value="Signup" />
        </form>
       
      </div>
    </div>
  )
}

export default Signup;