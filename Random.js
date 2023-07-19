import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinners from './Spinners';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
    

    async function fetchData () {

      setLoading(true);  
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
      setGif (imageSource);
      setLoading(false);

  }

    useEffect(() => {
        fetchData();
    }, [])

    function clickHandler (){
      fetchData();
    }

  return (

    <div className='w-1/-2  bg-green-400 gap-y-5
     rounded-lg border  border-black mt-[15px] 
      items-center flex flex-col'>
        <h1 className='text-2xl mt-[15px] font-bold underline uppercase'>A Random Gifs</h1>
       
       {
        loading ? (<Spinners/>) : (<img src={gif} width="500" />) 
       }
       
        {/* <img src={gif} width="450"/> */}

        <button onClick={clickHandler} className='bg-yellow-100 w-10/12 font-bold
          uppercase py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}


export  default Random;
