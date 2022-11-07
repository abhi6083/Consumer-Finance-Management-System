import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    const[uname,setuname]=useState()
    const[pass,setpass]=useState()


    const submit=()=>{
        fetch('http://localhost:9797/userRest/api//uservalidate/'+uname+'/'+pass, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    })
    .then(response => response.json())
    .then(response =>{
        if( JSON.stringify(response)==='1'){
            alert("User Name Doesn't exist")   
        }
        else if( JSON.stringify(response)==='2'){
            alert("Correct Details")   
        }
        else{
            console.log(JSON.stringify(response))
            alert("Wrong Password")
        }
    }
    )
    }





    return (
        <div className="text-center m-5-auto">
            <h2>LOGIN</h2>
            
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" onChange={(e)=>setuname(e.target.value)} required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" onChange={(e)=>setpass(e.target.value)} required />
                </p>
                <p>
                    <button id="sub_btn" onClick={submit}>Login</button>
                </p>
            <footer>
                <p>New User? <Link to="/register">Register here</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
