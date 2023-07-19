import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinners from './Spinners';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const [tag, setTag] = useState ('');
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
    

    async function fetchData () {

      setLoading(true);  
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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
    function changeHandler (event){
      setTag(event.target.value)
    }

  return (

    <div className='w-1/-2  bg-blue-600 gap-y-5
     rounded-lg border  border-black mt-[15px] 
      items-center flex flex-col'>
        <h1 className='text-2xl mt-[15px] font-bold underline uppercase'>Random {tag} Gifs</h1>
       
       {
        loading ? (<Spinners/>) : (<img src={gif} width="450" />) 
       }
       
        {/* <img src={gif} width="450"/> */}

        <input

        className='w-10/12 bg-yellow-100 font-bold
          uppercase py-2 rounded-lg mb-[20px] text-center'
          onChange={changeHandler}
          value= {tag}
        
        />

        <button onClick={clickHandler} className=' w-10/12 bg-yellow-100 font-bold
          uppercase py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}


export  default Tag;

