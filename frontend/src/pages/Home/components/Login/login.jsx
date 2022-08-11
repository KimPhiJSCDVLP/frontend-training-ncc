import React from 'react'
import AuthService from '../../../../services/auth.services'
import {useState} from 'react'

export default function Login() {
   const [email, setEmail] = useState(' ')
   const [password, setPassword] = useState(' ')
   const handleEmail = (e) => {
    setEmail(e.target.value)
   }
   const handlePassword = (e) => {
    setPassword(e.target.value)
   }
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
         await AuthService.login(email,password);
         // redirect
         console.log('log');
        }
        catch(e){
          console.log(e,'e');
        }
   
      
    }
  return (
    <div className="modal-body">
            <form onSubmit={handleLogin} className="signin-form">
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input type="text" className="form-control"  value={email} onChange = {handleEmail}/>
                <div className="invalid-message">
                  Please provide a valid email address
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <div className="password-toggle">
                  <input type="password" className="form-control"   value={password} onChange = {handlePassword}/>
                  <label htmlFor="" className="password-toggle-btn">
                    <input type="checkbox" className="password-toggle-check"  />
                    <span className="password-toggle-indicatior" />
                  </label>
                </div>
              </div>
              <button className="btn btn-danger w-100" >
                Signin
              </button>
            </form>
          </div>
  )
}