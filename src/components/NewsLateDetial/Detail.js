import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Detail = () => {

    let {id} = useParams();
    const [artcil,setArtcil] = useState()
    const navigate = useNavigate();
    console.log(artcil);
 
    const dataFech = async ()=> {
        try{
            const respons = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
            setArtcil(respons.data)
        }catch (error){
            console.error(error)
        }
    }
    useEffect(()=> {
        dataFech();
    },[])
    const homeBtn=()=> {
        navigate("/")
    }
  return (    
      <>
       <div className='flex items-center justify-center mt-7'>
       <button onClick={homeBtn}><i className="fa-solid fa-arrow-left text-green-800 text-[50px] mr-[50px]"> </i></button>
       <div className="text-center bg-[#00000080] text-white m-3 px-10 py-3 w-[400px] h-[600px] rounded-xl">
                <img
                  className="w-[350px] h-[250px]"
                  src={artcil?.imageUrl}
                  alt="countres"
                />
                <h2 className="text-center text-[32px] mt-2">
                  Title: {artcil?.title}
                </h2>
                <p className="text-xl text-slate-100-950 mt-2 mb-2">
                   NewsSite: {artcil?.newsSite}
                </p>
              </div>
       </div>
      </>
  )
}

export default Detail