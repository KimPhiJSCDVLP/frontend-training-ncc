import axios from "axios";
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

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data.token));
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;