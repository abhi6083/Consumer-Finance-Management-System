import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import AdminLoginPage from './components/pages/adminlogin'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import Dashboard from './components/pages/Dashboard'
import Productlist from './components/pages/Productlist'
import Adminpage from './components/pages/Adminpage'
import ProductDetails from './components/pages/ProductDetails'
import Changepassword from './components/pages/Changepassword'
import ActivateUser from './components/pages/activateuser'
import AddProduct from './components/pages/addProduct'



import './App.css'

export default function App() {
    const [otp,setotp]=useState()
    const [regid,setregid]=useState()
    
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path='/' element={ <LandingPage/> } />
                    <Route path='/login' element={ <LoginPage setregid={setregid} /> } />
                    <Route path='/adminlogin' element={ <AdminLoginPage/> } />
                    <Route path='/register' element={ <RegisterPage/> } />
                    <Route path='/forget-password' element={ <ForgetPasswordPage setotp={setotp} /> } />
                    <Route path='/home' element={ <HomePage/> } />
                    <Route path='/dashboard' element={ <Dashboard/> } />
                    <Route path='/productlist' element={ <Productlist /> } />
                    <Route path='/adminpage' element={ <Adminpage/> } />
                    <Route path='/productinfo/:prodid' element={ <ProductDetails/> } />
                    <Route path='/changepassword' element={ <Changepassword otp={otp}/> } />
                    <Route path='/activateuser' element={ <ActivateUser/> } />
                    <Route path='/addproduct' element={ <AddProduct/> } />
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