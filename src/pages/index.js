import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPg = () =>{

    return (
       <Layout>
           <h1>Software Developer </h1>
            <h2>CompSci grad with a passion for building for the web</h2>
            
            {/* <a href = "/contact"> Contact me</a> */}
            <p>Need a Developer? <Link to="/contact">Send me a message</Link></p>
       </Layout>
    )
}

export default IndexPg