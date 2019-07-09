import React from 'react'
import {graphql, useStaticQuery}  from 'gatsby' 


const Footer = () =>{

    const data = useStaticQuery(graphql`query{
        site {
          siteMetadata{
            title
            author
          }
        }
      }`)
    return (
        <footer> 
            <p> Created my {data.site.siteMetadata.author} - 2019</p>
        </footer>
    )
}

export default Footer