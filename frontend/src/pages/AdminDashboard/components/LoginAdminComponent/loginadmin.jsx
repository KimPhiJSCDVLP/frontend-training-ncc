import React from 'react'
import AuthService from '../../../../services/auth.services'
import {useState} from 'react'
import { useNavigate } from 'react-router';
import './style.css'
export default function LoginAdmin() {
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const handleEmail = (e) => {
     setEmail(e.target.value)
    }
    const handlePassword = (e) => {
     setPassword(e.target.value)
    }
    const navigate = useNavigate()
     const handleLogin = async (e) => {
         e.preventDefault();
         try{
          await AuthService.login(email,password);
          console.log('success login');
          navigate("/admin");
         }
         catch(e){
           console.log(e,'e');
         }
     }
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-2" />
            <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
                <i className="fa fa-key" aria-hidden="true" />
            </div>
            <div className="col-lg-12 login-title">ADMIN PANEL</div>
            <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                    <label className="form-control-label">USERNAME</label>
                    <input type="email" value={email} onChange = {handleEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <input type="password" value={password} onChange = {handlePassword} className="form-control" i="" />
                    </div>
                    <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text">
                        {/* Error Message */}
                    </div>
                    <div className=" login-btm login-button">
                        <button type="submit" className="btn btn-outline-primary">
                        LOGIN
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            <div className="col-lg-3 col-md-2" />
            </div>
        </div>
        </div>
    </>
  )
}
