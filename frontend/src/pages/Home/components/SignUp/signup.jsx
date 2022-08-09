import React from 'react'
import {useState} from 'react'
import AuthService from '../../../../services/auth.services'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignUp() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [fullName, setFullName] = useState("")
const [rePass, setRePass] = useState("")
const { register,watch, handleSubmit, formState: { errors } } = useForm();
  const handleSignup = async () => {
    try{
      await AuthService.register(fullName,email,password).then(
        (response) => {
          console.log("signup success" , response);
          notifySuccess()
        },
        (error) => {
          if(error.status=404){
            notifyError()
        }
        }
      );
    }
    catch (err) {
      console.log(err);
    }
}
  const handleEmail = (e) => {
    setEmail(e.target.value)
   }
   const handlePassword = (e) => {
    setPassword(e.target.value)
   }
   const handleRePass = (e) => {
    setRePass(e.target.value)
   }
   const handleFullName = (e) => {
    setFullName(e.target.value)
   }

   const notifyError = () => toast.error('Email đã được sử dụng', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });;
      const notifySuccess = () => toast.success('Tạo tài khoản thành công', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });;
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <div className="modal-body">
            <form onSubmit={handleSubmit(handleSignup)} className="signin-form">
            <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Name
                </label>
                <input 
                    type="text" 
                    className="form-control"
                    {...register("firstName", { 
                        required: true,
                        maxLength: 10,
                        pattern: /^[^\d+]*[\d+]{0}[^\d+]*$/
                       })}
                    value={fullName} 
                    onChange = {handleFullName} 
                />
                {errors.firstName && <p style = {{color :'red'}}>FirstName Không Được Bắt Đầu Bằng Số Và Dài Nhỏ Hơn 10</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    {...register("email",
                      {
                          required: true,
                          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      })}
                    value={email} 
                    onChange = {handleEmail} 
                />
                {errors.email && <p style = {{color :'red'}}>Nhập đúng định dạng email</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <div className="password-toggle">
                  <input 
                      type="password" 
                      className="form-control"
                        {...register("password", {
                          required: true,
                          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/
                      })}  
                      value={password} 
                      onChange = {handlePassword}
                  />
                  {errors.password && <p style = {{color :'red'}}>Mật khẩu phải chứa ít nhất 1 số , 1 chữ viết hoa độ dài lơn hơn 8 kí tự</p>}
                </div>
                
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Confirm-Password
                </label>
                <div className="password-toggle">
                  <input 
                      type="password" 
                      className="form-control"
                      {...register("confirm_password", {
                        required: true,
                        validate: (val) => {
                          if (watch('password') != val) {
                            return "Your passwords do no match";
                          }
                        },
                       })} 
                      value={rePass} 
                      onChange = {handleRePass}
                  />
                  {errors.confirm_password && <p style = {{color :'red'}}>Xác nhận mật khẩu sai</p>}
                </div>
              </div>
              <button className="btn btn-danger w-100" >
                SignUp
              </button>
            </form>
          </div>
    </>
    
  )
}
