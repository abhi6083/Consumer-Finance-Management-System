import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

import '../../App.css'


export default function SignUpPage() {
    const [name,setname]=useState()
    const[dob,setdob]=useState()
    const[email,setemail]=useState()
    const[pno,setpno]=useState()
    const[uname,setuname]=useState()
    const[pw,setpw]=useState()
    const[conpw,setconpw]=useState()
    const[add,setadd]=useState()
    const[ctype,setctype]=useState()
    const[bank,setbank]=useState()
    const[acc,setacc]=useState()



    const navigate = useNavigate();


const submit=()=>{
    var flag=1
    const obj={
        uname : uname,
        phone : pno,
        email : email,
        upass : pw,
        address : add,
        cardtype : ctype,
        bankname : bank,
        acc_no : acc
    }


    fetch('http://localhost:9797/userRest/api/userexists/'+uname, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    })
    .then(response => response.json())
    .then(response =>{
        if( JSON.stringify(response)==="true"){
            alert("User Already Exist")
            navigate('/login')   
        }
        else{
            fetch('http://localhost:9797/userRest/api/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( obj )
            })
            .then(response => response.json())
            .then(response =>{
                if( JSON.stringify(response)==="true"){
                    navigate("/login")
                }
            }
            )
            
        }
    }
    )








    
    
    

}

    return (
        <div className="text-center m-5-auto">
            <h2>Sign Up</h2>
            <h5>Create your personal account</h5>
                <p>
                    <label>Name</label><br />
                    <input type="text" name="name" onChange={(e)=>setname(e.target.value)} required />
                </p>
                <p>
                    <label>Date of Birth</label><br />
                    <input type="date" name="dateOfBirth" onChange={(e)=>setdob(e.target.value)} required />
                </p>
                <p>
                    <label>Email address</label><br />
                    <input type="email" name="email" onChange={(e)=>setemail(e.target.value)} required />
                </p>
                <p>
                    <label>Phone No.</label><br />
                    <input type="tel" name="phoneNumber" onChange={(e)=>setpno(e.target.value)}  required />
                </p>
                <p>
                    <label>Username</label><br />
                    <input type="text" name="firstName" onChange={(e)=>setuname(e.target.value)} required />
                </p>
                <p>
                    <label>Password</label><br />
                    <input type="password" name="password" onChange={(e)=>setpw(e.target.value)} requiredc />
                </p>
                <p>
                    <label>Confirm password</label><br />
                    <input type="password" name="confirmPassword" onChange={(e)=>setconpw(e.target.value)} required />
                </p>
                <p>
                    <label>Address</label><br />
                    <input type="text" name="address" onChange={(e)=>setadd(e.target.value)} required />
                </p>
                <p>
                    <label>Card Type</label><br />
                    <input type="radio" id="gold" name="card_type" value="Gold" onChange={(e)=>setctype(e.target.value)} />
                    <label for="gold">Gold</label><br />
                    <input type="radio" id="titanium" name="card_type" value="Titanium" onChange={(e)=>setctype(e.target.value)} />
                    <label for="titanium">Titanium</label><br />
                </p>
                <p>
                    <label>Select Bank</label><br />
                    <select id="banks" name="banks" onChange={(e)=>setbank(e.target.value)}>
                        <option value="wellsFargo">Wells Fargo</option>
                        <option value="jpmc">JPMC</option>
                        <option value="goldmanSachs">Goldman Sachs</option>
                        <option value="bankOfAmerica">Bank of America</option>
                    </select>
                </p>
                <p>
                    <label>Saving Account No.</label><br />

                    <input type="text" name="accountNumber" required onChange={(e)=>setacc(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" onClick={submit}>Register</button>
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
    
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
