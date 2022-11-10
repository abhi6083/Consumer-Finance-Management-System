
import { Link, } from 'react-router-dom'
import React,{useState,useEffect} from 'react'


import "./Adminpage.module.css";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';


export default function Adminpage() {


  const [user,setuser]=useState([])
  useEffect(()=>{
    fetch('http://localhost:9797/userRest/api/user', {
    }).then(response=>response.json())
    .then(response=>{
       console.log(response) 
       setuser(response)  
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
              <NavBtnLink to='/addproduct'>Add Product</NavBtnLink>
            </NavBtn>

            <NavBtn>
              <NavBtnLink to='/activateuser'>UnFerified Users </NavBtnLink>
            </NavBtn>

          </NavMenu>

        </Nav>

        <br style={{ clear: "both" }} />




      </header >




      
        <table>
          <tr>
            <th colspan="14" style={{textAlign: "center"}}>USER DETAILS DATABASE</th>
          </tr>
          <tr>
            <th>Registration ID</th>
            <th>UName</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Card Type</th>
            <th>Bank Name</th>
            <th>Account No.</th>
            <th>Ifsc code</th>
            <th>Applied_on</th>
            <th>IsVerified</th>


          </tr>
          {user.map((u)=>{
    return(
          <tr>
            <td>{u.regid}</td>
            <td>{u.uname}</td>
            <td>{u.phone}</td>
            <td>{u.email}</td>
            <td>{u.address}</td>
            <td>{u.cardtype}</td>
            <td>{u.bankname}</td>
            <td>{u.acc_no}</td>
            <td>{u.ifsc_code}</td>
            <td>{u.applied_on}</td>
            <td>{u.isVerified}</td>

          </tr >
           )})}
        </table >


      
    </div >


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
