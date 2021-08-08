import React from "react";
import { useState, useEffect } from "react"
import { useHistory, Redirect } from 'react-router-dom';

import "./login.css";


function LoginPage(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        alert(email + password);
    }

    const history = useHistory()


    function Submit() {
        var validated = 1;
        if (!email) {
            validated = 0;
            document.getElementById('email').style.border = "1px solid red";
        }

        if (!password) {
            validated = 0
            document.getElementById('password').style.border = "1px solid red";
        }

        if (validated == 1) {
            fetch('http://localhost:3000/auth/student/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message != "failed") {
                        console.log(data)
                        props.setLoggedIn(true)
                        localStorage.setItem('authToken', data.token)
                        localStorage.setItem('student_id', data.student_id)
                        localStorage.setItem('student_name', data.name)
                        localStorage.setItem('dateofbirth', data.dob)
                        localStorage.setItem('gender', data.gender)
                        localStorage.setItem('admission_number', data.admission_number)
                        localStorage.setItem('student_email', data.email)
                        localStorage.setItem("class_id", data.classRoom);
                        props.setDisplayName(data.name)
                        if(data.classRoom=== "61077a2c3fc5f80f74fd915a"){
                            window.location.href="/join-class"
                        }
                        else{
                            window.location.href="/home"
                        }  
                    }

                    else {
                        alert("Invalid team code or pass key. Please try again!")
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }

    }

    function revertStyle() {
        document.getElementById('email').style.border = "none";
        document.getElementById('password').style.border = "none";
    }

    console.log(props.loggedIn)
    if (!props.loggedIn) {
        console.log(props.loggedIn)
        return (
            <div className="login">
            <div className="login-section-top">
                <br />
                <br />
                <label className='login-page-title'>LOGIN</label>
                <div className="login-box">
                    <input className="login-input-field" id="email" placeholder="ENTER EMAIL" onChange={e => { e.preventDefault(); setEmail(e.target.value); revertStyle() }} />
                    <input className="login-input-field" id="password" placeholder="ENTER PASSWORD" onChange={e => { e.preventDefault(); setPassword(e.target.value); revertStyle() }} />
                    <button className="submit-button" onClick={Submit}>LOGIN</button>
                </div>
            </div>
            <div className="login-section-bottom">

            </div>
            <div className="login-footer">
                <label className="login-footer-label">NeverSkip | 2020 - 2021</label>
            </div>
        </div>)
    }
    else {
        return (
            <Redirect
                to="/"
            />
        )
    }
}

export default LoginPage;