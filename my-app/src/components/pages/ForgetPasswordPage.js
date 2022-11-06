import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

import '../../App.css'
import styles from "./Productlist.module.css";

export default function ForgetPasswordPage({setotp,otp}) {

    const navigate = useNavigate();
    const submit=()=>{
            console.log(otp)
            navigate(`/changepassword`)
    }



    return (
        <div className="text-center m-5-auto">
            <h2>Reset your password</h2>
            <div className={styles.container}>
            <section id={styles.body}>
            <form action="/">
                <p>
                    <label id="reset_pass_lbl">Mobile Number</label><br/>
                    <input type="tel" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send Otp</button>
                </p>
            </form>
            </section>
            </div>
            <div className={styles.container}>
            <section id={styles.body}>
            
                <p>
                    <label id="reset_pass_lbl">Verify Otp</label><br/>
                    <input type="password" name="otp" onChange={(e)=>setotp(e.target.value)} required />
                </p>
                <p>
                    <button id="sub_btn" onClick={submit}>Veriify Otp</button>
                </p>
            
            </section>
            </div>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
