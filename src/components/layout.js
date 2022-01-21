/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import { useState, useEffect } from 'react'
import Amplify, { Storage } from 'aws-amplify'
import awsconfig from '../aws-exports'


Amplify.configure(awsconfig)

Storage.configure({
  customPrefix: {
    public: '',
    // protected: 'myProtectedPrefix/',
    // private: 'myPrivatePrefix/'
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [image, setImage] = useState(null)

  const getPhotoList = async () => {
    const list = await Storage.list('france/paris/');
    console.log(list)
    const testItem = await Storage.get(`${list[1].key}`, {download: true})
    console.log(testItem.Body)
    let url = URL.createObjectURL(testItem.Body, {type : 'image/jpeg'})
    console.log(url)
    setImage(url)
  }

  useEffect(() => {
    getPhotoList();
  }, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {image && <img src={image}/> }
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
