import React from 'react'
import axios from 'axios'
import {useState} from 'react'
export default function SignUp() {
const [userName, setUserName] = useState("")
const [password, setPassword] = useState("")

    const register = () =>{
        axios.post('https://reqres.in/api/register',{
            username : userName,
            password : password
        }).then((response) => {
            console.log(response);
        })
    }

  return (
    <div className="modal-body">
            <form action="" className="signin-form">
            <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" />
                <div className="invalid-message">
                  Please provide a valid Name address
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input type="text" className="form-control" />
                <div className="invalid-message">
                  Please provide a valid email address
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <div className="password-toggle">
                  <input type="password" className="form-control" />
                  <label htmlFor="" className="password-toggle-btn">
                    <input type="checkbox" className="password-toggle-check" />
                    <span className="password-toggle-indicatior" />
                  </label>
                </div>
              </div>
              <button className="btn btn-danger w-100">
                Signin
              </button>
            </form>
          </div>
  )
}
