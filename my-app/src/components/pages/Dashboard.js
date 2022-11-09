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

    // const[card,setcard]=useState()
    // const[prodh,setprodh]=useState([])

    // fetch('http://localhost:9797/cardapi/findcard/'+regid, {
    // }).then(response=>response.json())
    // .then(response=>{
    //    console.log(response) 
    //    console.log("nanda")
    //    setcard(response)
   // })
    // useEffect(()=>{
    //     fetch('http://localhost:9797/producthistory/api/ph/'+regid, {
    //     }).then(response=>response.json())
    //     .then(response=>{
    //        console.log(response) 
    //        setprodh(response)  
    //     })
    //   },[])

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
                    <input type="text" id="cardno" name="cardno" value="123456" readonly />
                    <br/>
                        <label htmlFor="name">User Id:</label>
                    <input type="text" id="name"  name="name" value="nanda" readonly/>
                    <br/>
                    <label htmlFor="validity">Valid till:</label>
                    
                    <input type="text" id="validity" name="validity" value="07-23" readonly/>
                    <br/>
                    <label htmlFor="ctype">Card Type:</label>
                    <input type="text" id="ctype" name="ctype" value="Gold"  readonly/>
             </div>


             <div className={styles.cardinfo}>
                    TOTAL CREDIT:20000<br/>
                    REMAINING CREDIT:19000<br/>
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
           
            <tr>
                  <td>IQOO</td>
                  <td>10000</td>
                  <td>250</td>
               </tr>
               
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