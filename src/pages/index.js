import * as React from "react"
import { useState } from 'react'
import { Link } from "gatsby"
import { OutlinedInput, MenuItem, Select, InputLabel, FormControl,
  Skeleton, CircularProgress } from '@mui/material'

import Layout from "../components/layout"
import Seo from "../components/seo"

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

const IndexPage = () => {
  const [countryString, setCountryString] = useState('');
  const [placeString, setPlaceString] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPhotoList = async (place) => {
    if (images.length) {
      setImages([])
    }
    setIsLoading(true);
    const list = await Storage.list(`${countryString}/${place}/`);

    const promises = Promise.all(list.map(async(item) => {
      const response = await Storage.get(`${item.key}`, {download: true})
      return URL.createObjectURL(response.Body, {type : 'image/jpeg'})
    }))

    promises.then(response => {
      response.shift();
      setIsLoading(false);
      setImages(response);
    })
  }

  const handleCountryChange = (e) => {
    setCountryString(e.target.value);
  }

  const handlePlaceChange = (e) => {
    console.log('changing')
    setPlaceString(e.target.value); 
    getPhotoList(e.target.value);
  }


  return (
    <Layout>
      <Seo title="Home" />
      <div style={{ display: 'flex', marginBottom: '20px'}}>
        <FormControl sx={{ m: 1, width: 250 }} style={{ minWidth: '25%', margin: '5px 10px'}}>
          <InputLabel>Choose a Country</InputLabel>
          <Select
            style={{ width: '100%'}}
            value={countryString}
            label="Country"
            input={<OutlinedInput label="Choose a Country" />}
            onChange={handleCountryChange}
          >
            <MenuItem value={'france'}>France</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 250 }} style={{ minWidth: '25%', margin: '5px 10px'}}>
          <InputLabel>Choose a Place</InputLabel>
          <Select
            style={{ width: '100%'}}
            value={placeString}
            label="Place"
            input={<OutlinedInput label="Choose a Place" />}
            onChange={handlePlaceChange}
          >
            <MenuItem value={'paris'}>Paris</MenuItem>
            <MenuItem value={'marseille'}>Marseille</MenuItem>
            <MenuItem value={'nantes'}>Nantes</MenuItem>
            <MenuItem value={'lyon'}>Lyon</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
      { images.length ? images.map(url => {
        return (
          <img style={{ maxHeight: '200px', maxWidth: '200px', height: 'auto', width: 'auto', padding: '10px', display: 'inline-flex'}} src={url} />
        )
      }) : 
        isLoading && 
        <div style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <CircularProgress color="inherit" size={60} />
        </div> }
      </div>
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
