import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


import "./activateuser.css";

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';


export default function ActivateUser() {

    const[users,setusers]=useState([])

    const submit=(id)=>{
        fetch('http://localhost:9797/cardapi/addcard/'+id, {
        }).then(response=>response.json())
        .then(response=>{
           console.log(response) 
        })

    }

    useEffect(()=>{
        fetch('http://localhost:9797/userRest/api/user', {
        }).then(response=>response.json())
        .then(response=>{
           console.log(response) 
           setusers(response)  
        })
      },[])



    return (
       
        <div>

            <header style={HeaderStyle}>

                <Nav>
                    <Bars />

                    <NavMenu>

                        <NavBtn>
                            <NavBtnLink to='/'>Home</NavBtnLink>
                        </NavBtn>

                        <NavBtn>
                            <NavBtnLink to='/adminproducts'>Add Products</NavBtnLink>
                        </NavBtn>

                        <NavBtn>
                            <NavBtnLink to='/adminpage'>Show Users</NavBtnLink>
                        </NavBtn>

                    </NavMenu>

                </Nav>
                <br style={{ clear: "both" }} />




            </header >



            <h2 style={{ textAlign: "center" }}>All User Card Details</h2>

            <table>
                <tr>
                    <th colspan="6" style={{ textAlign: "center" }}>CARD DETAILS DATABASE</th>
                </tr>
                <tr>
                    <th>Registration ID</th>
                    <th>Name</th>
                    <th>Card Type</th>
                    <th>Bank Name</th>
                    <th>Acc No</th>
                    <th>Accept</th>


                </tr>
                

                {users.map((user)=>{
        if(user.isVerified === "False")
           return(
            
                <tr>
                    <td>{user.regid}</td>
                    <td>{user.uname}</td>
                    <td>{user.cardtype}</td>
                    <td>{user.bankname}</td>
                    <td>{user.acc_no}</td>
                    <td><button onClick={()=>submit(user.regid)}>Accept</button></td>

                </tr>
           
            
    )
  })}

            </table>
        </div>


    )
}

const HeaderStyle = {
    width: "100%",
    height: "15vh",
    // background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
