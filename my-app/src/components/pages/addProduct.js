import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'


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


    const[prodid,setprodid]=useState()
    const[prodname,setprodname]=useState()
    const[proddesc,setproddesc]=useState()
    const[prodimg,setprodimg]=useState()
    const[price,setprice]=useState()
    const[emi_3m,setemi_3m]=useState()
    const[emi_6m,setemi_6m]=useState()
    const[emi_9m,setemi_9m]=useState()
    const[emi_1y,setemi_1y]=useState()



    const navigate = useNavigate();

    const submit=()=>{
        var flag=1
        const obj={
            
            prodname : prodname,
            proddesc : proddesc,

            price : price,
            emi_3m : emi_3m,
            emi_6m : emi_6m,
            emi_9m : emi_9m,
            emi_1y : emi_1y
        }
    
        fetch('http://localhost:9797/api/products', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( obj )
            })
            .then(response => response.json())
            .then(response =>{
                console.log(response)
                if( JSON.stringify(response)==="true"){
                    navigate("/activateuser")
                }
            }
            )
        
        
    
}

    

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
                        
                            
                            <div>
                                <label for="prodname">Product Name</label>
                                <input type="text" name="prodname" onChange={(e)=>setprodname(e.target.value)} required />
                            </div>
                            {/* <div>
                                <label for="image">Product Image</label>
                                <input type="text" name="image" onChange={(e)=>setprodimg(e.target.value)} required />
                            </div> */}
                            <div>
                                <label for="description">Product Description</label>
                                <input type="text" name="description" onChange={(e)=>setproddesc(e.target.value)} required />
                            </div>
                            <div>
                                <label for="price">Product Price</label>
                                <input type="text" name="price" onChange={(e)=>setprice(e.target.value)} required />
                            </div>
                            {/* <div style={{display: "flex"}}>
                                <button type="submit" onClick={calculateEMI}>Calculate EMI's</button>
                            </div> */}
                            <div>
                                <label for="emi3">EMI 3M</label>
                                <input type="text" name="emi3" onChange={(e)=>setemi_3m(e.target.value)} required />
                            </div>
                            <div>
                                <label for="emi6">EMI 6M</label>
                                <input type="text" name="emi6" onChange={(e)=>setemi_6m(e.target.value)} required />
                            </div>
                            <div>
                                <label for="emi9">EMI 9M</label>
                                <input type="text" name="emi9" onChange={(e)=>setemi_9m(e.target.value)} required />
                            </div>
                            <div>
                                <label for="emi1y">EMI 1Y</label>
                                <input type="text" name="emi1y" onChange={(e)=>setemi_1y(e.target.value)} required />
                            </div>
                            {/* <div>
                                <label for="image">Product Image</label>
                                <input type="file" name="image"
                                    style={{display: 'inline-block'}} accept="image/x-png,image/jpeg,image/jpg" onChange={(e)=>setprodimg(e.target.value)} required />
                            </div> */}
                            <div style={{display: "flex"}}>
                                <button value="Save Product" onClick={submit}>Save Product</button>
                            </div>
                        
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