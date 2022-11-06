import React,{useState}  from 'react'
import { Link } from 'react-router-dom'
import { useLocation,useNavigate } from "react-router-dom"

import '../../App.css'

export default function Changepassword({otp}) {
    
    return (
        
        <div className="text-center m-5-auto">
            {console.log(otp)}
            <h2>Change Password</h2>
            <form action="/home">
                <p>
                    <label>Enter Your New Password</label><br/>
                    <input type="password" name="password1" required />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="password2" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" >Change Password</button>
                </p>
            </form>
            <footer>
                <p>New User? <Link to="/register">Register here</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}