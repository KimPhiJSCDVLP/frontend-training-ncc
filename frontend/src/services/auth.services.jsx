import axios from "axios";
import {message} from 'antd'
import { useNavigate } from 'react-router';
const API_URL = "http://localhost:5000/api/v1/auth/";
const register = (fullName, email, password) => {
  return axios.post(API_URL + "register", {
    fullName,
    email,
    password,
  })
  .then((res) => {
    if(res.data.accessToken){
      localStorage.setItem("user" ,JSON.stringify(res.data))
    }
  })
};


const login = async (email, password) => {
  try{
    axios.get('/sanctum/csrf-cookie');
    const {data} = await axios.post("/api/admin/login", {
      email,
      password,
    })
    localStorage.setItem("access_token", data.access_token);
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token;
  } catch (e) {
        throw e;
      }
};

const logout = () => {
  localStorage.removeItem("access_token");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("access_token"));
};
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;