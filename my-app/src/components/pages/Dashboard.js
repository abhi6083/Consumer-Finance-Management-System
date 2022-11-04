import React from 'react'
import { Link } from 'react-router-dom'


import styles from "./Dashboard.module.css";

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h2>DASHBOARD</h2>
            </div>
            <div className={styles.carddetails}>
      
                    <label htmlFor="cardno">Card Number:</label>
                    <input type="text" id="cardno" name="cardno" value="1234" readonly />
                    <br/>
                        <label htmlFor="name">Name:</label>
                    <input type="text" id="name"  name="name" value="Team 5" readonly/>
                    <br/>
                    <label htmlFor="validity">Valid till:</label>
                    
                    <input type="text" id="validity" name="validity" value="05/22" readonly/>
                    <br/>
                    <label htmlFor="ctype">Card Type:</label>
                    <input type="text" id="ctype" name="ctype" value="Gold"  readonly/>
             </div>


             <div className={styles.cardinfo}>
                    TOTAL CREDIT:40,000<br/>
                    CREDIT USED:20,000<br/>
                    REMAINING CREDIT:20,000<br/>
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
                   <td>DATE</td>
                   <td>AMOUNT PAID</td>
               </tr>
           </thead>
           <tbody>
            <tr>
                  <td>IQ00 NEO 6</td>
                  <td>02/03/2022</td>
                  <td>30,0000</td>
               </tr>
           </tbody>
       </table>
    </div>
    </div>
        </div>
    )
}
