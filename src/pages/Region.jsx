import React from "react";
import { useParams } from "react-router-dom";
import regionData from '../data/region.json'

function Region() {
    const {name} = useParams()
    const [ region ] = regionData.filter(item => item.region.toLowerCase() === name)
   
  return <div className="flex items-center gap-x-4 text-[30px] justify-center">
    <h1>{region.region}</h1>
    <p>Viloyati</p>
  </div>;
}

export default Region;
