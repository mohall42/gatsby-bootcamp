import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const IndexPg = () =>{

    return (
        <div>
            <Header />
            <h1>Software Developer </h1>
            <h2>CompSci grad with a passion for building for the web</h2>
            <hr></hr>

            {/* <a href = "/contact"> Contact me</a> */}
            <p>Need a Developer? <Link to="/contact">Send me a message</Link></p>
            <Footer />
        </div>

    )
}

export default IndexPg