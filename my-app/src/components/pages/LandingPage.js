import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
// import BackgroundImage from '../../assets/images/bg.png'



import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

export default function LandingPage() {
    return (

    
        <header style={HeaderStyle}>

            <>
                <Nav>
                    <Bars />

                    {/* <NavMenu>
                        <NavLink to='/about' activeStyle>
                            About
                        </NavLink>
                        <NavLink to='/events' activeStyle>
                            Events
                        </NavLink>
                        <NavLink to='/annual' activeStyle>
                            Annual Report
                        </NavLink>
                        <NavLink to='/team' activeStyle>
                            Teams
                        </NavLink>
                        <NavLink to='/blogs' activeStyle>
                            Blogs
                        </NavLink>
                        <NavLink to='/sign-up' activeStyle>
                            Sign Up
                        </NavLink>
                    </NavMenu> */}
                    <NavMenu>

                        <NavBtn>
                            <NavBtnLink to='/register'>Register</NavBtnLink>
                        </NavBtn>

                        <NavBtn>
                            <NavBtnLink to='/login'>Login Admin</NavBtnLink>
                        </NavBtn>

                        <NavBtn>
                            <NavBtnLink to='/login'>Login User</NavBtnLink>
                        </NavBtn>

                    </NavMenu>

                </Nav>
            </>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    // background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}