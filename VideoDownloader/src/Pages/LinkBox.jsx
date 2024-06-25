import React, { useState } from "react";
import axios from "axios";

import "../Styles/LinkBox.css";
const LinkBox = () => {
  const [link, setLink] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const submitForm = async (e) => {
    setUrl("")
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch("http://localhost:5000/download", {
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
    let headers = new Headers();

    headers.append('Content-Type', 'application/mp4');
    headers.append('Accept', 'application/mp4');
    // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://127.0.0.1:5173');

    axios({
      url: data.url,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const urlObject = window.URL.createObjectURL(new Blob([response.data]));
      setUrl(urlObject);
     
    });
    console.log(data);
  };
  return (
    <div className="mainbox">
     <img src="./src/assets/linkedin.png" width='200'/>
    <div className="box">
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="link" className="Bold"><h2>Video Downloader</h2></label>
          <input
            onChange={(e) => {
              setLink(e.target.value);
            }}
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

export default LinkBox;
