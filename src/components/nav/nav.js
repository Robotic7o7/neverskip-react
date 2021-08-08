import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./nav.css";
import { useState, useEffect } from "react"


function Nav(props) {

    useEffect(() => {

    })

    function logout(){
        localStorage.setItem("admission_number", null);
        localStorage.setItem("gender", null);
        localStorage.setItem("authToken", null);
        localStorage.setItem("student_name", null);
        localStorage.setItem("dateofbirth", null);
        localStorage.setItem("student_id", null);
        localStorage.setItem("student_email", null);
        localStorage.setItem("class_id", null);
        window.location.href="/";
    }

    return (
        <>
            <div className="nav-bar">
                <div className="nav-bar-left-container">
                    <img className="sb-logo" src="/icons8-menu.svg" />
                </div>
                <div className="nav-bar-right-container">
                    <div className="nav-bar-credential-area">
                        <Link to="/account" className="nav-main-links"><img src="/icons8-test-account-48.png" className="nav-account-icon" /></Link>
                        <div className="nav-bar-crdential-disp-area">
                            <a href to="/" className="nav-main-links"><b>{localStorage.getItem("student_name")}</b></a>
                            <a href to="/" className="nav-main-links">{localStorage.getItem("student_email")}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="account-side-nav">
                <div className="account-side-nav-content-container">
                    <Link to="/account"><img src="/icons8-test-account-48.png" className="account-side-nav-icon" /></Link>
                    <br/>
                    <a href to="/" className="nav-main-links"><b>{localStorage.getItem("student_name")}</b></a>
                    <a href to="/" className="nav-main-links">{localStorage.getItem("student_email")}</a>
                    <button className="account-side-nav-logout-btn" onClick={logout}>LOGOUT</button>
                </div>
            </div>
        </>
    )

}

export default Nav;