import React from 'react'
import { useState } from 'react'
import Navigate1 from './Navigate1'
import { useContext } from 'react'
import UrlContext from '../context/UrlContext'
import { useEffect } from 'react'
import { Oval } from 'react-loader-spinner'
import {Bars} from 'react-loader-spinner'


function Main() {

  const { clicked } = useContext(UrlContext)

  // const [check, setCheck] = useState(true)

  // const [value, setValue] = useState('')

  const [download, setDownload] = useState('')

  const [down, setDown] = useState(true)
  const [input1, setInput] = useState('')
  const[link,setLink]=useState('')

  const [message,setMessage]=useState('')

  const [value,setValue]=useState('')

  const [loading,setLoading]=useState(false)
  const [error,setError]=useState('')

  const[free,setFree]=useState(false)

  const onErrorClick=()=>{
    setFree(false)
  }


  const handleChange=(e)=>{

      

      setValue(e.target.value)

  }

  const handledown = () => {

      if(value===''){
        setError('Please enter Url')
      }
      else{
        setInput(value)
        setDown((prevState)=>!prevState)
        setLoading(true)
      }
     
 

  }

  useEffect(() => {

    const input = input1
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7f8b5a9de6mshea6a6d590a66e96p14e3d7jsn0e18c69be503',
        'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
      }
    };
    
   
  
    const fetchData = async () => {
      const url = `https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index?url=${input}`;
      try {
      
        setMessage('')
        setDownload('')
        const res = await fetch(url, options);
        const data = await res.json()
        console.log(data.media[0])
  
        setDownload(data.media[0])
        setLoading(false)
        setValue('')
      } catch (error) {
        console.log(error)
        setLoading(false)
        setFree(true)
        setMessage('some error occurred please try again')
      }
     
     



      
    }

    if(loading){
      fetchData()
    }

    
    




  



  }, [down])





  // let error
  // if(message && message!==''){
  //   error= <div>{message}</div>
  // }

let button
  if(loading){
     button=<Bars color="#00BFFF"  height={80} width={80} />
  }




  return (

    <>
      {/* <Navigate1/> */}
      {clicked && <><div class=" flex justify-center space-x-7 mt-40">
        <input onChange={handleChange} value={value} type="text" placeholder={error?error:" Url Insta ( Vid, pic , stories , etc )  "} class=" input-lg	 input input-bordered input-accent w-full max-w-xs" />
       {!loading && <button onClick={handledown} class="mt-2 btn btn-active btn-primary" > <a href={download ? download:null} download="newname" target={download?download:null} >{ download?'Take me to Download ': 'Click to Download'}</a></button>} 
      {/* {link && <button class="mt-2 btn btn-outline btn-success"><a class="text-lg " href={link} download="newname" target={download} >Download Link</a>
        </button>}   */}

        { button}

        
 
      
      </div> 
  {free &&  <div class="mr-80 ml-80 mt-2">
      <div class="mr-80  alert alert-error shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" onClick={onErrorClick}class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>{message}</span>
  </div>
</div>
      </div>
    }   
    
  
   
      </>}





    </>


  )
}

export default Main