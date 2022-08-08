import React from 'react'
import Login from '../Login/login'
import  { useState } from "react";
import SignUp from '../SignUp/signup';
export default function Modal(props) {

  const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        setActiveTab("tab2");
      };
  return (
    <div className={`modal ${props.handleOpen && 'show' }`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <ul className="nav nav-tabs card-header-tabs">
            <li className={activeTab === "tab1" ? "nav-item item-menu active" : "nav-item item-menu"} 
                  onClick = {handleTab1}>
                  Signin
              </li>
              <li className={activeTab === "tab2" ? "nav-item item-menu active" : "nav-item item-menu"} 
                  onClick = {handleTab2}>
                  SignUp
              </li>
            </ul>
            <button 
                type="button" 
                className="btn-close item-menu"
                onClick={props.handleClose}
                >
              <span>
                <i className="bi bi-x" />
              </span>
            </button>
          </div>
          {activeTab === "tab1" ?
          <Login/>  
        : <SignUp/>}
        </div>
      </div>
    </div>

  )
}
