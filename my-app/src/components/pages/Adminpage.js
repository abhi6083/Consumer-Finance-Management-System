import React from 'react'
import { Link } from 'react-router-dom'


import styles from "./Adminpage.module.css";

export default function Adminpage() {
    return (

<form>

    <div className={styles.lld}>USER DETAILS DATABASE</div>
    <br/>
    <table>
  <tr>
    <th>Registration ID</th>
    <th>UName</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Address</th>
    <th>Card Type</th>
    <th>Bank Name</th>
    <th>Account No.</th>
    <th>Ifsc code</th>
    <th>Applied_on</th>
    <th>IsVerified</th>
    <th>Create Card</th>
    <th>Delete</th>
    
    
  </tr>
  <tr>
    <td>123</td>
    <td>Nanda</td>
    <td>9542222602</td>
    <td>nandakishore087@gmail.com</td>
    <td>Hyd</td>
    <td>Gold</td>
    <td>HDFC</td>
    <td>4567890</td>
    <td>JKDHSKJD</td>
    <td>12-08-22</td>
    <td>YES</td>
    <td><button className={styles.button}>Create</button></td>
    <td><button className={styles.button}>Delete</button></td>
    
</tr>
</table>
 
 
</form>


    )
}
