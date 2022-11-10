import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


import styles from "./Dashboard.module.css";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

export default function Dashboard({regid}) {

    const[card,setcard]=useState([])
    const[prodh,setprodh]=useState([])

    useEffect(()=>{
        fetch('http://localhost:9797/producthistory/api/ph/'+regid, {
        }).then(response=>response.json())
        .then(response=>{
           console.log(response) 
           setprodh(response) 
        })
        fetch('http://localhost:9797/cardapi/findcard/'+regid, {
      }).then(response=>response.json())
     .then(response=>{
         console.log(response) 
         console.log("nanda")
         setcard(response)
     })
      },[])

      
     

    return (
<div>
        <header style={HeaderStyle}>

                <Nav>
                    <Bars />

                    <NavMenu>

                        <NavBtn>
                            <NavBtnLink to='/productlist'>All Products</NavBtnLink>
                        </NavBtn>

            

                    </NavMenu>

                </Nav>



            </header >
        <div className={styles.container}>
            <div className={styles.heading}>
                <h2>DASHBOARD</h2>
            </div>
            <div className={styles.carddetails}>
      
                    <label htmlFor="cardno">Card Number:</label>
                    <input type="text" id="cardno" name="cardno" value={card.cardno} readonly />
                    <br/>
                        <label htmlFor="name">User Id:</label>
                    <input type="text" id="name"  name="name" value={card.regid} readonly/>
                    <br/>
                    <label htmlFor="validity">Valid till:</label>
                    
                    <input type="text" id="validity" name="validity" value={card.validity} readonly/>
                    <br/>
                    <label htmlFor="ctype">Card Type:</label>
                    <input type="text" id="ctype" name="ctype" value={card.cardtype}  readonly/>
             </div>


             <div className={styles.cardinfo}>
                    TOTAL CREDIT:{card.initialbal}<br/>
                    REMAINING CREDIT:{card.availbal}<br/>
             </div>


             <br/>

             <div id={styles.transhead}>
                <p>RECENT TRANSACTIONS</p>
            </div>

            <div className={styles.nanda}>
      <div className={styles.transtable} >
       <table border="2px">
           <thead>
               <tr className={styles.nanda2}>
                   <td>Product NAME</td>
                   <td>Total Price</td>
                   <td>AMOUNT PAID</td>
               </tr>
           </thead>
           <tbody>
           {prodh.map((product)=>{
    return(
            <tr>
                  <td>{product.prodname}</td>
                  <td>{product.price}</td>
                  <td>{product.amountpaid}</td>
               </tr>
               )})}
           </tbody>
           
       </table>
    </div>
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