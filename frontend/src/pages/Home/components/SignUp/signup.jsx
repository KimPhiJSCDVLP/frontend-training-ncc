import React from 'react'
import axios from 'axios'
import {useState} from 'react'
export default function SignUp() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [fullName, setFullName] = useState("")

  const register = () =>{
      axios.post('http://localhost:5000/api/v1/auth/register',{
          email : email,
          password : password,
          fullName : fullName
      }).then((response) => {
          console.log(response);
      })
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
   }
   const handlePassword = (e) => {
    setPassword(e.target.value)
   }
   const handleFullName = (e) => {
    setFullName(e.target.value)
   }

  return (
    <div className="modal-body">
            <form action="#" className="signin-form">
            <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" value={fullName} onChange = {handleFullName} />
                <div className="invalid-message">
                  Please provide a valid Name address
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input type="text" className="form-control" value={email} onChange = {handleEmail} />
                <div className="invalid-message">
                  Please provide a valid email address
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <div className="password-toggle">
                  <input type="password" className="form-control" value={password} onChange = {handlePassword} />
                  <label htmlFor="" className="password-toggle-btn">
                    <input type="checkbox" className="password-toggle-check" />
                    <span className="password-toggle-indicatior" />
                  </label>
                </div>
              </div>
              <button className="btn btn-danger w-100" onClick={register}>
                Signin
              </button>
            </form>
          </div>
  )
}
