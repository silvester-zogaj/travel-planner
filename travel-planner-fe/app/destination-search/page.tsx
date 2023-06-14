'use client'
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { destinationSearch } from "./apis";
import { SearchBox } from "@mapbox/search-js-react";


export default function destination(){

  const [ input, setInput ] = React.useState('london')

  useEffect(() => {
    destinationSearch(input)
      .then((response) => {
        // console.log(response)
        // setInput(response)
    })
  }, [])


  const handleChange = (e: string) => {

    console.log(e)
      setInput(e)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (

    
   <form onSubmit={handleSubmit}>

  <SearchBox value={input} accessToken={'pk.eyJ1IjoibGFpOTYiLCJhIjoiY2xpdWVhdmQ3MHkybjNobzdnbjJwcmx6YSJ9.0CYohMf5CN77cD-BOo7mhw'} onChange={handleChange}/>
      
        <button type="submit">Continue</button>
    </form>
  )

   

}

















