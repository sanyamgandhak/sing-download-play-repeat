import React from 'react'
import Navigate1 from './Navigate1'
import UrlContext from '../context/UrlContext'
import { useState } from 'react'
import { useEffect } from 'react'
// import Navigate1 from './Navigate1'
import { useContext } from 'react'
import Voice from './Voice'
const Lyrics = () => {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return false
    // }
    const {clicked}=useContext(UrlContext)

    const [input,setInput]=useState('')

    const [song,setSong]=useState(null)

    const [lyrics,setLyrics]=useState('')

    const [takeLyrics,takeLyricson]=useState(false)

    const [perform,setPerform]=useState(false)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{

        const options1 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API ,
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };
       
      
    
      
        const getLyrics=async()=>{
             const url1=`https://spotify23.p.rapidapi.com/track_lyrics/?id=${song}`;     
            if(takeLyrics && song){
                try {
                    console.log('hellso')
                    takeLyricson(false)
                    const res=await fetch(url1,options1)
                    console.log(res)
                    const result=await res.json()
                    console.log(result.lyrics.lines)
                    setLyrics(result.lyrics.lines)
                    setSong(null)
                   
                  
                } catch (error) {
                    console.log(error)
                }
            }
         
        }
    

 
        const songmain=input
        console.log(songmain)
        const fetchData=async()=>{

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API,
                    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
                }
            };
            

            if(perform && loading && songmain!==''){
                const url=`https://spotify23.p.rapidapi.com/search/?q=${songmain}&type=tracks&offset=0&limit=10&numberOfTopResults=5`;
                try {
                    const res=await fetch(url,options)
                    const result=await res.json()
                    setSong(result.tracks.items[0].data.id)
                    console.log(result)
                    setLoading(false)
                    setInput('')
                    takeLyricson(true)
                    
                    
                } catch (error) {
                    console.log(error)
                }
            }
         
        }
       
        fetchData()
        getLyrics()



        ///
        
   



     
 
    },[perform,song])

   const handleClick=()=>{
    setPerform(true)
   }

   const handleChange=(e)=>{
    setInput(e.target.value)
    
}
   
 
    
   



   
  return (
    <>

{!clicked && 
<>
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{lyrics?lyrics.map((lyric)=>(<p>{lyric.words}</p>)):'no'}</h3>
    {/* <p class="py-4">{lyrics}</p>     */}
   
    <div class="modal-action">
      <label for="my-modal-6" class="btn">Yay!</label>
    </div>
  </div>
</div>




<div class=" flex justify-center space-x-7 mt-40">
  <input onChange={(e)=>handleChange(e)} type="text" placeholder="Type here" class= " input-lg	 input input-bordered input-accent w-full max-w-xs" /> 
 <button onClick={()=>handleClick()}><label htmlFor="my-modal-6" class="mt-2 btn  btn-outline btn-success modal-button">Get Lyrics</label></button> 
  {/* <button class="mt-2 btn btn-outline btn-success">Get Lyrics
</button> */}

</div>

</>



}
   
    </>
  )
}

export default Lyrics