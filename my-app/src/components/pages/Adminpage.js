import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


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
              <NavBtnLink to='/activateuser'>Show Cards</NavBtnLink>
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
            <th>Create Card</th>
            <th>Delete</th>


          </tr>
          <tr>
            <td>u.regid</td>
            <td>u.uname</td>
            <td>u.phone</td>
            <td>u.email</td>
            <td>u.address</td>
            <td>u.cardtype</td>
            <td>u.bankname</td>
            <td>u.acc_no</td>
            <td>u.ifsc_code</td>
            <td>u.applied_on</td>
            <td>u.isVerified</td>

            <td><button className="button">Create Card </button></td >
            <td><button className="button">Delete</button></td >

          </tr >
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
