import React from 'react'
import FoodCard from './FoodCard'

export default function ListMenu({data}) {
    return (
      data.map((item) =>{
          return <FoodCard food={item}/> 
      })
    )
  }