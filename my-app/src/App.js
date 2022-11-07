import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import Dashboard from './components/pages/Dashboard'
import Productlist from './components/pages/Productlist'
import Adminpage from './components/pages/Adminpage'
import ProductDetails from './components/pages/ProductDetails'
import Changepassword from './components/pages/Changepassword'

import './App.css'

export default function App() {
    const [otp,setotp]=useState()
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path='/' element={ <LandingPage/> } />
                    <Route path='/login' element={ <LoginPage/> } />
                    <Route path='/register' element={ <RegisterPage/> } />
                    <Route path='/forget-password' element={ <ForgetPasswordPage setotp={setotp} /> } />
                    <Route path='/home' element={ <HomePage/> } />
                    <Route path='/dashboard' element={ <Dashboard/> } />
                    <Route path='/productlist' element={ <Productlist/> } />
                    <Route path='/adminpage' element={ <Adminpage/> } />
                    <Route path='/productdetails' element={ <ProductDetails/> } />
                    <Route path='/changepassword' element={ <Changepassword otp={otp}/> } />
                </Routes>
                
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>All Rights Reserved By <a href="https://www.wellsfargo.com/" target="_blank" rel="noopener noreferrer">Wells fargo</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: -250,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5",

    
}