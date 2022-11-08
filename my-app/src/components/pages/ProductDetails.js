import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./ProductDetails.module.css";
import P1 from '../../assets/images/camera.jpg'

export default function ProductDetails() {
    return (

        <div className={styles.container}>
            <form>
                <section className={styles.section}>
                    <img src={P1} className={styles.image}/>
                    <div className="content">

                        
                        <label className={styles.lb1}> PRODUCT NAME :</label><input className={styles.ip} type="text" name="prod.prodname" value="Canon Camera" required />
                        <label className={styles.lb1}> PRODUCT DETAILS :</label>
                        <div className={styles.description}>prod.proddesc</div>
                        

                        <label className={styles.lb1}> COST :</label>
                        <input type="text" className={styles.ip} name="prod.price" value="$300" required /><br />
                        <label className={styles.lb1}> Processing Fees :</label>
                        <input type="text" className={styles.ip} name="prod.price" value="$20" required />
                        <br />
                        
                        <p style={{color: 'red'}}>EMI PERIOD</p>
                        <br />

                        <select className={styles.dropdown} name="selectemi">
                            <option selected>Select EMI:</option>
                            <option value="prod.emi_3m">3 months</option>
                            <option value="prod.emi_6m">6 months</option>
                            <option value="prod.emi_9m">9 months</option>
                            <option value="prod.emi_1y">1 year</option>

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
            </form>
        </div>

    )


}
