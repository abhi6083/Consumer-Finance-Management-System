import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import I1 from '../../assets/images/laptop.jpg'
import I2 from '../../assets/images/Mi_band.jpg'
import I3 from '../../assets/images/Mivi_speaker.jpg'


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

  const [prod,setprod]=useState([])
  useEffect(()=>{
    fetch('http://localhost:9797/api/products', {
    }).then(response=>response.json())
    .then(response=>{
       console.log(response) 
       setprod(response)  
    })
  },[])
  
    return (
  <>
<header style={HeaderStyle}>
  {console.log(prod)}
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
  {prod.map((product)=>{
    return(
    <section className={styles.section}>
    <img src={I2} className={styles.image} />
    <div className={styles.content}> 
      <label className={styles.lb1}> PRODUCT NAME :{product.prodname}</label><br/>
      <label className={styles.lb1}> PRODUCT DETAILS : {product.proddesc}</label><br/>
      <label className={styles.lb1}> COST :  ₹. {product.price}</label><br/>
      <NavBtn>
            <NavBtnLink to={'/productinfo/'+product.prodid} style={{backgroundColor:"#3498db;"}}>Know More & Buy</NavBtnLink>
      </NavBtn>
    </div>
  </section>
  )})}

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