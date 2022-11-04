import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import Image from '../../assets/images/laptop.jpg'



import './landingPage.css'



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


        <>
            <header style={HeaderStyle}>

                <Nav>
                    <Bars />

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



            </header >

            <section id="body">
                
                <div>
                    <div>
                        <div id="product">
                            <div id="prodctImage">
                                <img src={Image} />
                            </div>
                            <div id="productInfo" >
                                <p>PRODUCT NAME:</p>
                                <p>PRODUCT DETAIL:</p>
                                <p>COST:</p>

                                <NavBtn>
                                    <NavBtnLink to='/register'>BUY NOW</NavBtnLink>
                                </NavBtn>
                            </div>
                        </div>
                    </div>
                    <div id="cardDetails">
                        <h4>Available Cards</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Card Type</th>
                                    <th>Card Validity(in months)</th>
                                    <th>Card Limit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>GOLD</td>
                                    <td>12 months</td>
                                    <td>50,000</td>
                                </tr>
                                <tr>
                                    <td>TITANIUM</td>
                                    <td>24 months</td>
                                    <td>1,00,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div id="eligibility">
                        <h4>Elgibility Criteria</h4>
                        <ol id="uleligibility">
                            <li>You are 18 years of age or over.</li>
                            <li>Indian citizens only can apply.</li>
                            <li>
                                Customers with a prior relationship should be earning Rs. 25,000 per
                                month.
                            </li>
                            <li>
                                New applicants should be earning Rs. 50,000 per month to avail this
                                service
                            </li>
                            <li>The information supplied by you is true and correct.</li>
                        </ol>
                    </div>
                    <div id="termsandconditions">
                        <h4>Terms & Conditions</h4>
                        <ol>
                            <li>
                                Joining fee is a fee that a issuer may require you to pay annually to
                                use its credit card.
                            </li>
                            <li>A late fee is a charge for any payment made after the due date.</li>
                            <li>Joining Fees for Gold Membership will be Rs 500,which will be automatically debited from your card limit</li>
                            <li>Joining Fees for Titanium Membership will be Rs 1000,which will be automatically debited from your card limit</li>

                        </ol>
                    </div>

                </div>
            </section >

        </>


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