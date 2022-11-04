import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Sign Up</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Name</label><br />
                    <input type="text" name="name" required />
                </p>
                <p>
                    <label>Date of Birth</label><br />
                    <input type="text" name="dateOfBirth" required />
                </p>
                <p>
                    <label>Email address</label><br />
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Phone No.</label><br />
                    <input type="text" name="phoneNumber" required />
                </p>
                <p>
                    <label>Username</label><br />
                    <input type="text" name="firstName" required />
                </p>
                <p>
                    <label>Password</label><br />
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <label>Confirm password</label><br />
                    <input type="password" name="confirmPassword" required />
                </p>
                <p>
                    <label>Address</label><br />
                    <input type="text" name="address" required />
                </p>
                <p>
                    <label>Card Type</label><br />
                    <input type="radio" id="gold" name="card_type" value="Gold" />
                    <label for="gold">Gold</label><br />
                    <input type="radio" id="titanium" name="card_type" value="Titanium" />
                    <label for="titanium">Titanium</label><br />
                </p>
                <p>
                    <label>Select Bank</label><br />
                    <select id="banks" name="banks">
                        <option value="wellsFargo">Wells Fargo</option>
                        <option value="jpmc">JPMC</option>
                        <option value="goldmanSachs">Goldman Sachs</option>
                        <option value="bankOfAmerica">Bank of America</option>
                    </select>
                </p>
                <p>
                    <label>Saving Account No.</label><br />

                    <input type="text" name="accountNumber" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
