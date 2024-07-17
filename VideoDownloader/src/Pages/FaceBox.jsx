import React, { useState } from "react";
import axios from "axios";
import Typer from '../component/Typer';
import "../Styles/LinkBox.css";
import { toast } from "react-toastify";
const FaceBox = () => {
  const [link, setLink] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const submitForm = async (e) => {
    setUrl("")
    e.preventDefault();
    if(link.includes('facebook')){
    setIsLoading(true);
    const res = await fetch("https://downloaderbackend.onrender.com/facebookdownload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: link,
      }),
    }).catch((err) => {
      setIsLoading(false);
      console.log(err);
    });
    setIsLoading(false);
   
    const data = await res.json();
    console.log("data.links",data.data);
    setUrl(data.data.links['Download High Quality'])
    
    console.log(data);
  }
  else{
    toast.error("Please Enter a valid Facebook URL")
  }
  };
  return (
    <div className="mainbox">
    <div className="type"> <h1>Download Videos from <Typer/></h1></div>
    <div className="box">
      <form onSubmit={submitForm}>
      <img src="/assets/facebook.png" width='300' height='200'/>
      <div className="submitbox">
        <div>
          <input
            onChange={(e) => {
              setLink(e.target.value);
            }}
            required
            type="text"
            placeholder="Link to donwload video"
            name="link"
            id="link"
            className="link"
            value={link}
          />
        </div>
        <div>
          <button className="submit" type="submit">
            <h2>Submit</h2>
          </button>
        </div>
        </div>
      </form>
      <div className="loading">{isLoading ? <p>Loading...</p> : null}</div>
      <div style={{color:"black"}}>No ads. No watermarks. No registration.
      Issues? Contact us.</div>
    </div>
    <div>
    {url && (
        <div>
            <div>
                <video className="video" controls  preload="metadata">
                    <source src={url} type="video/mp4"></source>
                </video>
            </div>
        <div className="down">
          <a href={url} target="_blank" rel="noopener noreferrer" download="name.mp4">
            <button className="submit">
              <h2>Download File</h2>
            </button>
          </a>
        </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default FaceBox;