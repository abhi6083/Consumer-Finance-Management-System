import React from 'react'
import { Link } from 'react-router-dom'

import styles from "./ProductDetails.css";

export default function ProductDetails() {
    return (

        <div className={styles.container}>
            <form>
                <section className={styles.section}>
                    <img src="../../assets/images/{{prod.prodimage}}" className={styles.image}/>
                    <div className="content">


                        <label className={styles.lb1}> PRODUCT NAME :</label><input className={styles.ip} type="text" name="prod.prodname" value="{{prod.prodname}}" required />
                        <label className={styles.lb1}> PRODUCT DETAILS :</label>
                        <div className={styles.description}>prod.proddesc</div>

                        <label className={styles.lb1}> COST :</label>
                        <input type="text" className={styles.ip} name="prod.price" value="{{prod.price}}" required />{"\n"}
                        <label className={styles.lb1}> Processing Fees :</label>
                        <input type="text" className={styles.ip} name="prod.price" value="{{processingfees}}" required />
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        <p style={{color: 'red'}}>EMI PERIOD</p>
                        {"\n"}

                        <select className={styles.dropdown} name="selectemi">
                            <option selected>Select EMI:</option>
                            <option value="prod.emi_3m">3 months</option>
                            <option value="prod.emi_6m">6 months</option>
                            <option value="prod.emi_9m">9 months</option>
                            <option value="prod.emi_1y">1 year</option>

                        </select>
                        {"\n"}
                        EMI Starting emivalue PM
                        {"\n"}
                        {"\n"}
                        <button className={styles.button}>Buy Now</button>
                        {"\n"}
                        {"\n"}

                        {"\n"}
                        <a href>Terms and Conditions</a>


                    </div>

                </section>
            </form>
        </div>

    )


}
