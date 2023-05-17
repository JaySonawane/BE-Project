import React from 'react';
import { useState } from 'react';
import './register.css';
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        email: '',
        number: '',
        password: '',
        cpassword: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    // const onClickRegister = () => {
    //     const { username, email, password, cpassword } = user;

    //     if (username && email && password && (password === cpassword)) {
    //         axios.post("http://localhost:4000/register", user)
    //             .then(res => console.log(res));
    //     }
    //     else {
    //         alert("Invalid Input");
    //     }
    // }
    /*
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, email, number, password, cpassword } = user;
        //send data to database
        const res = await fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ username, email, number, password, cpassword }) //server understands only string
        })


        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("Registration Unsuccessful");

        } else {
            window.alert("Registration Successful");
            navigate('/login');
        }
    }

    */
    const onClickRegister = async (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/signup', user)
            .then(response => {
                if (response.status === 422 || !response.data) {
                    window.alert("Registration Unsuccessful");

                } else {
                    window.alert("Registration Successful");
                    navigate('/login');
                }
            })
            .catch(error => {
                // handle error here

                if (error.response) {
                    // server responded with an error status code (4xx or 5xx)
                    const errorMessage = error.response.data.message;
                    window.alert(errorMessage);
                    // update form with error message
                  } else if (error.request) {
                    // server did not respond
                    console.error(error.request);
                  } else {
                    // other error occurred
                    console.error(error.message);
                  }
                  console.error(error.config);
            });
        // Handle successful response
    };

    return (
        <div className="ui container">
            <div className="ui centered card">
                <form method="POST" className="form-card ui form">
                    <div className="field">
                        <label>UserName</label>
                        <div className="ui left icon input">
                            <input name="username" value={user.username} type="text" placeholder="UserName" onChange={handleInputChange} />
                            <i aria-hidden="true" className="user icon"></i>
                        </div>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <div className="ui left icon input">
                            <input name="email" value={user.email} type="email" placeholder="Email" onChange={handleInputChange} />
                            <i aria-hidden="true" className="mail outline icon"></i>
                        </div>
                    </div>
                    <div className="field">
                        <label>Phone</label>
                        <div className="ui left icon input">
                            <input name="number" value={user.number} type="tel" placeholder="Phone No" onChange={handleInputChange} />
                            <i aria-hidden="true" className="phone icon"></i>
                        </div>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <div className="ui left icon input">
                            <input name="password" value={user.password} type="password" placeholder="Password" onChange={handleInputChange} />
                            <i aria-hidden="true" className="lock icon"></i>
                        </div>
                    </div>
                    <div className="field">
                        <label>Re-enter Password</label>
                        <div className="ui left icon input">
                            <input name="cpassword" value={user.cpassword} type="password" placeholder="Re-enter Password" onChange={handleInputChange} />
                            <i aria-hidden="true" className="lock icon"></i>
                        </div>
                    </div>
                    {/*<div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox" tabindex="0" className="hidden" />
                            <label>I agree to the Terms and Conditions</label>
                        </div>
                     </div>*/}
                    <button className="ui fluid button" type="submit" onClick={onClickRegister}>Register</button>
                    <div className="ui tiny header centered">
                        <NavLink to="/login">Already a User? Login</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;



