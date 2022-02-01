import React,{useEffect, useState} from "react";
import axios from "axios";

function FetchAPI(){

     const[apiData, setapiData]=useState()

 //service values   netflix prime disney hbo hulu peacock paramount starz showtime apple mubi
   const Service = (props)=>{
       return
   }

   useEffect(()=>{
       const options = {
           method: 'GET',
           url: 'https://streaming-availability.p.rapidapi.com/search/basic',
           params: {
               country: 'us',
               service: 'netflix',
               type: 'movie',
               genre: '18',
               page: '1',
               output_language: 'en',
               language: 'en'
           },
           headers: {
               'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
               'x-rapidapi-key': '825986eacfmshbc25a9323ddf210p13a23ajsnbc487986ec1a'
           }
       };

       axios.request(options).then(function (response) {
           console.log(response.data);
           setapiData(response.data)
       }).catch(function (error) {
           console.error(error);
       });
   },[])

 
    return(
        <div>
            <h2>Streaming Availability(RapidAPI)</h2>

            

        </div>
    )
}
export default FetchAPI