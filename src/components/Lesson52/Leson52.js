import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Leson52 = () => {
  const [data, setData] = useState([]);
  const dataFetch = async () => {
    try {
      const respons = await axios.get("https://api.spaceflightnewsapi.net/v3/articles");
      setData(respons.data);
      console.log(respons.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    dataFetch();
  }, []);



  return (
    <>
     
      <div className="flex items-center justify-center flex-wrap">
        {data.map((info, index) => {
          // console.log(info.id);
          return (      
             <Link to={`/artcil/${info.id}`}>
              <div key={index}>
              <div className="bg-[#00000080] text-white m-3 px-10 py-3 w-[400px] h-[600px] rounded-xl">
                <img
                  className="w-[350px] h-[250px]"
                  src={info.imageUrl}
                  alt="countres"
                />
                <h2 className="text-center text-[32px] mt-2">
                  Title: {info.title}
                </h2>
                <p className="text-xl text-slate-100-950 mt-2 mb-2">
                   NewsSite: {info.newsSite}
                </p>
              </div>
            </div>
             </Link>
          );
        })}
      </div>
    </>
  );
};

export default Leson52;
