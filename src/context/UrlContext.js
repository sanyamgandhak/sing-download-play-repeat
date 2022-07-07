import { createContext } from "react";
import { useState } from "react";

const UrlContext=createContext()

export const UrlProvider=({children})=>{

const[clicked,setClicked]=useState(true)


const handleClick=()=>{
  setClicked(!clicked)
}

return <UrlContext.Provider value={{
    clicked,
    setClicked,
    handleClick
}}>
    {children}
    </UrlContext.Provider>
}

export default UrlContext