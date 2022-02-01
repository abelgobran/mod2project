import axios from "axios";
import React, {useEffect, useState} from "react";

function GetAudio(){


  //https://rapidapi.com/herihermwn/api/50k-radio-stations/pricing
   const [inquiry, setInquiry] = useState('')
  const [music,setMusic]=useState('')

  //search
  useEffect(() => {
    
      const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/search',
        params: { term: `${inquiry}`, locale: 'en-US', offset: '0', limit: '5' },
          headers: {
            'x-rapidapi-host': 'shazam.p.rapidapi.com',
            'x-rapidapi-key': '825986eacfmshbc25a9323ddf210p13a23ajsnbc487986ec1a'
          }
      }    

        axios.request(options).then(function (response) {
          console.log(response.data);
          setMusic(response.data)
        }).catch(function (error) {
          console.error(error);
        });
  },[])

//song detect


return(

  // <div>
  //   {music.length >0 && music.map((song)=>(
  //     <div>{song.artist.hits}</div>
  //   ))}
  //</div>


  <div>
    <form>
      <label>
        Genre:
       
        <input placeholder='Full name of songs or artists' type="text" name="search"  ></input>
      </label>
      <input type="submit" value="submit"  onChange={(e)=>setInquiry(e.target.value)} onSubmit={()=>music.map((songs)=><div>{songs.artists.hits.artist.avatar}</div>)}/>
    </form>

    <div>
      {}
      
    </div>
  </div>
)

}export default GetAudio

