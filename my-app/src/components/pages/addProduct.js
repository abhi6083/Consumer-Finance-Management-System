import React from 'react'
import { Link } from 'react-router-dom'


import "./addProduct.css";

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';


export default function AddProduct() {
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
                            <NavBtnLink to='/adminpage'>Show Users</NavBtnLink>
                        </NavBtn>

                        <NavBtn>
                            <NavBtnLink to='/activateuser'>Show Cards</NavBtnLink>
                        </NavBtn>

                    </NavMenu>

                </Nav>

                <br style={{ clear: "both" }} />




            </header >




            <div className="header">
                <h2>Admin's Product Adding Point</h2>
            </div>

            <div className="container">
                <div className="card">
                    <section id="body">
                        <form>
                            <div>
                                <label for="prodid">Product ID</label>
                                <input type="text" name="prodid" required />
                            </div>
                            <div>
                                <label for="prodname">Product Name</label>
                                <input type="text" name="prodname" required />
                            </div>
                            <div>
                                <label for="image">Product Image</label>
                                <input type="text" name="image" required />
                            </div>
                            <div>
                                <label for="description">Product Description</label>
                                <input type="text" name="description" required />
                            </div>
                            <div>
                                <label for="price">Product Price</label>
                                <input type="text" name="price" required />
                            </div>
                            <div style={{display: "flex"}}>
                                <button type="submit">Calculate EMI's</button>
                            </div>
                            <div>
                                <label for="emi3">EMI 3M</label>
                                <input type="text" name="emi3" required />
                            </div>
                            <div>
                                <label for="emi6">EMI 6M</label>
                                <input type="text" name="emi6" required />
                            </div>
                            <div>
                                <label for="emi9">EMI 9M</label>
                                <input type="text" name="emi9" required />
                            </div>
                            <div>
                                <label for="emi1y">EMI 1Y</label>
                                <input type="text" name="emi1y" required />
                            </div>
                            <div>
                                <label for="image">Product Image</label>
                                <input type="file" name="image"
                                    style={{display: 'inline-block'}} accept="image/x-png,image/jpeg,image/jpg" required />
                            </div>
                            <div style={{display: "flex"}}>
                                <button type="submit" value="Save Product">Save Product</button>
                            </div>
                        </form>
                    </section>

                </div>
            </div>
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
