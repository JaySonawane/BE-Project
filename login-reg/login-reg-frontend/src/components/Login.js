import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const loginUser = async (e) => {
        e.preventDefault();


        //const { email, password } = user;


        //send data from frontend to server
        /*
        const res= await fetch("/sigin",{
            method: 'POST',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({email,password})
        });

        //get response from server
        const data=res.json();
        if(data.status===422 || !data){
            window.alert("Invalid Credentials");
        }else{
            window.alert("Login Successful!");
            navigate('/');
        }
        */
        axios.post('http://localhost:5000/signin', user)
            .then(response => {
                window.alert("Login Succesful");
                //navigate('/');
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

            
    }

    return (
        <div className="ui container login-component">
            <div className="ui centered card">
                <form method="POST" className="form-card ui form">
                    <div className="field">
                        <label>Email</label>
                        <div className="ui left icon input">
                            <input name="email" value={user.email} type="text" placeholder="Email" onChange={handleInputChange} />
                            <i aria-hidden="true" className="user icon"></i>
                        </div>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <div className="ui left icon input">
                            <input name="password" value={user.password} type="password" placeholder="Password" onChange={handleInputChange} />
                            <i aria-hidden="true" className="lock icon"></i>
                        </div>

                    </div>

                    <button className="ui fluid button" type="submit" onClick={loginUser}>Login</button>
                    <div className="ui tiny header centered">
                        <NavLink to="/register">New User? Register here</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;