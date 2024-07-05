import React, { useState } from "react";
import axios from "axios";
import "../Styles/LinkBox.css";
const InstaBox = () => {
  const [link, setLink] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const submitForm = async (e) => {
    setUrl("")
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch("http://localhost:5000/instagramdownload", {
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
    axios({
      url: data.data.data.video_url,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const urlObject = window.URL.createObjectURL(new Blob([response.data]));
      setUrl(urlObject);
     
    }).catch((err)=>{
      console.log(err)
    })
    console.log("data",data.data.data.video_url);
    
    console.log(data);
  };
  return (
    <div className="mainbox">
     
    <div className="box">
      <form onSubmit={submitForm}>
      <img src="/assets/Insta.png" width='300' height='200'/>
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
      {url && (
        <div>
            <div>
                <video className="video" controls  preload="metadata">
                    <source src={url} type="video/mp4"></source>
                </video>
            </div>
        <div className="down">
          <a href={url} target="_blank" rel="noopener noreferrer" download="insta.mp4">
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

export default InstaBox;