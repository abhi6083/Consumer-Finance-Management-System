import React from 'react'
import { Link } from 'react-router-dom'


import styles from "./Productlist.module.css";
import P1 from '../../assets/images/camera.jpg'
import P2 from '../../assets/images/laptop.jpg'
import P3 from '../../assets/images/lenovo_mouse.jpg'
import P4 from '../../assets/images/lenovo_tab.jpg'
import P5 from '../../assets/images/Mi_band.jpg'
import P6 from '../../assets/images/Mivi_speaker.jpg'



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
          <label forName="cardno">Search Product: </label>
          <input style={{backgroundColor: "whitesmoke"}} type="text" id="cardno" name="cardno"/>
          <button className={styles.button} style={{fontSize: "10px"}}>Search</button><br /><br /><br />


          <div className={styles.container}>
            <section className={styles.section}>
              <img src={P1} className={styles.image} />
              <div className={styles.content}>


                <label className={styles.lb1}> PRODUCT NAME :</label><br />
                <label className={styles.lb1}> PRODUCT DETAILS :</label><br />
                <label className={styles.lb1}> COST :</label><br />
                <a href="http://localhost:3000/productdetails"><button className={styles.button}>Buy Now</button></a>

              </div>
            </section>
            <section className={styles.section}>
              <img src={P2} className={styles.image} />
              <div className={styles.content}>


                <label className={styles.lb1}> PRODUCT NAME :</label><br />
                <label className={styles.lb1}> PRODUCT DETAILS :</label><br />
                <label className={styles.lb1}> COST :</label><br />
                <a href="http://localhost:3000/productdetails"><button className={styles.button}>Buy Now</button></a>

              </div>
            </section>
            <section className={styles.section}>
              <img src={P3} className={styles.image} />
              <div className={styles.content}>


                <label className={styles.lb1}> PRODUCT NAME :</label><br />
                <label className={styles.lb1}> PRODUCT DETAILS :</label><br />
                <label className={styles.lb1}> COST :</label><br />
                <a href="http://localhost:3000/productdetails"><button className={styles.button}>Buy Now</button></a>

              </div>
            </section>
            <section className={styles.section}>
              <img src={P4} className={styles.image} />
              <div className={styles.content}>


                <label className={styles.lb1}> PRODUCT NAME :</label><br />
                <label className={styles.lb1}> PRODUCT DETAILS :</label><br />
                <label className={styles.lb1}> COST :</label><br />
                <a href="http://localhost:3000/productdetails"><button className={styles.button}>Buy Now</button></a>

              </div>
            </section>
            <section className={styles.section}>
              <img src={P5} className={styles.image} />
              <div className={styles.content}>


                <label className={styles.lb1}> PRODUCT NAME :</label><br />
                <label className={styles.lb1}> PRODUCT DETAILS :</label><br />
                <label className={styles.lb1}> COST :</label><br />
                <a href="http://localhost:3000/productdetails"><button className={styles.button}>Buy Now</button></a>

              </div>
            </section>

            <section className={styles.section}>
              <img src={P6} className={styles.image} />
              <div className={styles.content}>


                <label className={styles.lb1}> PRODUCT NAME :</label><br />
                <label className={styles.lb1}> PRODUCT DETAILS :</label><br />
                <label className={styles.lb1}> COST :</label><br />
                <a href="http://localhost:3000/productdetails"><button className={styles.button}>Buy Now</button></a>

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