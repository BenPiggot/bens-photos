import * as React from "react"
import { useState } from 'react'
import { Link } from "gatsby"
import { Input, MenuItem, Select } from '@mui/material'

import Layout from "../components/layout"
import Seo from "../components/seo"

import Amplify, { Storage } from 'aws-amplify'
import awsconfig from '../aws-exports'


// Amplify.configure(awsconfig)

// Storage.configure({
//   customPrefix: {
//     public: '',
//     // protected: 'myProtectedPrefix/',
//     // private: 'myPrivatePrefix/'
//   },
// })

const IndexPage = () => {
  // const [countryString, setCountryString] = useState('');
  // const [placeString, setPlaceString] = useState('');
  // const [images, setImages] = useState([])

  // const getPhotoList = async (place) => {
  //   const list = await Storage.list(`${countryString}/${place}/`);
  //   const urls = [];
  //   for (let item of list) {
  //     const response = await Storage.get(`${item.key}`, {download: true})
  //     let url = URL.createObjectURL(response.Body, {type : 'image/jpeg'})
  //     urls.push(url);
  //   }

  //   setImages(urls)
  // }

  // const handleCountryChange = (e) => {
  //   setCountryString(e.target.value);
  // }

  // const handlePlaceChange = (e) => {
  //   setPlaceString(e.target.value); 
  //   getPhotoList(e.target.value);
  // }

  return (
    <Layout>
      <Seo title="Home" />
      {/* <Select
        value={countryString}
        label="Country"
        onChange={handleCountryChange}
      >
        <MenuItem value={'france'}>France</MenuItem>
      </Select>
      <Select
        value={placeString}
        label="Place"
        onChange={handlePlaceChange}
      >
        <MenuItem value={'paris'}>Paris</MenuItem>
        <MenuItem value={'marseille'}>Marseille</MenuItem>
        <MenuItem value={'nantes'}>Nantes</MenuItem>
        <MenuItem value={'lyon'}>Lyon</MenuItem>
      </Select>
      <div style={{ display: 'flex'}}>
      { (images.length) && images.map(url => {
        return (
          <image style={{ maxHeight: '200px', maxWidth: '200px', display: 'inline-flex'}}src={url} />
        )
      })}
      </div> */}
      {/* <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> */}
      {/* <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        <Link to="/using-dsg">Go to "Using DSG"</Link>
      </p> */}
    </Layout>
  )
  }

export default IndexPage
