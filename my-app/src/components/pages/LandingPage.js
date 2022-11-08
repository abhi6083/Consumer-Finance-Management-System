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

                <Nav>
                    <Bars />
                    <h1 >Consumer Finance Management System</h1> 

                    <NavMenu>

                            <NavBtnLink to='/register'>Regiser</NavBtnLink>
                            <NavBtnLink to='/adminlogin'>Login Admin</NavBtnLink>
                            <NavBtnLink to='/login'>Login User</NavBtnLink>

                    </NavMenu>

                </Nav>

                <div class="banner header-text">
                    <div class="banner-item">
                    {/* <div class="text-content">
                        <h4>Best Offer</h4>
                        <h2>New Arrivals On Sale</h2>
                    </div> */}
                    </div>
                </div>

                <section id="body">

                <div>

                <div class="latest-products">
                    <div class="container">
                        {/* <div class="row"> */}
                        {/* <div class="col-md-12"> */}
                            <div class="section-heading">
                            <h2>Latest Products</h2>
                            </div>
                        {/* </div> */}
                        <div class="column">
                            <div class="product-item">
                            <img src={Image} alt="" />
                            <div class="down-content">
                                <a href="#"><h4>Tittle goes here</h4></a>
                                <p>PRODUCT NAME:</p>
                                <p>PRODUCT DETAIL:</p>
                                <p>COST:</p>
                                
                                <NavBtn>
                                    <NavBtnLink to='/register'>BUY NOW</NavBtnLink>
                                </NavBtn>
                            </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="product-item">
                            <img src={Image} alt="" />
                            <div class="down-content">
                                <a href="#"><h4>Tittle goes here</h4></a>
                                <p>PRODUCT NAME:</p>
                                <p>PRODUCT DETAIL:</p>
                                <p>COST:</p>
                                
                                <NavBtn>
                                    <NavBtnLink to='/register'>BUY NOW</NavBtnLink>
                                </NavBtn>
                            </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="product-item">
                            <img src={Image} alt="" />
                            <div class="down-content">
                                <a href="#"><h4>Tittle goes here</h4></a>
                                <p>PRODUCT NAME:</p>
                                <p>PRODUCT DETAIL:</p>
                                <p>COST:</p>
                                                               
                                <NavBtn>
                                    <NavBtnLink to='/register'>BUY NOW</NavBtnLink>
                                </NavBtn>
                            </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div> 
                </div>


                <div>
                <div class="available-cards">
                    <div class="container">
                        <div class="section-heading">
                            <h2>available cards</h2>
                        </div>
                        <div >
                        <table class="cards-table">
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
                    </div>
                </div> 
                </div>

                <div>
                <div class="eligibility-criteria">
                <div class="container">
                    <div class="section-heading">
                        <h2>eligibility criteria</h2>
                    </div>
                    <div >
                    <ul class="featured-list">
                        <li>You are 18 years of age or over.</li>
                        <li>Indian citizens only can apply.</li>
                        <li> Customers with a prior relationship should be earning Rs. 25,000 per month.</li>
                        <li> New applicants should be earning Rs. 50,000 per month to avail this service. </li>
                        <li>The information supplied by you is true and correct.</li>
                    </ul>
                    </div>
                </div>
                </div>
                </div>

                <div>
                <div class="terms-conditions">
                <div class="container">
                    <div class="section-heading">
                        <h2>terms & conditions</h2>
                    </div>
                    <div >
                    <ul class="featured-list">
                        <li>Joining fee is a fee that a issuer may require you to pay annually to use its credit card.</li>
                        <li>A late fee is a charge for any payment made after the due date.</li>
                        <li>Joining Fees for Gold Membership will be Rs 500,which will be automatically debited from your card limit</li>
                        <li>Joining Fees for Titanium Membership will be Rs 1000,which will be automatically debited from your card limit</li>
                    </ul>
                    </div>
                </div>
                </div>
                </div>



            



            
                
                <div>
                    {/* <div>
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
                    </div> */}
                    {/* <div id="cardDetails">
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
                    </div> */}

                    {/* <div id="eligibility">
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
                    </div> */}

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