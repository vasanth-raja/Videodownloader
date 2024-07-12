import React, { useState } from "react";
import "../Styles/LinkBox.css";
import Typer from "../component/Typer";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import {
    detailsYouTube,
    downloadLinkedIn,
    downloadFacebook,
    downloadInstagram,
    downloaderYouTube
  } from '../modules/downloadfunctions'

const Downloader =() => {
    
    const [link, setLink] = useState("");
    const [url, setUrl] = useState("");
    const [details, setDetails] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const submitForm = async (e) => {
        setUrl("")
        e.preventDefault();
        setIsLoading(true);
            let res=null;
        try {
            if (link.includes('youtube')) {
              res = await detailsYouTube(link);
            } else if (link.includes('linkedin')) {
              res = await downloadLinkedIn(link);
            } else if (link.includes('facebook')) {
              res = await downloadFacebook(link);
            } else if (link.includes('instagram')) {
              res = await downloadInstagram(link);
            } else {
              throw new Error('Unsupported URL');
            }
            console.log("res",res)
            if(res){
                if(res.details){
                    setDetails(res.details)
                    console.log(details)
                }
                setUrl(res.url)
                console.log(url)
              }
          } catch (err) {
            console.log(err)
          }
          finally {
            setIsLoading(false);
            console.log("result in final",res)
          }
    }

  return (
    <div className="mainbox">
    <div className="type"> <h1>Download Videos from <Typer/></h1></div>
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
      <div style={{color:"black"}}>No ads. No watermarks. No registration.
      Issues? Contact us.</div>
    </div>
    <div>
  {details ? (
    <div>
      {url && (
        <div>
          {url.map((dat, key) => (
            <Card
              key={key}
              style={{
                width: "70vw",
                backgroundColor: "aliceblue",
                margin: "2rem",
                borderRadius: "0.5rem",
                color: "black",
              }}
            >
              <Card.Body style={{ marginTop: "2.5rem" }}>
                <Card.Title>{details.title}</Card.Title>
                <Card.Text>{dat.qualityLabel}</Card.Text>
                <Card.Text>{details.lengthSeconds / 60}</Card.Text>
                <Card.Text>{dat.quality}</Card.Text>
                <Card.Text>{key}</Card.Text>

                <Button
                  onClick={() => downloaderYouTube(link, dat.qualityLabel)}
                  variant="primary"
                  className="download"
                >
                  <h3>Download File</h3>
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  ) : (
    url && (
      <div>
        <div>
          <video className="video" controls preload="metadata">
            <source src={url} type="video/mp4"></source>
          </video>
        </div>
        <div className="down">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            download="video.mp4"
          >
            <button className="submit">
              <h2>Download File</h2>
            </button>
          </a>
        </div>
      </div>
    )
  )}
</div>
    </div>
  )
}

export default Downloader