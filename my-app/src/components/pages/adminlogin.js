import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function AdminLoginPage() {
    return (

        <section id="body">
            <form>
                <h2 >AdminLogin</h2>
                <div className="container" >
                    <div>
                        <label for="username"><b>Admin Name</b></label>
                        <input type="text" name="username" placeholder="Enter AdminName" required /><br />
                    </div>
                    <br />
                    <div>
                        <label for="userpass"><b>Password</b></label>
                        <input type="password" name="userpass" placeholder="Enter Password" required /> <br />
                    </div>
                    <br />
                    <div style={{ display: "flex" }}>
                        <button type="submit" value="Login"> LOGIN</button>
                    </div>
                </div>
                <div className="alert-danger">
                    <span><b>Message</b> </span>
                </div>
            </form>
        </section>


    )
}
