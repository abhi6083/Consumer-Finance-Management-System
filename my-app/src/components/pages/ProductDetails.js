import React, { useEffect, useState } from 'react'
import { Link,useLocation,useParams } from 'react-router-dom'

import styles from "./ProductDetails.module.css";
import P1 from '../../assets/images/camera.jpg'

export default function ProductDetails() {
    const { prodid } = useParams()
    const[prod,setprod]=useState([])
    console.log(prodid)
    useEffect(()=>{
        fetch('http://localhost:9797/api/products/'+prodid, {
        }).then(response=>response.json())
        .then(response=>{
           console.log(response) 
           setprod(response)
           
        })
      },[])
      
    
    return (

        <div className={styles.container}>
                <section className={styles.section}>
                    <img src={P1} className={styles.image}/>
                    <div className="content">

                        
                        <label className={styles.lb1}> PRODUCT NAME : {prod.prodname} </label>
                        <br/>
                        <label className={styles.lb1}> PRODUCT DETAILS : </label>
                        <br/>
                        <label className={styles.description}>{prod.proddesc}</label>
                        <br/>

                        <label className={styles.lb1}> COST : {prod.price}</label>
                        <br/>
                        <label className={styles.lb1}> Processing Fees : $20</label>
                        
                        <br />
                        
                        <p style={{color: 'red'}}>EMI PERIOD</p>
                        <br />

                        <select className={styles.dropdown} name="selectemi">
                            <option selected>Select EMI:</option>
                            <option value="prod.emi_3m">3 months {prod.emi_3m}</option>
                            <option value="prod.emi_6m">6 months {prod.emi_6m}</option>
                            <option value="prod.emi_9m">9 months {prod.emi_9m}</option>
                            <option value="prod.emi_1y">1 year {prod.emi_1y}</option>

                        </select>
                        <br />
                        EMI Starting emivalue PM
                        <br />
                        <br />
                        <button className={styles.button}>Buy Now</button>
                        <br />
                        <br />

                        <br />
                        <a href>Terms and Conditions</a>


                    </div>

                </section>
            
        </div>

    )


}
