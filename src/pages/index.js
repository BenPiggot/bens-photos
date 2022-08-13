import * as React from "react"
import { useState } from 'react'
import { OutlinedInput, MenuItem, Select, InputLabel, FormControl,
  Skeleton, CircularProgress } from '@mui/material'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "../components/image"
import { places } from "../fixtures/places"

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
  const [magnifiedImage, setMagnifiedImage] = useState(null);

  const getPhotoList = async (place) => {
    if (images.length) {
      setImages([])
    }
    setIsLoading(true);
    const list = await Storage.list(`${countryString}/${place}/`);

    const promises = list.map(async(item) => {
      const response = await Storage.get(`${item.key}`, {download: true})
      return URL.createObjectURL(response.Body, {type : 'image/jpeg'})
    })

    const data = await Promise.all(promises)
    data.shift();
    setIsLoading(false);
    setImages(data);
    
  }

  const handleCountryChange = (e) => {
    setCountryString(e.target.value);
  }

  const handlePlaceChange = (e) => {
    console.log('changing')
    setPlaceString(e.target.value); 
    getPhotoList(e.target.value);
  }

  const handleImageMagnify = (idx) => {
    setMagnifiedImage(idx);
  }

  return (
    <Layout>
      <Seo title="Home" />
      <div style={{ display: 'flex', marginBottom: '20px'}}>
        <FormControl sx={{ m: 1, width: 250 }} style={{ minWidth: '25%', margin: '5px 10px 5px 0px'}}>
          <InputLabel>Choose a Country</InputLabel>
          <Select
            style={{ width: '100%'}}
            value={countryString}
            label="Country"
            input={<OutlinedInput label="Choose a Country" />}
            onChange={handleCountryChange}
          >
            <MenuItem value={'france'}>France</MenuItem>
            <MenuItem value={'sweden'}>Sweden</MenuItem>
            <MenuItem value={'norway'}>Norway</MenuItem>
            <MenuItem value={'finland'}>Finland</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 250 }} style={{ minWidth: '25%', margin: '5px 10px'}}>
          <InputLabel>Choose a Place</InputLabel>
          <Select
            style={{ width: '100%'}}
            disabled={!countryString.length}
            value={placeString}
            label="Place"
            input={<OutlinedInput label="Choose a Place" />}
            onChange={handlePlaceChange}
          >
            { countryString && places[countryString].map(place => {
              return place;
            })}
          </Select>
        </FormControl>
      </div>
      <div>
      { images.length ? images.map((url, idx) => {
        let isMagnified = idx === magnifiedImage ? true : false;
        return (
          <Image url={url} isMagnified={isMagnified} handleImageMagnify={handleImageMagnify} idx={idx} />
        )
      }) : 
        isLoading && 
        <div style={{ height: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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
