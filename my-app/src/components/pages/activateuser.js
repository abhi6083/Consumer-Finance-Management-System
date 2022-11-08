import React from 'react'
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
                    <th>Card_No.</th>
                    <th>Card Type</th>
                    <th>Validity</th>
                    <th>Initial_bal</th>
                    <th>Available_bal</th>


                </tr>
                <tr>
                    <td>c.regid</td>
                    <td>c.cardno</td>
                    <td>c.cardtype</td>
                    <td>c.validity | date:'shortDate'</td>
                    <td>c.initialbal</td>
                    <td>c.availbal</td>

                </tr>
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
