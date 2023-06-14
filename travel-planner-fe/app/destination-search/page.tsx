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
        
    })
  }, [])


  const handleSubmit = (e: React.FormEvent) => {
    setInput(e.target[0].value)
    e.preventDefault()
  }

  return (

   <form onSubmit={handleSubmit}>

      <SearchBox value={input} accessToken={'pk.eyJ1IjoibGFpOTYiLCJhIjoiY2xpdWVhdmQ3MHkybjNobzdnbjJwcmx6YSJ9.0CYohMf5CN77cD-BOo7mhw'}/>
      
        <button type="submit">Continue</button>
    </form>
  )

   

}

















