import React from 'react'
import Samp from './Samp'

const dataarray = [
    { id:1, name: "aish", age: 2, gender: "F" },
    { id:2, name: "busay", age: 2, gender: "F"},
    {id:3, name:"ayomiku", age:2, gender:"F"},
]
const Sample = () =>
{

  return (

       dataarray.map(item => <Samp key={item.id} item = {item} />) 
 
      )
  
}

export default Sample
