import { use, useState } from "react";
import axios from "axios";

import './App.css'

function App() {

  // storing the longurl when user enter in input box
  // and storing the shortid when id come from server

  const [longUrl, setLongUrl] = useState("");
  const [shortId, setShortId] = useState("");
  const [message, setMessage] = useState("");


  // create the short id from given url
  const createShortUrl = async () => {
    try {
      if(!longUrl.trim("")){
        setMessage("Enter the Url ")
      }else{
      let res = await axios.post("http://localhost:3001/url", {
        url: longUrl.trim("")
      });
      //  check response
      setShortId(res.data.id);

      setMessage(`you are successfully created shortid ${res}`);
      }
      
    }
    catch (error) {
      setMessage(`Something error ${error}`);
    }
  
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Enter the URl</h1>
        <textarea type="text" id="text" value={longUrl} onChange={(e)=> setLongUrl(e.target.value)} placeholder="Enter the URL"></textarea>
        <button type="submit" className="submit" onClick={createShortUrl}> Submit</button>
         <div className="showId">
          {shortId && (
             <p>SHORT URL: 
              <a href={`http://localhost:3001/url/${shortId}`}>http://localhost:3001/url/${shortId}</a>
             </p>
          )}
         </div>
      </div>
    </div>
  )
}


export default App;