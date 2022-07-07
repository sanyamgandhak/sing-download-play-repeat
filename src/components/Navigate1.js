import React from 'react'
import {  Navigate} from 'react-router-dom'
import UrlContext from '../context/UrlContext'
import { useContext } from 'react'
import { useState } from 'react'
import Radio from './Radio'

function Navigate1(){

  const{clicked,handleClick}=useContext(UrlContext)

  return (
    <>
    <div class='flex justify-between ...'>
      <div class="flex space-x-5 mt-2 ml-2"> <h1 class="text-lg">Lyrics</h1>

<input  type={clicked?'checkbox':''} onClick={()=>handleClick()} class="toggle toggle-primary mt-1" checked />

  <h1 class="text-lg">Download from Insta</h1> </div>
     
  <div class=" mt-2 mr-2 order-last">
  <Radio/>
  </div>

</div>
    </>
  )
}

export default Navigate1