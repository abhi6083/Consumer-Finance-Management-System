import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../../App.css'

export default function AdminLoginPage() {

    const [uname, setuname] = useState()
    const [pass, setpass] = useState()
    const navigate = useNavigate();

    const submit = () => {
        fetch('http://localhost:9797/adminRest/api/validate/' + uname + '/' + pass, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                if (JSON.stringify(response) === '1') {
                    alert("Admin Doesn't exist")
                }
                else if (JSON.stringify(response) === '2') {
                    // fetch('http://localhost:9797/userRest/api/userfind/' + uname, {
                    // }).then(response => response.json())
                    //     .then(response => {
                            console.log("Correct password")
                            navigate("/adminpage")
                        }
                else {
                    console.log(JSON.stringify(response))
                    alert("Wrong Credentials")
                }
            }
            )
    }


    return (

        <section id="body">
            <form>
                <h2 >AdminLogin</h2>
                <div className="container" >
                    <div>
                        <label for="username"><b>Admin Name</b></label>
                        <input type="text" name="username" placeholder="Enter AdminName" onChange={(e)=>setuname(e.target.value)} required /><br />
                    </div>
                    <br />
                    <div>
                        <label for="userpass"><b>Password</b></label>
                        <input type="password" name="userpass" placeholder="Enter Password" onChange={(e)=>setpass(e.target.value)} required /> <br />
                    </div>
                    <br />
                    <div style={{ display: "flex" }}>
                        <button type="submit" value="Login" onClick={submit}>LOGIN</button>
                    </div>
                </div>
            </form>
        </section>


    )
}
