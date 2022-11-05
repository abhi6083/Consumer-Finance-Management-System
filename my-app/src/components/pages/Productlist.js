import React from 'react'
import { Link } from 'react-router-dom'


import styles from "./Productlist.module.css";


import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

export default function Productlist() {
    return (

      <>

<header style={HeaderStyle}>

<Nav>
    <Bars />
    <NavMenu>
        <NavBtn>
            <NavBtnLink to='/dashboard'>Back To Dashboard</NavBtnLink>
        </NavBtn>
    </NavMenu>
</Nav>



</header >

        <section id={styles.body}>
  <div>
<h1 className={styles.pl}>Product List</h1>


<div className={styles.container}>
<section className={styles.section}>
    <img src="" className={styles.image} />
    <div className={styles.content}>
  
      
      <label className={styles.lb1}> PRODUCT NAME :</label><br/>
      <label className={styles.lb1}> PRODUCT DETAILS :</label><br/>
      <label className={styles.lb1}> COST :</label><br/>
      <NavBtn>
            <NavBtnLink className={styles.button} to='/productinfo'>Know More & Buy</NavBtnLink>
      </NavBtn>

    </div>
  </section>
  <section className={styles.section}>
    <img src="" className={styles.image} />
    <div className={styles.content}>
  
      
      <label className={styles.lb1}> PRODUCT NAME :</label><br/>
      <label className={styles.lb1}> PRODUCT DETAILS :</label><br/>
      <label className={styles.lb1}> COST :</label><br/>
      <a href="http://localhost:3000/productinfo"><button className={styles.button}>Buy Now</button></a>

    </div>
  </section>
  <section className={styles.section}>
    <img src="" className={styles.image} />
    <div className={styles.content}>
  
      
      <label className={styles.lb1}> PRODUCT NAME :</label><br/>
      <label className={styles.lb1}> PRODUCT DETAILS :</label><br/>
      <label className={styles.lb1}> COST :</label><br/>
      <a href="http://localhost:3000/productinfo"><button className={styles.button}>Buy Now</button></a>

    </div>
  </section>
  <section className={styles.section}>
    <img src="" className={styles.image} />
    <div className={styles.content}>
  
      
      <label className={styles.lb1}> PRODUCT NAME :</label><br/>
      <label className={styles.lb1}> PRODUCT DETAILS :</label><br/>
      <label className={styles.lb1}> COST :</label><br/>
      <a href="http://localhost:3000/productinfo"><button className={styles.button}>Buy Now</button></a>

    </div>
  </section>
  <section className={styles.section}>
    <img src="" className={styles.image} />
    <div className={styles.content}>
  
      
      <label className={styles.lb1}> PRODUCT NAME :</label><br/>
      <label className={styles.lb1}> PRODUCT DETAILS :</label><br/>
      <label className={styles.lb1}> COST :</label><br/>
      <a href="http://localhost:3000/productinfo"><button className={styles.button}>Buy Now</button></a>

    </div>
  </section>
  
</div>
</div>
</section>



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